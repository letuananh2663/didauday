import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import { DifficultModal } from "@/components/modals/difficult-modal";
import "./globals.css";
import PaymentModal from "@/components/modals/payment-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Di Dau Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/">
      <html lang="vi">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          <DifficultModal />
          <PaymentModal/>
          {children}
        </body>
      </html>
    </ClerkProvider >
  );
}
