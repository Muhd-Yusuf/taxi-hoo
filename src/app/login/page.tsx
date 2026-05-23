"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiCarFill, PiUserFill, PiArrowLeftBold } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath = role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* -- Form Side -- */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 py-16">
        <div className="w-full max-w-[400px] mx-auto">
          {/* Top -- Logo + Back */}
          <div className="flex items-center justify-between mb-12 sm:mb-14">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
              <span className="text-[17px] font-bold text-dark tracking-tight">
                Taxi-<span className="text-primary">Hoo</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-dark font-medium transition-colors"
            >
              <PiArrowLeftBold size={14} />
              Back
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] font-bold text-dark tracking-tight leading-tight mb-1.5">
            Welcome back
          </h1>
          <p className="text-[14px] sm:text-[15px] text-text-secondary mb-8 sm:mb-10">
            Sign in to your account
          </p>

          {/* Role Toggle */}
          <Tabs
            value={role}
            onValueChange={(val) => setRole(val as "passenger" | "driver")}
            className="mb-7 sm:mb-8"
          >
            <TabsList className="w-full">
              <TabsTrigger value="passenger" className="flex-1 gap-2">
                <PiUserFill size={14} />
                Rider
              </TabsTrigger>
              <TabsTrigger value="driver" className="flex-1 gap-2">
                <PiCarFill size={14} />
                Driver
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = dashboardPath;
            }}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark transition-colors"
                >
                  {showPassword ? <PiEyeSlashBold size={17} /> : <PiEyeBold size={17} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2.5">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-[13px] text-text-secondary font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link
                href="#"
                className="text-[13px] text-dark font-medium hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full mt-2" size="lg">
              Sign in <PiArrowRightBold size={15} />
            </Button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8 sm:mt-10">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-dark font-semibold hover:text-primary transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* -- Brand Panel (lg only) -- */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />

        <div className="relative text-center px-12 max-w-[440px]">
          <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-10 shadow-[0_0_100px_rgba(16,185,129,0.12)]">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={120}
              height={120}
              className="rounded-full shadow-2xl shadow-primary/20"
            />
          </div>
          <h2 className="text-[28px] font-bold text-white mb-4 tracking-tight">
            Ride with confidence
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed">
            Thousands trust Taxi-Hoo for safe, reliable transportation every day. Your journey is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}
