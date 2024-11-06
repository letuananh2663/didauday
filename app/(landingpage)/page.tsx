import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="w-full">
      <div className="h-[221px] mx-auto lg:mt-[-40px] bg-[url('/background.svg')] bg-contain lg:bg-repeat-round bg-no-repeat lg:bg-cover lg:h-[866px] w-full lg:p-32 flex justify-end flex-1 flex-col lg:flex-row mt-[-2px]">
        <div className="flex flex-col lg:items-center items-end gap-y-8 justify-center">
          <div className="flex w-1/4 lg:h-auto h-20 mb-10 mr-14 lg:w-80 flex-col items-center gap-y-3 lg:mr-32">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  fallbackRedirectUrl="/learn"
                >
                  <Button size="lg" variant="primary" className="w-full lg:text-base text-xs">
                    Bắt đầu
                  </Button>
                </SignUpButton>

                <SignInButton
                  mode="modal"
                  fallbackRedirectUrl="/learn"
                  signUpFallbackRedirectUrl="/learn"
                >
                  <Button size="lg" variant="danger" className="w-full lg:text-base text-xs">
                    Đăng nhập
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Button size="lg" variant="danger" className="w-full text-xs" asChild>
                  <Link href="/learn">Chơi ngay</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full p-12 flex justify-center  shadow-xl shadow-red-200 mb-20">
        <h4 className="max-w-[800px] text-center text-sm text-rose-500 lg:text-xl">Bạn mang một niềm đam mê cháy bỏng dành cho văn hóa Việt Nam? Bạn muốn tìm hiểu di sản một cách thú vị và sáng tạo? <br />Vậy thì <b>“ĐI ĐÂU ĐÂY ?!”</b> chính là dành cho bạn!</h4>
      </div>
    </div >
  );
}