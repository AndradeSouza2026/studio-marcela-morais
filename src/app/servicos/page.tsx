import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";

export default async function ServicosPage() {
  const servicos = await db.service.findMany();

  return (
    <main className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Nossa Expertise</span>
          <h1 className="font-serif text-5xl text-accent mb-6">Menu de Serviços</h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto font-light">
            Da esmaltação perfeita ao alongamento resistente. Escolha o serviço ideal para o seu momento.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-secondary">
          {servicos.length === 0 ? (
            <p className="text-textMuted text-center py-8">Nenhum serviço cadastrado no momento.</p>
          ) : (
            <div className="space-y-8 divide-y divide-secondary">
              {servicos.map((servico: any, index: number) => (
                <div key={servico.id} className={`${index > 0 ? 'pt-8' : ''} flex flex-col md:flex-row gap-6 md:items-center justify-between`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-2xl text-accent">{servico.name}</h3>
                      {servico.category && (
                        <span className="text-[10px] bg-secondary text-textMuted uppercase tracking-widest px-2 py-1 rounded">
                          {servico.category}
                        </span>
                      )}
                    </div>
                    <p className="text-textMuted text-sm mb-4 max-w-2xl">{servico.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>⏱ Duração: {servico.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-3 shrink-0">
                    <p className="font-serif text-2xl text-primary">{servico.price}</p>
                    <Link 
                      href={`https://wa.me/5528999278468?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20o%20servi%C3%A7o%20${encodeURIComponent(servico.name)}`}
                      target="_blank"
                      className="bg-accent hover:bg-black text-white px-6 py-3 rounded-md text-sm uppercase tracking-wider font-medium transition-colors w-full md:w-auto text-center"
                    >
                      Agendar Atendimento
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
            <span>←</span> Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}
