"use client";

import { useTransition } from "react";

import Image from "next/image";
import { toast } from "sonner";

// import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { refillHearts } from "@/actions/user-progress";
import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";
import { usePayModal } from "@/store/use-pay-modal";

type ItemsProps = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const Items = ({
    hearts,
    points,
    // hasActiveSubscription,
}: ItemsProps) => {
    const [pending, startTransition] = useTransition();
    const { open, setHeartOption } = usePayModal();

    const onRefillHearts = () => {
        if (pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL) return;

        startTransition(() => {
            refillHearts().catch(() => toast.error("Something went wrong."));
        });
    };

    // const onUpgrade = () => {
    //     toast.loading("Redirecting to checkout...");
    //     startTransition(() => {
    //         createStripeUrl()
    //             .then((response) => {
    //                 if (response.data) window.location.href = response.data;
    //             })
    //             .catch(() => toast.error("Something went wrong."));
    //     });
    // };

    const handleOpenModal = (heartOption: string) => {
        setHeartOption(heartOption);
        open();
    };

    return (
        <ul className="w-full">
            <div className="flex w-full items-center gap-x-4 border-t-2 p-4">
                <Image src="/heart.svg" alt="Heart" height={60} width={60} />

                <div className="flex-1">
                    <p className="text-base font-bold text-neutral-700 lg:text-xl">
                        Nạp tim
                    </p>
                </div>

                <Button
                    onClick={onRefillHearts}
                    disabled={
                        pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL
                    }
                    aria-disabled={
                        pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL
                    }
                >
                    {hearts === MAX_HEARTS ? (
                        "đầy"
                    ) : (
                        <div className="flex items-center">
                            <Image src="/points.svg" alt="Points" height={20} width={20} />

                            <p>{POINTS_TO_REFILL}</p>
                        </div>
                    )}
                </Button>
            </div>

            <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
                <Image src="/heart.svg" alt="Unlimited" height={60} width={60} />

                <div className="flex-1">
                    <p className="text-base font-bold text-neutral-700 lg:text-xl">
                        5 tim
                    </p>
                </div>

                <Button onClick={() => handleOpenModal("5")} disabled={pending} aria-disabled={pending}>
                    Nâng cấp
                </Button>
            </div>

            <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
                <Image src="/heart.svg" alt="Unlimited" height={60} width={60} />

                <div className="flex-1">
                    <p className="text-base font-bold text-neutral-700 lg:text-xl">
                        15 tim
                    </p>
                </div>

                <Button onClick={() => handleOpenModal("15")} disabled={pending} aria-disabled={pending}>
                    Nâng cấp
                </Button>
            </div>

            <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
                <Image src="/unlimited.svg" alt="Unlimited" height={60} width={60} />

                <div className="flex-1">
                    <p className="text-base font-bold text-neutral-700 lg:text-xl">
                        Tim không giới hạn
                    </p>
                </div>

                <Button onClick={() => handleOpenModal("Không giới hạn")} disabled={pending} aria-disabled={pending}>
                    Nâng cấp
                </Button>
            </div>

            {/* <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
                <Image src="/unlimited.svg" alt="Unlimited" height={60} width={60} />

                <div className="flex-1">
                    <p className="text-base font-bold text-neutral-700 lg:text-xl">
                        Tim không giới hạn
                    </p>
                </div>

                <Button onClick={onUpgrade} disabled={pending} aria-disabled={pending}>
                    {hasActiveSubscription ? "Cài đặt" : "Nâng cấp bằng thẻ"}
                </Button>
            </div> */}
        </ul>
    );
};