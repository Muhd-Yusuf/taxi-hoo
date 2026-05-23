"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiShieldCheckFill } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-5 py-12 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo + Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-5 shadow-[0_0_60px_rgba(16,185,129,0.1)]">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={52}
              height={52}
              className="rounded-full"
            />
          </div>
          <h1 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight mb-1.5">
            Admin Portal
          </h1>
          <p className="text-[14px] text-zinc-500">
            Taxi-Hoo Management Dashboard
          </p>
        </div>

        {/* Card */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            {/* Shield badge */}
            <Badge variant="outline" className="w-fit gap-2 border-primary/20 bg-primary/10 text-primary px-4 py-2">
              <PiShieldCheckFill size={16} />
              Authorized personnel only
            </Badge>
          </CardHeader>

          <CardContent>
            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/admin/dashboard";
              }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="adminEmail" className="text-zinc-300">
                  Admin Email
                </Label>
                <Input
                  id="adminEmail"
                  type="email"
                  placeholder="admin@taxihoo.com"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adminPassword" className="text-zinc-300">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="adminPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 pr-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <PiEyeSlashBold size={17} /> : <PiEyeBold size={17} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white w-full mt-2"
                size="lg"
              >
                Access Dashboard <PiArrowRightBold size={15} />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer link */}
        <p className="text-center text-[13px] text-zinc-600 mt-7 sm:mt-8">
          Not an admin?{" "}
          <Link
            href="/login"
            className="text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Go to rider login
          </Link>
        </p>
      </div>
    </div>
  );
}
