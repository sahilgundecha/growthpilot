import { create } from "zustand";

type DashboardStore = {
  range: number;
  setRange: (r: number) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  range: 30,
  setRange: (r) => set({ range: r }),
}));
