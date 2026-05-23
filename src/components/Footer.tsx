import Link from "next/link";
import Image from "next/image";
import { RiTwitterXFill, RiInstagramLine, RiFacebookCircleLine } from "react-icons/ri";

const footerLinks = {
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Product: [
    { label: "Ride", href: "#" },
    { label: "Drive", href: "#" },
    { label: "Business", href: "#" },
    { label: "Cities", href: "#" },
  ],
  Support: [
    { label: "Help", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

const socialLinks = [
  { icon: RiTwitterXFill, href: "#", label: "Twitter" },
  { icon: RiInstagramLine, href: "#", label: "Instagram" },
  { icon: RiFacebookCircleLine, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.jpeg"
                alt="Taxi-Hoo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-[16px] font-bold text-white tracking-tight">
                Taxi-<span className="text-primary">Hoo</span>
              </span>
            </Link>
            <p className="text-[13px] text-zinc-400 leading-relaxed max-w-[220px] mb-6">
              Fast, safe, and reliable rides at the tap of a button.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-zinc-500">
            &copy; {new Date().getFullYear()} Taxi-Hoo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] text-zinc-500 hover:text-zinc-300 transition-colors"
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
