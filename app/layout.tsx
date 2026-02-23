import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eventique - Premium Event Planning & Design',
  description: 'Your premier destination for seamless event coordination and stunning design',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
