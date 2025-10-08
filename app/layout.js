import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "./ConvexClientProvide";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Content Platform",
  description: "Content Creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              baseTheme: dark,
            }}
          >
            <ConvexClientProvider>
              {/* header */}
              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                {children}
              </main>
              {/* Footer */}
              <footer className="relative z-10 border-t py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="text-muted-foreground">
                    Made with ❤️ by Rishnu Dk
                  </p>
                </div>
              </footer>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
