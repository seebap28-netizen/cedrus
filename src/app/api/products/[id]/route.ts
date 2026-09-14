import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin, unauthorized } from "@/lib/api-guard";
import { parseMenus } from "@/lib/menus";
import { deleteProduct, getStore, updateProduct } from "@/lib/store";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

function refresh() {
  revalidatePath("/");
  revalidatePath("/menu");
  revalidatePath("/menu/semana");
  revalidatePath("/menu/domingo");
  revalidatePath("/admin");
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await requireAdmin())) return unauthorized();
  const { id } = await params;
  const body = (await request.json()) as {
    name?: string;
    description?: string;
    price?: number;
    categoryId?: string;
    imageUrl?: string;
    available?: boolean;
    featured?: boolean;
    menus?: unknown;
  };
  if (body.name !== undefined && !body.name.trim()) {
    return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
  }
  if (body.categoryId) {
    const store = await getStore();
    if (!store.categories.some((item) => item.id === body.categoryId)) {
      return NextResponse.json({ error: "Categoría inválida" }, { status: 400 });
    }
  }
  if (Array.isArray(body.menus) && body.menus.length === 0) {
    return NextResponse.json(
      { error: "Elegí al menos una carta" },
      { status: 400 },
    );
  }
  let updated;
  try {
    updated = await updateProduct(id, {
      ...(body.name !== undefined ? { name: body.name.trim() } : {}),
      ...(body.description !== undefined
        ? { description: body.description.trim() }
        : {}),
      ...(body.price !== undefined ? { price: Number(body.price) || 0 } : {}),
      ...(body.categoryId !== undefined ? { categoryId: body.categoryId } : {}),
      ...(body.imageUrl !== undefined ? { imageUrl: body.imageUrl.trim() } : {}),
      ...(body.available !== undefined ? { available: Boolean(body.available) } : {}),
      ...(body.featured !== undefined ? { featured: Boolean(body.featured) } : {}),
      ...(body.menus !== undefined ? { menus: parseMenus(body.menus) } : {}),
    });
  } catch (error) {
    console.error("No se pudo actualizar el producto", error);
    return NextResponse.json(
      { error: "No se pudo guardar el producto" },
      { status: 500 },
    );
  }
  if (!updated) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  refresh();
  return NextResponse.json(updated, { headers: { "Cache-Control": "no-store" } });
}

export async function PATCH(request: Request, context: Params) {
  return PUT(request, context);
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await requireAdmin())) return unauthorized();
  const { id } = await params;
  let ok = false;
  try {
    ok = await deleteProduct(id);
  } catch (error) {
    console.error("No se pudo eliminar el producto", error);
    return NextResponse.json(
      { error: "No se pudo eliminar el producto" },
      { status: 500 },
    );
  }
  if (!ok) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  refresh();
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
