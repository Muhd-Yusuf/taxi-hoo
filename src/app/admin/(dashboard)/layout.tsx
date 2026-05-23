import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardSidebar role="admin" userName="Admin User" />
      <main className="lg:ml-[260px] min-h-screen p-5 sm:p-6 lg:p-8 pt-16 lg:pt-8 pb-24 lg:pb-8">
        {children}
      </main>
      <MobileBottomNav role="admin" />
    </div>
  );
}
