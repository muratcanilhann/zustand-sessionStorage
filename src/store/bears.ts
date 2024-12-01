import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";



interface BearState {
  bears: number;
  increase: () => void;
}


export const useBearStore = create<BearState>()(
    persist(
      (set) => ({
        bears: 0,
        increase: () => set((state) => ({ bears: state.bears + 1 })),
      }),

      // (optional) by default the 'localStorage' is used
      
      {
        name: 'bears-storage',
        storage: createJSONStorage(() => sessionStorage), 
        partialize: (state) => ({ bears: state.bears }),
      },
    ),
  )