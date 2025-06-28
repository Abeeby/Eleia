import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eleia.vercel.app'),
  title: {
    default: 'Eleia - Natural Beauty & Wellness',
    template: '%s | Eleia'
  },
  description: 'Découvrez Eleia, votre destination beauté naturelle. Cosmétiques bio, soins du visage et bien-être holistique.',
  keywords: ['eleia', 'cosmétiques', 'beauté', 'naturel', 'bio', 'soins', 'wellness', 'suisse'],
  authors: [{ name: 'Eleia' }],
  creator: 'Eleia',
  publisher: 'Eleia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Eleia - Natural Beauty & Wellness',
    description: 'Découvrez Eleia, votre destination beauté naturelle',
    url: 'https://eleia.vercel.app',
    siteName: 'Eleia',
    images: [
      {
        url: 'https://eleia.vercel.app/og.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eleia',
    description: 'Découvrez Eleia, votre destination beauté naturelle',
    images: ['https://eleia.vercel.app/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-CH': '/fr',
      'de-CH': '/de',
      'it-CH': '/it',
      'en-CH': '/en',
    },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}