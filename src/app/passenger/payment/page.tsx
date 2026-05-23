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
        <div className="bg-white rounded-2xl border border-zinc-100 p-4">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-3">
            Payment Method
          </h3>

          {/* Cash option - selected */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <PiCurrencyNgnFill size={20} className="text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-zinc-900">Cash</p>
              <p className="text-xs text-zinc-500">Pay driver directly</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
              <PiCheckBold size={12} className="text-white" />
            </div>
          </div>

          {/* Card option */}
          <div className="flex items-center gap-3 p-3 rounded-xl mt-2 hover:bg-zinc-50">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
              <PiCreditCardFill size={20} className="text-zinc-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-900">Debit Card</p>
              <p className="text-xs text-zinc-500">**** 4532</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-zinc-300" />
          </div>

          {/* Add new */}
          <button className="w-full flex items-center gap-3 p-3 rounded-xl mt-2 text-emerald-600 hover:bg-emerald-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <PiPlusBold size={18} className="text-emerald-600" />
            </div>
            <span className="text-sm font-medium">Add payment method</span>
          </button>
        </div>

        {/* Recent payments */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-4">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-3">
            Recent Payments
          </h3>
          <div className="divide-y divide-zinc-100">
            {[
              { desc: "Trip to Victoria Island", amount: "₦3,500", date: "Today, 10:30 AM", driver: "James Okafor" },
              { desc: "Trip to Ikeja", amount: "₦2,200", date: "Yesterday, 3:45 PM", driver: "Amina Bello" },
              { desc: "Trip to Lekki", amount: "₦4,100", date: "May 20, 9:00 AM", driver: "Fatima Yusuf" },
            ].map((payment, i) => (
              <div key={i} className="flex items-center gap-3 py-3">
                <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center">
                  <PiCarFill size={16} className="text-zinc-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-900">{payment.desc}</p>
                  <p className="text-[11px] text-zinc-400">
                    {payment.driver} · {payment.date}
                  </p>
                </div>
                <p className="text-sm font-semibold text-zinc-900">{payment.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo code */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-4">
          <h3 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-3">
            Promo Code
          </h3>
          <div className="flex gap-2">
            <input
              placeholder="Enter promo code"
              className="flex-1 h-12 bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm outline-none focus:border-emerald-500"
            />
            <button className="h-12 px-5 bg-zinc-900 text-white font-medium rounded-xl text-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
