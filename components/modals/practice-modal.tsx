"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="mb-5 flex w-full items-center justify-center">
                        <Image src="/heart.svg" alt="Heart" height={100} width={100} />
                    </div>

                    <DialogTitle className="text-center text-2xl font-bold">
                        Ôn tập lại
                    </DialogTitle>

                    {/* TODO */}
                    {/* <DialogDescription className="text-center text-base">
                        Hãy ôn tập thật kĩ! Bạn vẫn sẽ bị mất 1 tim nếu như trả lời sai.
                    </DialogDescription> */}

                    <DialogDescription className="text-center text-base">
                        Cùng ôn tập lại các kiến thức cho vững hơn nhé.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mb-4">
                    <div className="flex w-full flex-col gap-y-4">
                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            Tôi đã hiểu
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};