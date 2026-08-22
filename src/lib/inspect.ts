import { create } from "zustand";

type InspectState = {
  slug: string | null;
  open: (slug: string) => void;
  close: () => void;
};

export const useInspect = create<InspectState>((set) => ({
  slug: null,
  open: (slug) => set({ slug }),
  close: () => set({ slug: null }),
}));
