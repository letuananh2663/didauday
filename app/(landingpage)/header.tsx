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

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type SidebarProps = {
    className?: string;
};

export const Header = ({ className }: SidebarProps) => {

    return (
        <header
            className={cn(
                "h-16 w-full lg:mb-8",
                className
            )}>
            <div className="flex h-full items-center justify-between shadow-xl shadow-red-200">
                <Link href="/" className="flex h-full items-center gap-x-3 lg:px-12 bg-red-500">
                    <Image src="/logo.svg" alt="Di Dau Day" height={160} width={160} />
                </Link>

                <div className="flex gap-x-3 pr-4">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <Button className="text-rose-500 w-4" variant="ghost" size="lg">
                            <a className="text-[.5rem]" href="/storyline">Cốt truyện</a>
                        </Button>

                        <Button className="text-rose-500 w-4" variant="ghost" size="lg">
                            <a className="text-[.5rem]" href="/playrule">Luật chơi</a>
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