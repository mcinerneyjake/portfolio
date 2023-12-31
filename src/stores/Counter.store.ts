import { create } from 'zustand';

interface CounterState {
  count: number;
  decreaseCount: () => void;
  increaseCount: () => void;
  resetCount: () => void;
}

const createCounterSlice = create<CounterState>((set) => ({
  count: 0,
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));

export default createCounterSlice;
