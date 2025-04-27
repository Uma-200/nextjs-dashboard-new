"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UserGroupIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <HomeIcon className="w-5 h-5" /> },
    { href: "/dashboard/customers", label: "Customers", icon: <UserGroupIcon className="w-5 h-5" /> },
    { href: "/dashboard/invoices", label: "Invoices", icon: <ReceiptPercentIcon className="w-5 h-5" /> },
  ];

  return (
    <nav className="space-y-2">
      {links.map(({ href, label, icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center gap-3 p-3 rounded-md ${
            pathname === href ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {icon}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
