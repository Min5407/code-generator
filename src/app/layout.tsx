import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Sparkles } from 'lucide-react';
import { ConvexClientProvider } from '@/provider/convex';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ConvexClientProvider>
          <div className='h-screen flex flex-col pt-3 px-6'>
            <div>
              <h1 className='flex items-center gap-2 text-2xl font-bold'>
                <Sparkles />
                AI
              </h1>
            </div>
            <main className='flex-1 flex flex-col'>{children}</main>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
