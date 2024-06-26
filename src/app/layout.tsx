import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'

import { Toaster } from '@/components/ui/sonner'
import TopNav from './_components/topnav'
import { ourFileRouter } from './api/uploadthing/core'

import '@/styles/globals.css'
import { CSPostHogProvider } from './_analytics/providers'

export const metadata = {
  manifest: '/manifest.json',
  title: 't3 gallery',
  description: 'Generated by create-t3-app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang='en'>
          <body>
            <NextSSRPlugin
              /**
               * The `extractRouterConfig` will extract **only** the route configs
               * from the router to prevent additional information from being
               * leaked to the client. The data passed to the client is the same
               * as if you were to fetch `/api/uploadthing` directly.
               */
              routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <div className='grid h-screen grid-rows-[auto,1fr] bg-cb-dark-blue text-cb-white'>
              <TopNav />
              <main className='overflow-y-auto'>{children}</main>
              {modal}
            </div>
            <div id='modal-root' />
            <Toaster
              toastOptions={{ className: 'bg-cb-dusty-blue text-cb-white' }}
            />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  )
}
