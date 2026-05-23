import Link from "next/link";
import Image from "next/image";
import {
  RiTwitterXFill,
  RiInstagramLine,
  RiFacebookCircleLine,
} from "react-icons/ri";

const footerLinks = {
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Product: [
    { label: "Ride", href: "/passenger/book" },
    { label: "Drive", href: "/register?role=driver" },
    { label: "Business", href: "#" },
    { label: "Cities", href: "#" },
  ],
  Support: [
    { label: "Help", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Admin", href: "/admin" },
  ],
};

const socialLinks = [
  { icon: RiTwitterXFill, href: "#", label: "Twitter" },
  { icon: RiInstagramLine, href: "#", label: "Instagram" },
  { icon: RiFacebookCircleLine, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.jpeg"
                alt="Taxi-Hoo"
                width={30}
                height={30}
                className="rounded-lg"
              />
              <span className="text-[15px] font-bold text-white tracking-tight">
                Taxi-<span className="text-emerald-400">Hoo</span>
              </span>
            </Link>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px] mb-6">
              Fast, safe, and reliable rides at the tap of a button.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-zinc-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800/80 my-12" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-zinc-600">
            &copy; {new Date().getFullYear()} Taxi-Hoo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
