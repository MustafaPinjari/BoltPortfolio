import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import SmoothScrollProvider from '@/components/smooth-scroll-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mustafa Pinjari | Advanced Frontend Developer & UI/UX Designer',
  description: 'Experienced frontend developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with performance-first approach.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Expert',
    'UI/UX Designer',
    'JavaScript Developer',
    'TypeScript',
    'Web Development',
    'Portfolio'
  ],
  authors: [{ name: 'Mustafa Pinjari' }],
  creator: 'Mustafa Pinjari',
  publisher: 'Mustafa Pinjari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mustafapinjari.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mustafa Pinjari | Advanced Frontend Developer',
    description: 'Experienced frontend developer creating exceptional digital experiences with modern web technologies.',
    url: 'https://mustafapinjari.vercel.app',
    siteName: 'Mustafa Pinjari Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mustafa Pinjari - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Pinjari | Frontend Developer',
    description: 'Creating exceptional digital experiences with modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <main className="min-h-screen bg-background text-foreground">
              {children}
            </main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}