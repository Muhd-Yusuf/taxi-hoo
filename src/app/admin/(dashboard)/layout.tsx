import DashboardSidebar from "@/components/DashboardSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] flex bg-zinc-50">
      <DashboardSidebar role="admin" userName="Admin User" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden lg:ml-[260px]">
        {children}
      </main>
    </div>
  );
}
