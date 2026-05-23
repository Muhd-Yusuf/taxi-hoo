import MobileBottomNav from "@/components/MobileBottomNav";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] flex flex-col bg-white">
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
      <MobileBottomNav role="driver" />
    </div>
  );
}
