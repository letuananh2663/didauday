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
import { useDifficultModal } from "@/store/use-difficult-modal";

export const DifficultModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useDifficultModal();

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
                        Câu hỏi khó!
                    </DialogTitle>

                    <DialogDescription className="text-center text-base">
                        Hãy cẩn thận vì đây là câu hỏi khó! Nếu bạn trả lời sai thì sẽ mất 2 tim. Nhưng mà chúng mình tin bạn sẽ làm được!   
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