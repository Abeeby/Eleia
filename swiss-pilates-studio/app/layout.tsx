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
  metadataBase: new URL('https://swiss-pilates.ch'),
  title: {
    default: 'Swiss Pilates Studio - Premium Pilates in Switzerland',
    template: '%s | Swiss Pilates Studio'
  },
  description: 'Le studio de Pilates le plus exclusif de Suisse. Reformer, Mat, Aerial Pilates. Studios à Genève, Zurich, Lausanne.',
  keywords: ['pilates', 'reformer', 'studio', 'suisse', 'genève', 'zurich', 'lausanne', 'yoga', 'fitness'],
  authors: [{ name: 'Swiss Pilates Studio' }],
  creator: 'Swiss Pilates Studio',
  publisher: 'Swiss Pilates Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Swiss Pilates Studio - Premium Pilates in Switzerland',
    description: 'Le studio de Pilates le plus exclusif de Suisse',
    url: 'https://swiss-pilates.ch',
    siteName: 'Swiss Pilates Studio',
    images: [
      {
        url: 'https://swiss-pilates.ch/og.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiss Pilates Studio',
    description: 'Le studio de Pilates le plus exclusif de Suisse',
    images: ['https://swiss-pilates.ch/twitter-image.jpg'],
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