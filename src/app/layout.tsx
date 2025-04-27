import { PropsWithChildren } from 'react'
import ReactQueryProviders from '@/components/react-query-providers'
import type { Metadata } from 'next'
import { pretendard } from '../../public/fonts/Pretendard'

import '@/styles/normalize.css'
import '@/styles/variable.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'TODO 앱',
  description: 'TODO 앱'
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  )
}
