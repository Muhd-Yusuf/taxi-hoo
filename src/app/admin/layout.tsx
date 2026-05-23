import DashboardSidebar from "@/components/DashboardSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardSidebar role="admin" userName="Admin User" />
      <main className="lg:ml-64 min-h-screen p-4 lg:p-8 pt-16 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
