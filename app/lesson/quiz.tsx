"use client"

import { toast } from "sonner";
import Image from "next/image";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useAudio, useMount, useWindowSize } from "react-use";

import { MAX_HEARTS } from "@/constants";
import { reduceHearts } from "@/actions/user-progress";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";
import { useDifficultModal } from "@/store/use-difficult-modal";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { challengeOptions, challenges, userSubscription } from "@/db/schema";

import { Header } from "./header";
import { Footer } from "./footer";
import { Challenge } from "./challenge";
import { ResultCard } from "./result-card";
import { QuestionBubble } from "./question-bubble";

type Props = {
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription:
    typeof userSubscription.$inferSelect & {
        isActive: boolean;
    } | null;
};

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription,
}: Props) => {
    const router = useRouter();
    const [finishAudio] = useAudio({
        src: "/finish.mp3",
        autoPlay: true,
    });

    const { width, height } = useWindowSize();

    const [pending, startTransition] = useTransition();
    const { open: openHeartsModal } = useHeartsModal();
    const { open: openPracticeModal } = usePracticeModal();
    const { open: openDifficultModal } = useDifficultModal();

    useMount(() => {
        if (initialPercentage === 100) openPracticeModal();
    });

    const [lessonId] = useState(initialLessonId);
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(() => {
        return initialPercentage === 100 ? 0 : initialPercentage;
    });
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    });
    const [difficultModalShown, setDifficultModalShown] = useState(false);

    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"none" | "wrong" | "correct">("none");

    const challenge = challenges[activeIndex];
    const options = challenge?.challengeOptions ?? [];

    useEffect(() => {
        if (!challenge?.difficult) {
            setDifficultModalShown(false);
        }
    });

    useEffect(() => {
        if (initialPercentage !== 100 && challenge?.difficult && !difficultModalShown) {
            openDifficultModal();
            setDifficultModalShown(true);
        }
    }, [challenge, difficultModalShown, initialPercentage, openDifficultModal]);

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
                            openHeartsModal();
                            console.error("Missing hearts")
                            return;
                        }

                        setStatus("correct");
                        setPercentage((prev) => prev + 100 / challenges.length);

                        // This is a practice
                        if (initialPercentage === 100) {
                            setHearts((prev) => Math.min(prev + 1, MAX_HEARTS));
                        }
                    })
                    .catch(() => toast.error("Something went wrong. Please try again."));
            });
        } else {
            startTransition(() => {
                const heartPenalty = challenge.difficult ? 2 : 1;
                reduceHearts(challenge.id)
                    .then((response) => {
                        if (response?.error === "hearts") {
                            openHeartsModal();
                            console.error("Missing hearts")
                            return;
                        }

                        setStatus("wrong");

                        if (!response?.error) setHearts((prev) => Math.max(prev - heartPenalty, 0));
                    })
                    .catch(() => toast.error("Something went wrong. Please try again."));
            });
        }
    }

    if (!challenge) {
        return (
            <>
                {finishAudio}
                <Confetti
                    recycle={false}
                    numberOfPieces={500}
                    tweenDuration={10_000}
                    width={width}
                    height={height}
                />
                <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
                    <Image
                        src="/finish.svg"
                        alt="Finish"
                        className="hidden lg:block"
                        height={100}
                        width={100}
                    />

                    <Image
                        src="/finish.svg"
                        alt="Finish"
                        className="block lg:hidden"
                        height={100}
                        width={100}
                    />

                    <h1 className="text-lg font-bold text-neutral-700 lg:text-3xl">
                        Giỏi quá! <br /> Bạn đã hoàn thành chặng hành trình này.
                    </h1>

                    <div className="flex w-full items-center gap-x-4">
                        <ResultCard variant="points" value={challenges.length * 10} />
                        <ResultCard
                            variant="hearts"
                            value={userSubscription?.isActive ? Infinity : hearts}
                        />
                    </div>
                </div>

                <Footer
                    lessonId={lessonId}
                    status="completed"
                    onCheck={() => router.push("/learn")}
                />
            </>
        );
    }

    const title = challenge.type === "ASSIST" ? "Chọn câu trả lời đúng" : challenge.question;

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