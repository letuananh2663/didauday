import Link from "next/link";
import { NotebookText } from "lucide-react";

import { Button } from "@/components/ui/button";

type UnitBannerProps = {
    title: string;
    description: string;
};

export const UnitBanner = ({ title, description }: UnitBannerProps) => {
    return (
        <div className="flex w-full items-center justify-between rounded-xl bg-red-500 p-5 text-white">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>

            <Link href="/lesson">
                <Button
                    size="lg"
                    variant="default"
                    className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
                >
                    <NotebookText className="mr-2" />
                    Tiếp tục khám phá
                </Button>
            </Link>
        </div>
    );
};