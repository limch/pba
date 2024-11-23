import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '임철호의 당구 클럽',
  description: '임철호와 친구들의 당구 기록 홈페이지',
  openGraph: {
    title: '임철호의 당구 클럽',
    description: '임철호와 친구들의 당구 기록 홈페이지',
    images: 'https://tennis-tracker-azure.vercel.app/pasaedan.jpg',
    url: 'https://tennis-tracker-azure.vercel.app',
    locale: 'ko_KR',
    type: 'website',
  },
  // 인스타그램용 메타 태그
  other: {
    'instagram:card': 'summary_large_image',
    'instagram:title': '임철호의 당구 클럽',
    'instagram:description': '임철호와 친구들의 당구 기록 홈페이지',
    'instagram:image': 'https://tennis-tracker-azure.vercel.app/pasaedan.jpg',
  }
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="ko">
      <body className={inter.className}>{children}</body>
      </html>
  )
}
