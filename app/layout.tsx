import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Mailchimp Newsletter',
  description: 'Mailchimp API integration with Next.js 14 and server actions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // https://www.npmjs.com/package/geist?activeTab=readme
    <html lang="en" className={GeistSans.className}>
      <body>
        <main className="flex flex-col min-h-screen items-center justify-center p-8 text-primary-text">
          {children}
        </main>
      </body>
    </html>
  );
}
