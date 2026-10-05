import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";

export default async function CursosPage() {
  const cursos = await db.course.findMany();

  return (
    <main className="min-h-screen bg-offwhite py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Formação Profissional</span>
          <h1 className="font-serif text-5xl text-accent mb-6">Cursos e Especializações</h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto font-light">
            Aprenda com Marcela Morais as técnicas que vão elevar o nível do seu trabalho e transformar sua carreira no Nail Design.
          </p>
        </div>

        {cursos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-textMuted">Nenhum curso disponível no momento. Novas turmas em breve.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso: any) => (
              <div key={curso.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={curso.image || "https://images.unsplash.com/photo-1516975080661-460f38b4d8d1?q=80&w=2070&auto=format&fit=crop"} 
                    alt={curso.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {curso.isHighlighted && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{curso.forWho}</span>
                  <h3 className="font-serif text-xl text-accent mb-3">{curso.name}</h3>
                  <p className="text-sm text-textMuted mb-6 flex-1">{curso.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <span>⏱</span> {curso.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📍</span> {curso.modality}
                    </div>
                  </div>

                  <Link 
                    href={`/cursos/${curso.slug}`} 
                    className="block text-center w-full bg-accent hover:bg-black text-white px-4 py-3 rounded-md text-sm uppercase tracking-wider font-medium transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-24 text-center">
          <Link href="/" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
            <span>←</span> Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}
