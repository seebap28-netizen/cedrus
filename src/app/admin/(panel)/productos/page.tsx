"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { formatPrice } from "@/lib/money";
import { MENUS, menusLabel, parseMenus } from "@/lib/menus";
import type { Category, MenuId, Product } from "@/lib/types";

const empty = {
  name: "",
  description: "",
  price: 0,
  categoryId: "",
  imageUrl: "",
  available: true,
  featured: false,
  menus: ["weekday"] as MenuId[],
};

export default function ProductsAdminPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    try {
      const [cats, prods] = await Promise.all([
        fetch("/api/categories", { cache: "no-store" }).then((res) => res.json()),
        fetch("/api/products", { cache: "no-store" }).then((res) => res.json()),
      ]);
      if (!Array.isArray(cats) || !Array.isArray(prods)) {
        throw new Error("No se pudo cargar el menú");
      }
      setCategories(cats);
      setItems(prods);
      setForm((current) => ({
        ...current,
        categoryId: current.categoryId || cats[0]?.id || "",
      }));
    } catch {
      setError("No se pudo cargar el menú");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  function startEdit(product: Product) {
    setEditingId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      categoryId: product.categoryId,
      imageUrl: product.imageUrl,
      available: product.available,
      featured: product.featured,
      menus: parseMenus(product.menus),
    });
    setError("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function reset() {
    setEditingId(null);
    setForm({
      ...empty,
      categoryId: categories[0]?.id || "",
    });
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  }

  async function onFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const data = new FormData();
      data.append("file", file);
      const response = await fetch("/api/uploads", {
        method: "POST",
        credentials: "same-origin",
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as {
        url?: string;
        error?: string;
      } | null;
      const url = payload?.url;
      if (!response.ok || !url) {
        setError(payload?.error || "No se pudo subir la foto");
        return;
      }
      setForm((current) => ({ ...current, imageUrl: url }));
      if (editingId) {
        const response = await fetch(
          `/api/products/${encodeURIComponent(editingId)}`,
          {
            method: "PUT",
            cache: "no-store",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, imageUrl: url }),
          },
        );
        if (!response.ok) {
          setError("La foto se subió, pero no se pudo guardar en el plato");
          return;
        }
        await load();
      }
    } catch {
      setError("No se pudo subir la foto");
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.menus.length) {
      setError("Elegí al menos una carta");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const url = editingId
        ? `/api/products/${encodeURIComponent(editingId)}`
        : "/api/products";
      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        cache: "no-store",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!response.ok) {
        setError(data?.error || "No se pudo guardar");
        return;
      }
      reset();
      await load();
    } catch {
      setError("No se pudo guardar");
    } finally {
      setLoading(false);
    }
  }

  async function removePhoto() {
    const previous = form.imageUrl;
    setForm((current) => ({ ...current, imageUrl: "" }));
    if (fileRef.current) fileRef.current.value = "";
    if (!editingId || !previous) return;
    const response = await fetch(`/api/products/${encodeURIComponent(editingId)}`, {
      method: "PUT",
      cache: "no-store",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: "" }),
    });
    if (!response.ok) {
      setForm((current) => ({ ...current, imageUrl: previous }));
      setError("No se pudo quitar la foto");
      return;
    }
    await load();
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar este producto?")) return;
    const response = await fetch(`/api/products/${encodeURIComponent(id)}`, {
      method: "DELETE",
      cache: "no-store",
      credentials: "same-origin",
    });
    const data = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    if (!response.ok) {
      setError(data?.error || "No se pudo eliminar");
      return;
    }
    if (editingId === id) reset();
    await load();
  }

  function categoryName(id: string) {
    return categories.find((item) => item.id === id)?.name ?? "—";
  }

  return (
    <div>
      <h1 className="font-serif text-4xl text-cedar">Productos</h1>
      <p className="mt-2 text-muted">
        El menú público se actualiza al crear, editar o desactivar platos. Cada
        producto entra en la carta de lunes a sábado, la de domingo, o ambas.
      </p>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2"
      >
        <label className="text-sm">
          Nombre
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          Categoría
          <select
            required
            value={form.categoryId}
            onChange={(event) =>
              setForm({ ...form, categoryId: event.target.value })
            }
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          Precio
          <input
            type="number"
            min={0}
            value={form.price}
            onChange={(event) =>
              setForm({ ...form, price: Number(event.target.value) })
            }
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          />
        </label>
        <div className="text-sm md:col-span-2">
          Foto del plato
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={(event) => void onFile(event)}
            disabled={uploading || loading}
            className="mt-1 block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-cedar file:px-4 file:py-2 file:text-cream"
          />
          <p className="mt-1 text-muted">
            {uploading
              ? "Subiendo foto…"
              : "Elegí una imagen desde el computador (JPG, PNG, WEBP o GIF, hasta 4 MB)."}
          </p>
          {form.imageUrl ? (
            <div className="mt-3 flex items-end gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={form.imageUrl}
                alt="Vista previa"
                className="h-24 w-24 rounded-xl object-cover"
              />
              <button
                type="button"
                className="text-sm text-muted"
                onClick={() => void removePhoto()}
              >
                Quitar foto
              </button>
            </div>
          ) : null}
        </div>
        <label className="text-sm md:col-span-2">
          Descripción
          <textarea
            value={form.description}
            onChange={(event) =>
              setForm({ ...form, description: event.target.value })
            }
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
            rows={2}
          />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.available}
            onChange={(event) =>
              setForm({ ...form, available: event.target.checked })
            }
          />
          Disponible
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) =>
              setForm({ ...form, featured: event.target.checked })
            }
          />
          Destacado en inicio
        </label>
        <fieldset className="md:col-span-2">
          <legend className="text-sm">Cartas</legend>
          <div className="mt-2 flex flex-wrap gap-4">
            {MENUS.map((menu) => (
              <label key={menu.id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.menus.includes(menu.id)}
                  onChange={(event) => {
                    const next = event.target.checked
                      ? [...form.menus, menu.id]
                      : form.menus.filter((id) => id !== menu.id);
                    setForm({ ...form, menus: next });
                  }}
                />
                {menu.label}
              </label>
            ))}
          </div>
        </fieldset>
        {error ? <p className="text-sm text-red-700 md:col-span-2">{error}</p> : null}
        <div className="flex gap-3 md:col-span-2">
          <button
            type="submit"
            disabled={loading || uploading}
            className="rounded-full bg-cedar px-5 py-2 text-sm text-cream"
          >
            {editingId ? "Guardar cambios" : "Crear producto"}
          </button>
          {editingId ? (
            <button type="button" onClick={reset} className="text-sm text-muted">
              Cancelar
            </button>
          ) : null}
        </div>
      </form>

      <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-cedar/5 text-muted">
            <tr>
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Carta</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-black/5">
                <td className="px-4 py-3">
                  <div className="flex items-start gap-3">
                    {item.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="h-12 w-12 shrink-0 rounded-lg object-cover"
                      />
                    ) : null}
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{categoryName(item.categoryId)}</td>
                <td className="px-4 py-3">{menusLabel(parseMenus(item.menus))}</td>
                <td className="px-4 py-3">{formatPrice(item.price)}</td>
                <td className="px-4 py-3">
                  {item.available ? "Disponible" : "Oculto"}
                  {item.featured ? " · Destacado" : ""}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    className="mr-3 text-cedar"
                    onClick={() => startEdit(item)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="text-red-700"
                    onClick={() => void remove(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
