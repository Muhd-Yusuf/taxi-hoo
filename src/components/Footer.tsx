import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Taxi-Hoo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">
                TAXI-<span className="text-primary">HOO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern taxi booking platform connecting passengers with drivers
              quickly, safely, and conveniently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#safety" className="hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  Become a Driver
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +234 800 TAXI HOO
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                hello@taxihoo.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Taxi-Hoo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
