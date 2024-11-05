import { create } from "zustand";

type PaymentModalState = {
  isOpen: boolean;
  hearts: number | null;
  price: number | null;
  open: (hearts: number) => void;
  close: () => void;
};

export const usePaymentModal = create<PaymentModalState>((set) => ({
  isOpen: false,
  hearts: null,
  price: null,
  open: (hearts: number) => {
    const price = hearts === 1 ? 2000 : hearts === 3 ? 3000 : 0;
    set({ isOpen: true, hearts, price });
  },
  close: () => set({ isOpen: false, hearts: null, price: null }),
}));
