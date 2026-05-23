import Link from "next/link";
import Image from "next/image";
import { RiTwitterXFill, RiInstagramLine, RiFacebookCircleLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpeg" alt="Taxi-Hoo" width={30} height={30} className="rounded-lg" />
              <span className="text-[15px] font-bold text-white tracking-tight">Taxi-<span className="text-primary">Hoo</span></span>
            </Link>
            <p className="text-[12px] text-gray-500 leading-relaxed max-w-[200px] mb-4">
              Fast, safe, and reliable rides at the tap of a button.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><RiTwitterXFill size={16} /></Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><RiInstagramLine size={16} /></Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><RiFacebookCircleLine size={16} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {["About us", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}><Link href="#" className="text-[12px] text-gray-500 hover:text-gray-300 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-3">Products</h4>
            <ul className="space-y-2">
              {["Ride", "Drive", "Business", "Freight"].map((item) => (
                <li key={item}><Link href="#" className="text-[12px] text-gray-500 hover:text-gray-300 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "Safety", "Terms", "Privacy"].map((item) => (
                <li key={item}><Link href="#" className="text-[12px] text-gray-500 hover:text-gray-300 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">&copy; {new Date().getFullYear()} Taxi-Hoo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
