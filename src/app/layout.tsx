import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import styles from './styles/layout.module.scss';
import './global.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <body className={inter.className}>
          <div className={styles.container}>
            {/* <DefaultHeader /> */}
          <main className={styles.main}>
              {/* <Suspense fallback={<LayoutLoading />}>{children}</Suspense> */}
              {children}
            </main>
            {/* <DefaultFooter /> */}
          </div>
        </body>
    </html>
  )
}
