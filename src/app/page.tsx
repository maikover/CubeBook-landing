import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function RootPage() {
  // Default redirect to English; middleware will handle language detection
  redirect('/en');
}
