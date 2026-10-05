"use client";

import { Trash2 } from "lucide-react";
import { deleteService } from "./actions";

export default function DeleteServiceButton({ id }: { id: string }) {
  return (
    <button
      type="button"
      className="p-2 text-red-600 hover:bg-red-50 rounded-md"
      title="Excluir"
      onClick={async () => {
        if (confirm("Tem certeza que deseja excluir este serviço?")) {
          await deleteService(id);
        }
      }}
    >
      <Trash2 size={18} />
    </button>
  );
}
