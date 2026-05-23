import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpeg" alt="Taxi-Hoo" width={32} height={32} className="rounded-lg" />
              <span className="text-base font-bold text-white tracking-tight">
                Taxi-<span className="text-primary">Hoo</span>
              </span>
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
              Connecting passengers with drivers for fast, safe, and reliable transportation.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About us", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {["Ride", "Drive", "Business", "Freight"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {["Help Center", "Safety", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-600">
            &copy; {new Date().getFullYear()} Taxi-Hoo. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
