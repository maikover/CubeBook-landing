import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Cube Book',
  description: 'AI-powered reading companion',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
