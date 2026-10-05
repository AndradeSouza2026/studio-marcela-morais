import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HEADER MOCKUP */}
      <header className="absolute top-0 w-full z-50 py-6 px-4 md:px-8 flex justify-between items-center text-white">
        <div className="font-serif text-2xl tracking-widest font-semibold drop-shadow-md">MARCELA MORAIS</div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-medium drop-shadow-md">
          <Link href="#sobre" className="hover:text-primary transition-colors">Sobre</Link>
          <Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link>
          <Link href="#cursos" className="hover:text-primary transition-colors">Cursos</Link>
          <Link href="#contato" className="hover:text-primary transition-colors">Contato</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
            alt="Unhas elegantes" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-accent/60 bg-gradient-to-t from-accent/90 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-16">
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block reveal active">
            Estúdio & Formação Profissional
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight reveal active" style={{ transitionDelay: '0.2s' }}>
            A Arte da Elegância em Cada Detalhe
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light reveal active" style={{ transitionDelay: '0.4s' }}>
            Referência premium em Nail Design e capacitação profissional em Cachoeiro de Itapemirim. Eleve sua autoestima ou transforme sua carreira.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal active" style={{ transitionDelay: '0.6s' }}>
            <Link 
              href="#agendamento" 
              className="bg-primary hover:bg-roseDark text-white px-8 py-4 rounded-md text-sm uppercase tracking-wider font-medium transition-all transform hover:scale-105 shadow-soft"
            >
              Agendar Atendimento
            </Link>
            <Link 
              href="#cursos" 
              className="bg-transparent border border-white hover:bg-white hover:text-accent text-white px-8 py-4 rounded-md text-sm uppercase tracking-wider font-medium transition-all"
            >
              Conhecer os Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS PLACEHOLDER */}
      <section id="sobre" className="py-24 bg-offwhite px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
               <Image 
                 src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop"
                 alt="Marcela Morais Studio"
                 fill
                 className="object-cover rounded-tl-[100px] rounded-br-[100px] shadow-soft"
               />
               {/* Decorative element */}
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary -z-10 rounded-full"></div>
             </div>
           </div>
           <div className="w-full md:w-1/2">
             <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Sobre o Studio</span>
             <h2 className="font-serif text-4xl text-accent mb-6">Transformando Autoestima e Vidas</h2>
             <p className="text-textMuted leading-relaxed mb-6">
               O Studio Marcela Morais nasceu do propósito de entregar a mais alta qualidade em serviços de Nail Design, combinando técnicas avançadas com um atendimento acolhedor e sofisticado.
             </p>
             <p className="text-textMuted leading-relaxed mb-8">
               Mais do que embelezar mãos, somos uma escola dedicada a formar profissionais de excelência, compartilhando nossa expertise para que novas nail designers alcancem o sucesso na carreira.
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                  <span className="font-serif text-primary text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-medium text-accent">Marcela Morais</h4>
                  <p className="text-xs text-textMuted uppercase tracking-wider">Fundadora & Instrutora</p>
                </div>
             </div>
           </div>
        </div>
      </section>
      {/* SERVICES PREVIEW */}
      <section id="servicos" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Nossa Expertise</span>
            <h2 className="font-serif text-4xl text-accent mb-4">Serviços Premium</h2>
            <p className="text-textMuted max-w-2xl mx-auto">Técnicas exclusivas para um resultado impecável e duradouro.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2069&auto=format&fit=crop" alt="Alongamento em Gel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-xl text-accent mb-3">Alongamento em Fibra de Vidro</h3>
                <p className="text-textMuted text-sm mb-6">Resistência, naturalidade e durabilidade para suas unhas.</p>
                <Link href="#agendamento" className="text-primary text-sm font-medium uppercase tracking-wider hover:text-roseDark transition-colors flex items-center justify-center gap-2">
                  Agendar <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1620336214041-3837976e8ea3?q=80&w=1964&auto=format&fit=crop" alt="Banho de Gel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-xl text-accent mb-3">Banho de Gel</h3>
                <p className="text-textMuted text-sm mb-6">Proteção extra para unhas naturais crescerem fortes e saudáveis.</p>
                <Link href="#agendamento" className="text-primary text-sm font-medium uppercase tracking-wider hover:text-roseDark transition-colors flex items-center justify-center gap-2">
                  Agendar <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop" alt="Spa dos Pés" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-xl text-accent mb-3">Spa dos Pés & Pedicure</h3>
                <p className="text-textMuted text-sm mb-6">Relaxamento profundo e renovação com esmaltação perfeita.</p>
                <Link href="#agendamento" className="text-primary text-sm font-medium uppercase tracking-wider hover:text-roseDark transition-colors flex items-center justify-center gap-2">
                  Agendar <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/servicos" className="inline-block border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-md text-sm uppercase tracking-wider font-medium transition-colors">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section id="cursos" className="py-24 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Escola de Profissionais</span>
            <h2 className="font-serif text-4xl text-accent mb-6">Sua Nova Profissão Começa Aqui</h2>
            <p className="text-textMuted leading-relaxed mb-8">
              Aprenda o método Marcela Morais e fature alto no mercado da beleza. Cursos presenciais com prática em modelos reais e certificado reconhecido.
            </p>
            <Link href="/cursos" className="bg-accent hover:bg-black text-white px-8 py-4 rounded-md text-sm uppercase tracking-wider font-medium transition-colors inline-block">
              Ver Catálogo de Cursos
            </Link>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-soft transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="flex gap-4 items-center mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden relative shrink-0">
                  <Image src="https://images.unsplash.com/photo-1516975080661-460f38b4d8d1?q=80&w=2070&auto=format&fit=crop" alt="Curso Iniciante" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">Para Iniciantes</span>
                  <h4 className="font-serif text-lg text-accent">Nail Designer do Zero</h4>
                </div>
              </div>
              <p className="text-sm text-textMuted mb-4 line-clamp-2">Domine as técnicas de fibra de vidro mesmo sem nunca ter pego em um alicate.</p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs bg-secondary text-accent px-2 py-1 rounded">Presencial</span>
                <Link href="/cursos/nail-designer-do-zero" className="text-accent text-sm font-medium hover:text-primary transition-colors">Saiba mais</Link>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-soft transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="flex gap-4 items-center mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden relative shrink-0">
                  <Image src="https://images.unsplash.com/photo-1620336214041-3837976e8ea3?q=80&w=1964&auto=format&fit=crop" alt="Curso Aperfeiçoamento" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">Aperfeiçoamento</span>
                  <h4 className="font-serif text-lg text-accent">Formatos Europeus</h4>
                </div>
              </div>
              <p className="text-sm text-textMuted mb-4 line-clamp-2">Eleve seu nível oferecendo formatos como Almond, Stiletto e Ballerina com simetria perfeita.</p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs bg-secondary text-accent px-2 py-1 rounded">Masterclass</span>
                <Link href="/cursos/formatos-europeus" className="text-accent text-sm font-medium hover:text-primary transition-colors">Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MOCKUP */}
      <footer className="bg-accent text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          <div>
            <div className="font-serif text-2xl tracking-widest font-semibold mb-6">MARCELA MORAIS</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Referência em unhas de alto padrão e cursos profissionalizantes. Transformando vidas através da beleza em Cachoeiro de Itapemirim.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Rua Capitão Deslandes, Centro</li>
              <li>Cachoeiro de Itapemirim – ES</li>
              <li className="pt-2">(28) 99927-8468</li>
              <li>@studiomarcelamorais_cursos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="/cursos" className="hover:text-primary transition-colors">Cursos Presenciais</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition-colors">Área Restrita</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Studio Marcela Morais. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com sofisticação.</p>
        </div>
      </footer>
    </main>
  );
}
