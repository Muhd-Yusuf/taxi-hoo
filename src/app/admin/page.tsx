"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiShieldCheckFill } from "react-icons/pi";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-8 sm:mb-10">
          <Image src="/logo.jpeg" alt="Taxi-Hoo" width={60} height={60} className="rounded-2xl mx-auto mb-4 shadow-lg shadow-primary/20" />
          <h1 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight mb-1">Admin Portal</h1>
          <p className="text-[13px] text-gray-500">Taxi-Hoo Management Dashboard</p>
        </div>

        <div className="bg-dark-light border border-dark-border rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-xl px-3.5 py-2.5 mb-6">
            <PiShieldCheckFill size={16} className="text-primary" />
            <span className="text-[12px] text-primary font-medium">Authorized personnel only</span>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/admin/dashboard"; }} className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-gray-300 mb-1.5">Admin Email</label>
              <input type="email" placeholder="admin@taxihoo.com" className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-dark-border bg-dark-lighter text-[13px] text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" required />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-gray-300 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter admin password" className="w-full px-3.5 pr-10 py-2.5 sm:py-3 rounded-xl border border-dark-border bg-dark-lighter text-[13px] text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                  {showPassword ? <PiEyeSlashBold size={16} /> : <PiEyeBold size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-dark text-[13px] font-bold py-2.5 sm:py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-1">
              Access Dashboard <PiArrowRightBold size={14} />
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-6">
          Not an admin? <Link href="/login" className="text-primary hover:underline font-medium">Go to rider login</Link>
        </p>
      </div>
    </div>
  );
}
