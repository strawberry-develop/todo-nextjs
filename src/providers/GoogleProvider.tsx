'use client'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

const GoogleProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default GoogleProvider
