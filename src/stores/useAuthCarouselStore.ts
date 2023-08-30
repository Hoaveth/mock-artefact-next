import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface AuthCarouselStoreState {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const useAuthCarouselStore = create<AuthCarouselStoreState>()(
  persist(
    (set) => ({
      currentSlide: 0,
      setCurrentSlide: (slide: number) => set(() => ({ currentSlide: slide })),
    }),
    { name: 'user', storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthCarouselStore;
