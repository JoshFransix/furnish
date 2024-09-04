import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Furnish",
  description: "Your last stop for all your furniture needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
