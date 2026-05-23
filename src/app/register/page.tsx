"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiUploadSimpleBold, PiCarFill, PiUserFill } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* -- Brand Panel (lg only) -- */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/8 via-transparent to-primary/5" />

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
            Join Taxi-Hoo today
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed">
            Create an account in minutes and start riding or earning with the most trusted taxi platform in Nigeria.
          </p>
        </div>
      </div>

      {/* -- Form Side -- */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 py-16 overflow-y-auto">
        <div className="w-full max-w-[420px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10 sm:mb-12">
            <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
            <span className="text-[17px] font-bold text-dark tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] font-bold text-dark tracking-tight leading-tight mb-1.5">
            Create your account
          </h1>
          <p className="text-[14px] sm:text-[15px] text-text-secondary mb-8 sm:mb-10">
            Get started with Taxi-Hoo
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
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                required
              />
            </div>

            {/* Driver-specific fields */}
            {role === "driver" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle</Label>
                  <Input
                    id="vehicle"
                    type="text"
                    placeholder="e.g. Toyota Camry 2020"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licensePlate">License plate</Label>
                  <Input
                    id="licensePlate"
                    type="text"
                    placeholder="ABC-123-KD"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Driver&apos;s license</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer bg-surface-alt group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                      <PiUploadSimpleBold size={22} className="text-primary" />
                    </div>
                    <p className="text-[14px] font-medium text-dark mb-1">Click to upload</p>
                    <p className="text-[12px] text-text-muted">PDF, JPG or PNG (max 5MB)</p>
                  </div>
                </div>
              </>
            )}

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
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

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <Checkbox id="terms" required className="mt-0.5" />
              <Label htmlFor="terms" className="text-[13px] text-text-secondary font-normal leading-relaxed cursor-pointer">
                I agree to the{" "}
                <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full mt-3" size="lg">
              Create account <PiArrowRightBold size={15} />
            </Button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8 sm:mt-10">
            Already have an account?{" "}
            <Link href="/login" className="text-dark font-semibold hover:text-primary transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
