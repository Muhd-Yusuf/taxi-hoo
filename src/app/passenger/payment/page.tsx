"use client";

import { useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import {
  PiCurrencyDollarFill,
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
        <div className="flex-1 flex flex-col items-center justify-center px-5 max-w-lg mx-auto w-full">
          <div className="w-28 h-28 rounded-full bg-brand-100 flex items-center justify-center">
            <PiCheckCircleFill size={64} className="text-brand-500" />
          </div>
          <p className="text-xl font-bold text-zinc-900 mt-6">Payment Success</p>
          <p className="text-3xl font-bold text-brand-600 mt-2">P3,500</p>
          <p className="text-sm text-zinc-500 text-center mt-2 max-w-xs">
            Your booking has been successfully sent to your driver
          </p>
          <Link
            href="/passenger/book"
            className="w-full max-w-xs h-14 bg-brand-500 text-white font-semibold rounded-2xl mt-8 flex items-center justify-center"
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

      <div className="max-w-lg mx-auto px-5 pt-5 space-y-5">
        {/* Active payment method */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-4">
            Payment Method
          </h3>

          {/* Cash - selected */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-50 border-2 border-brand-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md shadow-brand-500/20">
              <PiCurrencyDollarFill size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-brand-900">Cash</p>
              <p className="text-xs text-brand-600 mt-0.5">Pay driver directly</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
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
          <button className="w-full flex items-center gap-4 p-4 rounded-xl mt-3 text-brand-600 hover:bg-brand-50 transition-colors border border-dashed border-brand-300">
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
              <PiPlusBold size={20} className="text-brand-600" />
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
              { desc: "Trip to Riverwalk", amount: "P3,500", date: "Today, 10:30 AM", driver: "Thabo Mokobi" },
              { desc: "Trip to Phakalane", amount: "P2,200", date: "Yesterday, 3:45 PM", driver: "Keabetswe Molefe" },
              { desc: "Trip to Main Mall", amount: "P4,100", date: "May 20, 9:00 AM", driver: "Mpho Sebina" },
            ].map((payment, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <PiCarFill size={16} className="text-brand-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{payment.desc}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {payment.driver} &middot; {payment.date}
                  </p>
                </div>
                <p className="text-sm font-bold text-brand-700 flex-shrink-0">{payment.amount}</p>
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
              className="flex-1 h-13 bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
            <button className="h-13 px-6 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl text-sm active:scale-95 transition-all">
              Apply
            </button>
          </div>
        </div>

        {/* Pay Now button */}
        <button
          onClick={() => setView("success")}
          className="w-full h-14 bg-brand-500 hover:bg-brand-600 active:scale-[0.98] text-white font-semibold rounded-2xl text-base transition-all shadow-lg shadow-brand-500/20"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
