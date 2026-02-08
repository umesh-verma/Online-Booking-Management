"use client";

import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/config/site";

/**
 * CurrencyDropdown - Simplified for INR-only
 * Since we only support INR, we display the currency badge without a dropdown
 */
export default function CurrencyDropdown() {
  return (
    <div className="CurrencyDropdown flex items-center px-3 py-1.5 text-sm text-gray-700 dark:text-neutral-300 font-medium">
      <CurrencyRupeeIcon className="w-5 h-5 opacity-80" />
      <span className="ml-2 select-none">{siteConfig.currency.code}</span>
    </div>
  );
}
