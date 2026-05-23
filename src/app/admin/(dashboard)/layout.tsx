import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] flex flex-col bg-zinc-50 lg:flex-row">
      <DashboardSidebar role="admin" userName="Admin User" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden lg:ml-[260px] pb-20 lg:pb-0">
        {children}
      </main>
      <MobileBottomNav role="admin" />
    </div>
  );
}
