import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets:['latin'], weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light-cyan-background`}>{children}</body>
    </html>
  )
}