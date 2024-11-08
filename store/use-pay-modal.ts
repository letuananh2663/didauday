import { create } from "zustand";

type PayModalState = {
  isOpen: boolean;
  heartOption: string | null;
  open: () => void;
  close: () => void;
  setHeartOption: (option: string) => void;
};

export const usePayModal = create<PayModalState>((set) => ({
  isOpen: false,
  heartOption: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setHeartOption: (option: string) => set({ heartOption: option }),
}));
