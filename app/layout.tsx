import "./globals.css";
import Header from "@/components/Layout/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Layout/Footer";
import CustomCursor from "@/components/Layout/CustomCursor";
import CommandPalette from "@/components/Layout/CommandPalette";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import FloatingCommandButton from "@/components/Layout/Header/FloatingCommandButton";
import Scrollspy from "@/components/Layout/Scrollspy";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { poppins } from "@/utils/font";
import PixelNameReveal from "@/components/Layout/Footer/PixelNameReveal";
import { InspectModeProvider } from "@/components/InspectMode/InspectContext";
import InspectToggle from "@/components/InspectMode/InspectToggle";
import InspectOverlay from "@/components/InspectMode/InspectOverlay";
import { Metadata } from "next";
import { AudioProvider } from "@/components/Audio/AudioContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://subhadeepdas.com"),
};

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
          defaultTheme="system"
          themes={["light", "dark", "custom", "system"]}
          enableSystem={true}
          disableTransitionOnChange
        >
          <AudioProvider>
            <InspectModeProvider>
              <SmoothScroll>
                <TooltipProvider>
                  <Header />
                  <main className="min-h-screen flex flex-col">
                    {children}
                  </main>
                  <Footer />
                  <PixelNameReveal />
                  <CustomCursor />
                  <CommandPalette />
                  <ScrollToTop />
                  <FloatingCommandButton />
                  <Scrollspy />
                  <SpeedInsights />
                  <Analytics />
                  <InspectOverlay />
                  <InspectToggle />
                </TooltipProvider>
              </SmoothScroll>
            </InspectModeProvider>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
