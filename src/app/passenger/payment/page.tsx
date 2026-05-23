"use client";

import AppHeader from "@/components/AppHeader";
import {
  PiCurrencyNgnFill,
  PiCheckBold,
  PiCreditCardFill,
  PiPlusBold,
  PiCarFill,
} from "react-icons/pi";

export default function PaymentPage() {
  return (
    <div className="bg-zinc-50 min-h-full">
      <AppHeader title="Payment" showBack />

      <div className="px-4 py-4 space-y-4">
        {/* Active payment method */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm">
          <h3 className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <div className="w-1 h-4 rounded-full bg-emerald-500" />
            Payment Method
          </h3>

          {/* Cash option - selected */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 border-2 border-emerald-300 shadow-sm shadow-emerald-100/50">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/25">
              <PiCurrencyNgnFill size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-900">Cash</p>
              <p className="text-xs text-emerald-600">Pay driver directly</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/30">
              <PiCheckBold size={13} className="text-white" />
            </div>
          </div>

          {/* Card option */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl mt-2 hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-all cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <PiCreditCardFill size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-900">Debit Card</p>
              <p className="text-xs text-zinc-500">**** 4532</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-zinc-300" />
          </div>

          {/* Add new */}
          <button className="w-full flex items-center gap-3 p-3.5 rounded-xl mt-2 text-emerald-600 hover:bg-emerald-50 transition-colors border border-dashed border-emerald-300">
            <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center">
              <PiPlusBold size={18} className="text-emerald-600" />
            </div>
            <span className="text-sm font-semibold">Add payment method</span>
          </button>
        </div>

        {/* Recent payments */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm">
          <h3 className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <div className="w-1 h-4 rounded-full bg-blue-500" />
            Recent Payments
          </h3>
          <div className="space-y-2">
            {[
              { desc: "Trip to Victoria Island", amount: "₦3,500", date: "Today, 10:30 AM", driver: "James Okafor" },
              { desc: "Trip to Ikeja", amount: "₦2,200", date: "Yesterday, 3:45 PM", driver: "Amina Bello" },
              { desc: "Trip to Lekki", amount: "₦4,100", date: "May 20, 9:00 AM", driver: "Fatima Yusuf" },
            ].map((payment, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50/50 hover:bg-zinc-50 transition-colors border border-zinc-100/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <PiCarFill size={16} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-900">{payment.desc}</p>
                  <p className="text-[11px] text-zinc-400">
                    {payment.driver} · {payment.date}
                  </p>
                </div>
                <p className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg">{payment.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo code */}
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 p-4 shadow-sm">
          <h3 className="text-xs text-purple-600 font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <div className="w-1 h-4 rounded-full bg-purple-500" />
            Promo Code
          </h3>
          <div className="flex gap-2">
            <input
              placeholder="Enter promo code"
              className="flex-1 h-12 bg-white border border-purple-200 rounded-xl px-4 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <button className="h-12 px-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl text-sm shadow-md shadow-purple-500/25 active:scale-95 transition-transform">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
