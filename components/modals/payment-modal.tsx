'use client';

import { useTransition } from 'react';

import { Button } from '../ui/button';
import { usePaymentModal } from '@/store/use-payment-modal';
import Image from 'next/image';

const PaymentModal = () => {
    const { isOpen, hearts, price, close } = usePaymentModal();
    const [pending, startTransition] = useTransition();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-2/3">
                <h2 className="text-xl font-bold text-center">Transaction Details</h2>
                <div className='flex justify-between'>
                    <Image src={hearts === 1 ? "/qr2.svg" : "/qr3.svg"} alt="Heart" height={240} width={240} />
                    <div>
                        <p className="mt-4">You are purchasing {hearts} hearts.</p>
                        <p className="mt-2 text-lg">Price: {price?.toLocaleString()} vnđ</p>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <Button onClick={close} variant="danger">
                        Cancel
                    </Button>
                    <Button onClick={() => { }} disabled={pending}>
                        Proceed to Payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
