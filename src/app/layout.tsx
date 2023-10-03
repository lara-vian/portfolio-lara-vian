import './globals.css'
import { Raleway } from 'next/font/google'
import StyledComponentsRegistry from "../lib/registry"

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<StyledComponentsRegistry>
      	<body className={raleway.className}>{children}</body>
			</StyledComponentsRegistry>
    </html>
  )
}
