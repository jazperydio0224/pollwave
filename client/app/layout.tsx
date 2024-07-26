// Clerk Auth
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";

// fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";

// Shadcn UI components
import { Toaster } from "@/components/ui/toaster";

// Theme Provider
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Pollwave",
  description: "Survey Form Builder",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Pollwave",
    description: "Survey Form Builder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollwave",
    description: "Survey Form Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(GeistMono.variable, GeistSans.variable)}
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
