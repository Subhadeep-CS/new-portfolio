import "./globals.css";
import Header from "@/components/Layout/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Layout/Footer";
import CustomCursor from "@/components/Layout/CustomCursor";
import CommandPalette from "@/components/Layout/CommandPalette";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import FloatingCommandButton from "@/components/Layout/Header/FloatingCommandButton";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { poppins } from "@/utils/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/logo/SD.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Subhadeep Das",
              "url": "https://subhadeepdas.com",
              "sameAs": [
                "https://www.linkedin.com/in/subhadeep-das-frontend-dev",
                "https://github.com/Subhadeep-CS",
                "https://www.facebook.com/profile.php?id=100043405891398"
              ],
              "jobTitle": "Frontend Developer",
              "description": "Software Engineer specialized in building high-performance, pixel-perfect React and Next.js applications.",
              "image": "https://subhadeepdas.com/img/logo/SD.svg"
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased text-zinc-900 dark:text-zinc-50`}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          // enableSystem
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Header />
            <main className="min-h-screen flex flex-col">
              <TooltipProvider>{children}</TooltipProvider>
            </main>
            <Footer />
            <CustomCursor />
            <CommandPalette />
            <ScrollToTop />
            <FloatingCommandButton />
            <SpeedInsights />
            <Analytics />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
