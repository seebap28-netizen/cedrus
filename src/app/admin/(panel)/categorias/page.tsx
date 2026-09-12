"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Category } from "@/lib/types";

const empty = { name: "", description: "", sortOrder: 0 };

export default function CategoriesAdminPage() {
  const [items, setItems] = useState<Category[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    const response = await fetch("/api/categories");
    setItems(await response.json());
  }

  useEffect(() => {
    void load();
  }, []);

  function startEdit(category: Category) {
    setEditingId(category.id);
    setForm({
      name: category.name,
      description: category.description,
      sortOrder: category.sortOrder,
    });
    setError("");
  }

  function reset() {
    setEditingId(null);
    setForm(empty);
    setError("");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const url = editingId ? `/api/categories/${editingId}` : "/api/categories";
    const response = await fetch(url, {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(data.error || "No se pudo guardar");
      return;
    }
    reset();
    await load();
  }

  async function remove(id: string) {
    if (!confirm("¿Eliminar esta categoría?")) return;
    const response = await fetch(`/api/categories/${id}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "No se pudo eliminar");
      return;
    }
    await load();
  }

  return (
    <div>
      <h1 className="font-serif text-4xl text-cedar">Categorías</h1>
      <p className="mt-2 text-muted">Creá, editá y eliminá las secciones del menú.</p>

      <form
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
          Orden
          <input
            type="number"
            value={form.sortOrder}
            onChange={(event) =>
              setForm({ ...form, sortOrder: Number(event.target.value) })
            }
            className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          />
        </label>
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
        {error ? <p className="text-sm text-red-700 md:col-span-2">{error}</p> : null}
        <div className="flex gap-3 md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-cedar px-5 py-2 text-sm text-cream"
          >
            {editingId ? "Guardar cambios" : "Crear categoría"}
          </button>
          {editingId ? (
            <button type="button" onClick={reset} className="text-sm text-muted">
              Cancelar
            </button>
          ) : null}
        </div>
      </form>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cedar/5 text-muted">
            <tr>
              <th className="px-4 py-3">Orden</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Descripción</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-black/5">
                <td className="px-4 py-3">{item.sortOrder}</td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3 text-muted">{item.description}</td>
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
