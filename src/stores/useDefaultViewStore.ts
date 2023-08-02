import { create } from 'zustand';

interface IDefaultViewState {
  defaultView: string;
  setDefaultView: (value: string) => void;
}

const useDefaultViewStore = create<IDefaultViewState>()((set) => ({
  defaultView: 'Gallery',
  setDefaultView: (value) => set(() => ({ defaultView: value })),
}));

export const useDefaultView = () =>
  useDefaultViewStore((state) => state.defaultView);
