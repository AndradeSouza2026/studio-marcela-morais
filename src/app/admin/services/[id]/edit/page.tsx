import { db } from "@/lib/db";
import ServiceForm from "../../ServiceForm";
import { notFound } from "next/navigation";

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const service = await db.service.findUnique({
    where: { id: params.id },
  });

  if (!service) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-serif font-bold mb-6">Editar Serviço</h1>
      <ServiceForm service={service} />
    </div>
  );
}
