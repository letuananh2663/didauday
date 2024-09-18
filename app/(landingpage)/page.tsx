import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="w-full">
      <div className="mx-auto bg-blue-500 w-full p-32 flex justify-around flex-1 flex-col lg:flex-row">
        <div className="relative mb-8 h-[480px] w-[480px] lg:mb-0 lg:h-[424px] lg:w-[424px] self-center">
          <Image src="/icon.svg" alt="Di Dau Day" fill />
        </div>

        <div className="flex flex-col items-center gap-y-8 justify-center">
          <h1 className="max-w-[424px] text-center text-xl font-bold text-neutral-600 lg:text-2xl">
            Vietnamese Monopoly Culture Game
          </h1>

          <h4 className="max-w-[424px] text-center text-xl text-neutral-600 lg:text-sm">Bạn mang một niềm đam mê cháy bỏng dành cho văn hóa Việt Nam? Bạn muốn tìm hiểu di sản một cách thú vị và sáng tạo? Vậy thì “ĐI ĐÂU ĐÂY ?!” chính là dành cho bạn!</h4>

          <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  fallbackRedirectUrl="/learn"
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Bắt đầu
                  </Button>
                </SignUpButton>

                <SignInButton
                  mode="modal"
                  fallbackRedirectUrl="/learn"
                  signUpFallbackRedirectUrl="/learn"
                >
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    Đăng nhập
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">Tiếp tục học</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}