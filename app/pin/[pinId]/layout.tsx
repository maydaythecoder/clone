import { Inter } from 'next/font/google';
import Provider from '../../Provider';
import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Pin Details',
  description: 'View and manage pin details',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-black">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
