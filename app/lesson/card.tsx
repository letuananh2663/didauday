import { useCallback } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useKey } from "react-use";

import { challenges } from "@/db/schema";

type CardProps = {
    id: number;
    text: string;
    imageSrc: string | null;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    status?: "correct" | "wrong" | "none";
    disabled?: boolean;
    type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
    text,
    imageSrc,
    shortcut,
    selected,
    onClick,
    status,
    disabled,
    type,
}: CardProps) => {

    const handleClick = useCallback(() => {
        if (disabled) return;
        onClick();
    }, [disabled, onClick]);

    useKey(shortcut, handleClick, {}, [handleClick]);

    return (
        <div
            onClick={handleClick}
            className={cn(
                "h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6",
                selected && "border-yellow-300 bg-yellow-100 hover:bg-yellow-100",
                selected &&
                status === "correct" &&
                "border-sky-300 bg-sky-100 hover:bg-sky-100",
                selected &&
                status === "wrong" &&
                "border-rose-300 bg-rose-100 hover:bg-rose-100",
                disabled && "pointer-events-none hover:bg-white",
                type === "ASSIST" && "w-full lg:p-3"
            )}
        >
            {imageSrc && (
                <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]">
                    <Image src={imageSrc} fill alt={text} />
                </div>
            )}

            <div
                className={cn(
                    "flex items-center justify-between",
                    type === "ASSIST" && "flex-row-reverse"
                )}
            >
                {type === "ASSIST" && <div aria-hidden />}
                <p
                    className={cn(
                        "text-sm text-neutral-600 lg:text-base",
                        selected && "text-rose-500",
                        selected && status === "correct" && "text-sky-500",
                        selected && status === "wrong" && "text-rose-500"
                    )}
                >
                    {text}
                </p>

                <div
                    className={cn(
                        "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
                        selected && "border-yellow-300 text-rose-500",
                        selected &&
                        status === "correct" &&
                        "border-sky-500 text-sky-500",
                        selected && status === "wrong" && "border-rose-500 text-rose-500"
                    )}
                >
                    {shortcut}
                </div>
            </div>
        </div>
    );
};