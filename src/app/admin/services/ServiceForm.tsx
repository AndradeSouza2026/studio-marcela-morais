"use client";

import { useState } from "react";
import { createService, updateService } from "./actions";
import Link from "next/link";
import { Service } from "@prisma/client";

export default function ServiceForm({ service }: { service?: Service }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      if (service) {
        await updateService(service.id, formData);
      } else {
        await createService(formData);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-6 rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
        <input 
          type="text" 
          name="name" 
          defaultValue={service?.name} 
          required 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm border p-2" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Categoria</label>
        <select 
          name="category" 
          defaultValue={service?.category || ""} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm border p-2"
        >
          <option value="">Selecione uma categoria...</option>
          <option value="Unhas">Unhas</option>
          <option value="Alongamento">Alongamento</option>
          <option value="Estética">Estética</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Preço</label>
          <input 
            type="text" 
            name="price" 
            placeholder="Ex: R$ 80,00" 
            defaultValue={service?.price || ""} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm border p-2" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duração</label>
          <input 
            type="text" 
            name="duration" 
            placeholder="Ex: 1h 30m" 
            defaultValue={service?.duration || ""} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm border p-2" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição (Opcional)</label>
        <textarea 
          name="description" 
          rows={4} 
          defaultValue={service?.description || ""} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm border p-2" 
        />
      </div>

      <div className="flex gap-4 justify-end pt-4">
        <Link 
          href="/admin/services" 
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </Link>
        <button 
          type="submit" 
          disabled={loading}
          className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 disabled:opacity-50"
        >
          {loading ? "Salvando..." : "Salvar Serviço"}
        </button>
      </div>
    </form>
  );
}
