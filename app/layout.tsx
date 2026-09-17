import "./globals.css";
import Header from "@/components/Layout/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Layout/Footer";
import CustomCursor from "@/components/Layout/CustomCursor";
import CommandPalette from "@/components/Layout/CommandPalette";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import FloatingCommandButton from "@/components/Layout/Header/FloatingCommandButton";
import FloatingAvailabilityCTA from "@/components/Layout/common/FloatingAvailabilityCTA";
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
              "jobTitle": "Frontend Software Engineer",
              "description": "Subhadeep Das is a Frontend Software Engineer with 2+ years of experience building production applications using React.js, Next.js and TypeScript, with experience in real-time systems, WebRTC, video streaming and enterprise applications.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressCountry": "India"
              },
              "knowsAbout": [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Redux Toolkit",
                "RTK Query",
                "Zustand",
                "React Query",
                "REST APIs",
                "Socket.IO",
                "WebRTC",
                "HLS",
                "Node.js",
                "GSAP"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/subhadeep-das-frontend-dev",
                "https://github.com/Subhadeep-CS"
              ],
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
                  <FloatingAvailabilityCTA />
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
