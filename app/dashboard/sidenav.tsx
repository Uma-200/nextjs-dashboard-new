import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import AcmeLogo from '@/app/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo Section */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-2">
        <NavLinks />
      </div>

      {/* Spacer to push sign-out button to the bottom */}
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

      {/* Sign Out Button */}
      <form>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
