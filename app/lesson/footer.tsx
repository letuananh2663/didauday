import { useKey, useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type FooterProps = {
    onCheck: () => void;
    status: "correct" | "wrong" | "none" | "completed";
    disabled?: boolean;
    lessonId?: number;
};

export const Footer = ({
    onCheck,
    status,
    disabled,
    lessonId,
}: FooterProps) => {
    useKey("Enter", onCheck, {}, [onCheck]);
    const isMobile = useMedia("(max-width: 1024px)");

    return (
        <footer
            className={cn(
                "h-[100px] border-t-2 lg:h-[140px]",
                status === "correct" && "border-transparent bg-sky-100",
                status === "wrong" && "border-transparent bg-rose-100"
            )}
        >
            <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
                {status === "correct" && (
                    <div className="flex items-center text-base font-bold text-sky-500 lg:text-2xl">
                        <Image
                            src="/mascot_fun.svg"
                            alt="Correct"
                            height={80}
                            width={80}
                        />
                        Quá đã!
                    </div>
                )}

                {status === "wrong" && (
                    <div className="flex items-center text-base font-bold text-rose-500 lg:text-2xl">
                        <Image
                            src="/mascot_sad.svg"
                            alt="Incorrect"
                            height={80}
                            width={80}
                        />
                        Cố thử lại.
                    </div>
                )}

                {status === "completed" && (
                    <Button
                        variant="default"
                        size={isMobile ? "sm" : "lg"}
                        onClick={() => (window.location.href = `/lesson/${lessonId}`)}
                    >
                        Làm lại lần nữa
                    </Button>
                )}

                <Button
                    disabled={disabled}
                    aria-disabled={disabled}
                    className="ml-auto"
                    onClick={onCheck}
                    size={isMobile ? "sm" : "lg"}
                    variant={status === "wrong" ? "danger" : "secondary"}
                >
                    {status === "none" && "Kiểm tra"}
                    {status === "correct" && "Câu tiếp theo"}
                    {status === "wrong" && "Thử lại"}
                    {status === "completed" && "Đi tiếp"}
                </Button>
            </div>
        </footer>
    );
};