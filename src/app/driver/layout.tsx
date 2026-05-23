import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardSidebar role="driver" userName="James Okafor" />
      <main className="lg:ml-[230px] min-h-screen p-4 sm:p-5 lg:p-7 pt-14 lg:pt-7 pb-20 lg:pb-7">
        {children}
      </main>
      <MobileBottomNav role="driver" />
    </div>
  );
}
