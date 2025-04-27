import { CustomerField } from './definitions';

export async function fetchCustomers(): Promise<CustomerField[]> {
  // This is a mock data function. In a real application, you would fetch from an API or database
  return [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, Country',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      address: '456 Oak St, Town, Country',
    },
  ];
} 