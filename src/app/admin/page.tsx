import { db } from '@/lib/db';
import Link from 'next/link';

// Helper to fetch data at build/request time
async function getDashboardStats() {
  const [services, courses, leads, appointments] = await Promise.all([
    db.service.findMany(),
    db.course.findMany(),
    db.lead.findMany(),
    db.appointment.findMany(),
  ]);

  return {
    servicesCount: services.length,
    coursesCount: courses.length,
    leadsCount: leads.length,
    appointmentsCount: appointments.length,
    recentLeads: leads.slice(-5).reverse(),
    recentAppointments: appointments.slice(-5).reverse(),
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Total de Serviços</p>
          <p className="text-3xl font-bold text-accent">{stats.servicesCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Total de Cursos</p>
          <p className="text-3xl font-bold text-accent">{stats.coursesCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Novos Leads</p>
          <p className="text-3xl font-bold text-accent">{stats.leadsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Agendamentos</p>
          <p className="text-3xl font-bold text-accent">{stats.appointmentsCount}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Leads Recentes</h2>
            <Link href="/admin/leads" className="text-sm text-primary hover:underline">Ver todos</Link>
          </div>
          <div className="space-y-4">
            {stats.recentLeads.length === 0 ? (
              <p className="text-sm text-gray-500 italic">Nenhum lead registrado.</p>
            ) : (
              stats.recentLeads.map((lead: any) => (
                <div key={lead.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-sm">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.interest}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{lead.status}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Agendamentos Recentes</h2>
            <Link href="/admin/appointments" className="text-sm text-primary hover:underline">Ver todos</Link>
          </div>
          <div className="space-y-4">
            {stats.recentAppointments.length === 0 ? (
              <p className="text-sm text-gray-500 italic">Nenhum agendamento registrado.</p>
            ) : (
              stats.recentAppointments.map((app: any) => (
                <div key={app.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-sm">{app.clientName}</p>
                    <p className="text-xs text-gray-500">{app.service} - {app.date} às {app.time}</p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{app.status}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
