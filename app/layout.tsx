import ThemeProvider from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sahil Suman Portfolio",
  description: "Full Stack Developer building web applications and open source projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="flex min-h-screen flex-col bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

