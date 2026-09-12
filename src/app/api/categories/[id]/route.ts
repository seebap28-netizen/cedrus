import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin, unauthorized } from "@/lib/api-guard";
import { deleteCategory, updateCategory } from "@/lib/store";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  if (!(await requireAdmin())) return unauthorized();
  const { id } = await params;
  const body = (await request.json()) as {
    name?: string;
    description?: string;
    sortOrder?: number;
  };
  if (body.name !== undefined && !body.name.trim()) {
    return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
  }
  const updated = await updateCategory(id, {
    ...(body.name !== undefined ? { name: body.name.trim() } : {}),
    ...(body.description !== undefined
      ? { description: body.description.trim() }
      : {}),
    ...(body.sortOrder !== undefined
      ? { sortOrder: Number(body.sortOrder) || 0 }
      : {}),
  });
  if (!updated) {
    return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
  }
  revalidatePath("/");
  revalidatePath("/menu");
  revalidatePath("/admin");
  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await requireAdmin())) return unauthorized();
  const { id } = await params;
  const result = await deleteCategory(id);
  if (result === "not_found") {
    return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
  }
  if (result === "in_use") {
    return NextResponse.json(
      { error: "No se puede eliminar: hay productos en esta categoría" },
      { status: 409 },
    );
  }
  revalidatePath("/");
  revalidatePath("/menu");
  revalidatePath("/admin");
  return NextResponse.json({ ok: true });
}
