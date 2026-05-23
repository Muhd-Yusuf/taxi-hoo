import DashboardSidebar from "@/components/DashboardSidebar";

export default function PassengerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardSidebar role="passenger" userName="Sarah Johnson" />
      <main className="lg:ml-64 min-h-screen p-4 lg:p-8 pt-16 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
