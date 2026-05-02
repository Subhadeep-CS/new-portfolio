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
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
