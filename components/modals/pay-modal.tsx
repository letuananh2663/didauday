"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { usePayModal } from "@/store/use-pay-modal";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export const PayModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close, heartOption } = usePayModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) return null;

    const getImageSrc = () => {
        switch (heartOption) {
            case "5":
                return "/qr5.svg";
            case "15":
                return "/qr15.svg";
            case "Không giới hạn":
                return "/qrun.svg";
            default:
                return "/mascot.svg";
        }
    };

    const getPrice = () => {
        switch (heartOption) {
            case "5":
                return "5,000";
            case "15":
                return "10,000";
            case "Không giới hạn":
                return "80,000";
            default:
                return "/mascot.svg";
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="mb-5 flex w-full items-center justify-center">
                        <Image
                            src="/mascot.svg"
                            alt="Mascot"
                            height={80}
                            width={80}
                        />
                    </div>

                    <DialogTitle className="text-center text-2xl font-bold">
                        Chờ một chúttt!
                    </DialogTitle>

                    <DialogDescription className="text-center text-base">
                        Hãy kiểm tra thật kỹ thông tin của mình trước khi thực hiện thanh toán nhé!!!
                    </DialogDescription>

                    <DialogDescription className="text-center text-base flex justify-between">
                        <div>
                            <Image src={getImageSrc()} alt="QR Code" height={200} width={200} />
                            <h1 className="font-bold">Gói {heartOption} tim</h1>
                        </div>
                        <div className="text-left">
                            <h1>Ngân hàng:</h1>
                            <h1 className="font-bold">Ngân hàng Quân đội</h1>
                            <h1>Chủ tài khoản</h1>
                            <h1 className="font-bold">PHAN NGOC MINH TU</h1>
                            <h1>Số tài khoản:</h1>
                            <h1 className="font-bold">0846202279</h1>
                            <h1>Số tiền:</h1>
                            <h1 className="font-bold">{getPrice()} vnđ</h1>
                            <h1>Nội dung:</h1>
                            <h1 className="font-bold">GOI {heartOption} TIM DI DAU DAY?!</h1>
                        </div>
                    </DialogDescription>

                    <DialogDescription className="text-center text-base">
                        Gói nâng cấp của bạn sẽ được sớm cập nhật sau khi hoàn tất thanh toán
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mb-4">
                    <div className="flex w-full flex-col gap-y-4">
                        <Button
                            variant="danger"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            Đóng
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};