import { PropsWithChildren } from 'react'
import ReactQueryProviders from '@/components/react-query-providers'
import type { Metadata } from 'next'
import { pretendard } from '../../public/fonts/Pretendard'

import '@/styles/normalize.css'
import '@/styles/variable.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'StrawBoard',
  description: 'StrawBoard 프로젝트'
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    // className에 따라 테마 설정
    <html lang="ko" className="light">
      <body className={pretendard.className}>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  )
}
