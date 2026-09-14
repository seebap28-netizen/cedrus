import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin, unauthorized } from "@/lib/api-guard";
import { parseMenus } from "@/lib/menus";
import { createProduct, getProducts, getStore } from "@/lib/store";

export const dynamic = "force-dynamic";

function noStore(data: unknown, init?: { status?: number }) {
  return NextResponse.json(data, {
    status: init?.status ?? 200,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function GET() {
  const products = await getProducts();
  return noStore(products);
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return unauthorized();
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
  if (!body.name?.trim()) {
    return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
  }
  if (!body.categoryId) {
    return NextResponse.json({ error: "La categoría es obligatoria" }, { status: 400 });
  }
  const store = await getStore();
  if (!store.categories.some((item) => item.id === body.categoryId)) {
    return NextResponse.json({ error: "Categoría inválida" }, { status: 400 });
  }
  if (Array.isArray(body.menus) && body.menus.length === 0) {
    return NextResponse.json(
      { error: "Elegí al menos una carta" },
      { status: 400 },
    );
  }
  try {
    const product = await createProduct({
      name: body.name.trim(),
      description: body.description?.trim() || "",
      price: Number(body.price) || 0,
      categoryId: body.categoryId,
      imageUrl: body.imageUrl?.trim() || "",
      available: body.available ?? true,
      featured: body.featured ?? false,
      menus: parseMenus(body.menus),
    });
    revalidatePath("/");
    revalidatePath("/menu");
    revalidatePath("/admin");
    return NextResponse.json(product, {
      status: 201,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("No se pudo crear el producto", error);
    return NextResponse.json(
      { error: "No se pudo guardar el producto" },
      { status: 500 },
    );
  }
}
