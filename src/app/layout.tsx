'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import StyledComponentsRegistry from "../lib/registry"
import { ThemeProvider } from 'styled-components'
import { THEME } from '@/theme'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<StyledComponentsRegistry>
				<ThemeProvider theme={THEME}>
      		<body className={raleway.className}>{children}</body>
				</ThemeProvider>
			</StyledComponentsRegistry>
    </html>
  )
}
