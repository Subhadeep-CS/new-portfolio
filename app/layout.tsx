import "./globals.css";
import Header from "@/components/Layout/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Layout/Footer";
import CustomCursor from "@/components/Layout/CustomCursor";
import CommandPalette from "@/components/Layout/CommandPalette";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { poppins } from "@/utils/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen flex flex-col">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
          <Footer />
          <CustomCursor />
          <CommandPalette />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
