import {
    ClerkLoaded,
    ClerkLoading,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header = () => {

    return (
        <header className="h-20 w-full ">
            <div className="flex h-full items-center justify-between  bg-red-400">
                <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
                    <Image src="/logo.svg" alt="Di Dau Day" height={160} width={160} />
                </Link>

                <div className="flex gap-x-3 pr-4">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                        <SignedOut>
                            <SignInButton
                                mode="modal"
                                fallbackRedirectUrl="/learn"
                                signUpFallbackRedirectUrl="/learn"
                            >
                                <Button size="lg" variant="ghost">
                                    Đăng nhập
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </div>
        </header >
    );
};