import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div
            className={cn(
                "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
                className
            )}
        >
            <Link href="/">
                <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8 justify-center">
                    <Image src="/icon.svg" alt="Đi đâu đây" height={100} width={100} />
                </div>
            </Link>

            <div className="flex flex-1 flex-col gap-y-2">
                <SidebarItem label="Giải đố" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem
                    label="Bảng xếp hạng"
                    href="/leaderboard"
                    iconSrc="/leaderboard.svg"
                />
                <SidebarItem label="Tiến độ" href="/quests" iconSrc="/quest.svg" />
                <SidebarItem label="Cửa hàng" href="/shop" iconSrc="/shop.svg" />
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                </ClerkLoading>

                <ClerkLoaded>
                    <UserButton
                        appearance={{
                            elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
                        }}
                    />
                </ClerkLoaded>
            </div>
        </div>
    );
};