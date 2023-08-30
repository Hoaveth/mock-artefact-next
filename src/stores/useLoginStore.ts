import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface LoginStoreState {
  isRememberMeChecked: boolean;
  email: string;
  setIsRememberMeChecked: (value: boolean) => void;
  setEmail: (value: string) => void;
}

const useLoginStore = create<LoginStoreState>()(
  persist(
    (set) => ({
      isRememberMeChecked: false,
      email: '',
      setIsRememberMeChecked: (value: boolean) =>
        set((state) => ({
          isRememberMeChecked: value,
          email: value ? state.email : '',
        })),
      setEmail: (value: string) => set(() => ({ email: value })),
    }),
    { name: 'auth', storage: createJSONStorage(() => localStorage) }
  )
);

export default useLoginStore;
