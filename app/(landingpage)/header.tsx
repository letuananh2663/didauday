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
        <header className="h-16 w-full lg:mb-8">
            <div className="flex h-full items-center justify-between shadow-xl shadow-red-200">
                <Link href="/" className="flex h-full items-center gap-x-3 px-12 bg-red-500">
                    <Image src="/logo.svg" alt="Di Dau Day" height={160} width={160} />
                </Link>

                <div className="flex gap-x-3 pr-4">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <Button className="text-rose-500" variant="ghost" size="lg">
                            <a href="/storyline">Storyline</a>
                        </Button>

                        <div className="flex self-center">
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                        <SignedOut>
                            <SignInButton
                                mode="modal"
                                fallbackRedirectUrl="/learn"
                                signUpFallbackRedirectUrl="/learn"
                            >
                                <Button className="text-rose-500" size="lg" variant="ghost">
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