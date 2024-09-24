"use client"

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { reduceHearts } from "@/actions/user-progress";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { challengeOptions, challenges, challengesEnum } from "@/db/schema";

import { Header } from "./header";
import { Footer } from "./footer";
import { Challenge } from "./challenge";
import { QuestionBubble } from "./question-bubble";
import { MAX_HEARTS } from "@/constants";

type Props = {
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription: any;
};

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription,
}: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const [lessonId] = useState(initialLessonId);
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    });

    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"none" | "wrong" | "correct">("none");

    const challenge = challenges[activeIndex];
    const options = challenge?.challengeOptions ?? [];

    const onNext = () => {
        setActiveIndex((current) => current + 1);
    };

    const onSelect = (id: number) => {
        if (status !== "none") return;

        setSelectedOption(id);
    };

    const onContinue = () => {
        if (!selectedOption) return;

        if (status === "wrong") {
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        if (status === "correct") {
            onNext();
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        const correctOption = options.find((option) => option.correct);

        if (!correctOption) {
            return;
        }

        if (correctOption && correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(challenge.id)
                    .then((response) => {
                        if (response?.error === "hearts") {
                            // openHeartsModal();
                            console.error("Missing hearts")
                            return;
                        }

                        // void correctControls.play();
                        setStatus("correct");
                        setPercentage((prev) => prev + 100 / challenges.length);

                        // This is a practice
                        if (initialPercentage === 100) {
                            setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
                        }
                    })
                    .catch(() => toast.error("Something went wrong. Please try again."));
            });
        }
        else {
            startTransition(() => {
                reduceHearts(challenge.id)
                    .then((response) => {
                        if (response?.error === "hearts") {
                            // openHeartsModal();
                            console.error("Missing hearts")
                            return;
                        }

                        // void incorrectControls.play();
                        setStatus("wrong");

                        if (!response?.error) setHearts((prev) => Math.max(prev - 1, 0));
                    })
                    .catch(() => toast.error("Something went wrong. Please try again."));
            });
        }
    }

    const title = challenge.type === "ASSIST" ? "Select the correct answer" : challenge.question;

    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />

            <div className="flex-1">
                <div className="flex h-full items-center justify-center">
                    <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[1024px] lg:px-0">
                        <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl">
                            {title}
                        </h1>

                        <div>
                            {challenge.type === "ASSIST" && (
                                <QuestionBubble question={challenge.question} />
                            )}

                            <Challenge
                                options={options}
                                onSelect={onSelect}
                                status={status}
                                selectedOption={selectedOption}
                                disabled={pending}
                                type={challenge.type}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            />
        </>
    )
}