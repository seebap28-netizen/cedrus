import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin, unauthorized } from "@/lib/api-guard";
import { createCategory, getCategories } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return unauthorized();
  const body = (await request.json()) as {
    name?: string;
    description?: string;
    sortOrder?: number;
  };
  if (!body.name?.trim()) {
    return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
  }
  const category = await createCategory({
    name: body.name.trim(),
    description: body.description?.trim() || "",
    sortOrder: Number.isFinite(body.sortOrder) ? Number(body.sortOrder) : 0,
  });
  revalidatePath("/");
  revalidatePath("/menu");
  revalidatePath("/admin");
  return NextResponse.json(category, { status: 201 });
}
