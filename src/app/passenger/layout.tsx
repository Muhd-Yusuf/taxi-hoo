import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function PassengerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-alt">
      <DashboardSidebar role="passenger" userName="Sarah Johnson" />
      <main className="lg:ml-[230px] min-h-screen p-4 sm:p-5 lg:p-7 pt-14 lg:pt-7 pb-20 lg:pb-7">
        {children}
      </main>
      <MobileBottomNav role="passenger" />
    </div>
  );
}
