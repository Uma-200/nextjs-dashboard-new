/*import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <CustomersTable customers={customers} />
          </div>
        </div>
      </div>
    </div>
  );
}*/

export default function Page() {
  return <p>customers page</p>;
}