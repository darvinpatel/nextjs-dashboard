import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { fetchCardData } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Overview',
};

export default async function Page() {
  const cardData = await fetchCardData();

  return (
    <div>
      <h1 className={lusitana.className}>Dashboard Overview</h1>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper data={cardData} />
      </Suspense>
      <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart />
      </Suspense>
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
      </Suspense>
    </div>
  );
}