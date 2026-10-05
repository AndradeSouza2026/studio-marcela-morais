import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-accent text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-lg font-serif font-bold tracking-widest">ADMIN PANEL</h2>
          <p className="text-xs text-gray-400 mt-1">Studio Marcela Morais</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          <Link href="/admin" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Dashboard</Link>
          <Link href="/admin/services" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Serviços</Link>
          <Link href="/admin/courses" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Cursos</Link>
          <Link href="/admin/gallery" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Galeria</Link>
          <Link href="/admin/testimonials" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Depoimentos</Link>
          <Link href="/admin/leads" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Leads (Contatos)</Link>
          <Link href="/admin/appointments" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Agendamentos</Link>
          <Link href="/admin/settings" className="block px-4 py-2 rounded-md hover:bg-white/10 text-sm">Configurações</Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition-colors text-left">
            Sair
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header placeholder */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 md:hidden">
          <h2 className="text-lg font-bold">Admin</h2>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
