import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HabLab Tech Studio — Digital systems for real-world problems',
  description: 'HabLab designs and builds websites, automation, bots, data tools and custom software for practical business problems.',
  generator: 'HabLab Tech Studio',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f1f0eb',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
