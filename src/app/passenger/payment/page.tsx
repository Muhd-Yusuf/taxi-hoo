"use client";

import { useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import {
  PiCurrencyNgnFill,
  PiCheckBold,
  PiCreditCardFill,
  PiPlusBold,
  PiCarFill,
  PiCheckCircleFill,
} from "react-icons/pi";

export default function PaymentPage() {
  const [view, setView] = useState<"methods" | "success">("methods");

  if (view === "success") {
    return (
      <div className="bg-zinc-50 min-h-full flex flex-col">
        <AppHeader title="Payment" showBack />
        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div className="w-28 h-28 rounded-full bg-emerald-100 flex items-center justify-center">
            <PiCheckCircleFill size={64} className="text-emerald-500" />
          </div>
          <p className="text-xl font-bold text-zinc-900 mt-6">Payment Success</p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">{"\u20A6"}3,500</p>
          <p className="text-sm text-zinc-500 text-center mt-2 max-w-xs">
            Your booking has been successfully sent to your driver
          </p>
          <Link
            href="/passenger/book"
            className="w-full max-w-xs h-14 bg-emerald-500 text-white font-semibold rounded-2xl mt-8 flex items-center justify-center"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 min-h-full pb-6">
      <AppHeader title="Payment" showBack />

      <div className="px-5 pt-5 space-y-5">
        {/* Active payment method */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-4">
            Payment Method
          </h3>

          {/* Cash - selected */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/20">
              <PiCurrencyNgnFill size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-emerald-900">Cash</p>
              <p className="text-xs text-emerald-600 mt-0.5">Pay driver directly</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <PiCheckBold size={13} className="text-white" />
            </div>
          </div>

          {/* Card */}
          <div className="flex items-center gap-4 p-4 rounded-xl mt-3 hover:bg-zinc-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <PiCreditCardFill size={22} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-medium text-zinc-900">Debit Card</p>
              <p className="text-xs text-zinc-500 mt-0.5">**** 4532</p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-zinc-300" />
          </div>

          {/* Add new */}
          <button className="w-full flex items-center gap-4 p-4 rounded-xl mt-3 text-emerald-600 hover:bg-emerald-50 transition-colors border border-dashed border-emerald-300">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <PiPlusBold size={20} className="text-emerald-600" />
            </div>
            <span className="text-sm font-semibold">Add payment method</span>
          </button>
        </div>

        {/* Recent payments */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-4">
            Recent Payments
          </h3>
          <div className="space-y-3">
            {[
              { desc: "Trip to Victoria Island", amount: "₦3,500", date: "Today, 10:30 AM", driver: "James Okafor" },
              { desc: "Trip to Ikeja", amount: "₦2,200", date: "Yesterday, 3:45 PM", driver: "Amina Bello" },
              { desc: "Trip to Lekki", amount: "₦4,100", date: "May 20, 9:00 AM", driver: "Fatima Yusuf" },
            ].map((payment, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <PiCarFill size={16} className="text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{payment.desc}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {payment.driver} &middot; {payment.date}
                  </p>
                </div>
                <p className="text-sm font-bold text-emerald-700 flex-shrink-0">{payment.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo code */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-4">
            Promo Code
          </h3>
          <div className="flex gap-3">
            <input
              placeholder="Enter promo code"
              className="flex-1 h-13 bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <button className="h-13 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm active:scale-95 transition-all">
              Apply
            </button>
          </div>
        </div>

        {/* Pay Now button */}
        <button
          onClick={() => setView("success")}
          className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold rounded-2xl text-base transition-all shadow-lg shadow-emerald-500/20"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
