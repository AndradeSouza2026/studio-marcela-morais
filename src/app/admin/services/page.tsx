import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import DeleteServiceButton from "./DeleteButton";

export default async function ServicesAdminPage() {
  const services = await db.service.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif font-bold">Gerenciar Serviços</h1>
        <Link
          href="/admin/services/new"
          className="bg-accent text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-accent/90"
        >
          <Plus size={18} />
          <span>Novo Serviço</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 font-medium text-gray-500">Nome</th>
              <th className="px-6 py-4 font-medium text-gray-500">Categoria</th>
              <th className="px-6 py-4 font-medium text-gray-500">Preço</th>
              <th className="px-6 py-4 font-medium text-gray-500">Duração</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {services.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Nenhum serviço cadastrado ainda.
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{service.name}</td>
                  <td className="px-6 py-4 text-gray-600">{service.category || "-"}</td>
                  <td className="px-6 py-4 text-gray-600">{service.price || "-"}</td>
                  <td className="px-6 py-4 text-gray-600">{service.duration || "-"}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/services/${service.id}/edit`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                        title="Editar"
                      >
                        <Pencil size={18} />
                      </Link>
                      
                      <DeleteServiceButton id={service.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
