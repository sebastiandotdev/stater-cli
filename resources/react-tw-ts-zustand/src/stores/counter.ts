import { create } from 'zustand'

interface CounterState {
    counter: number
    increment: () => void
    decrement: () => void
}

export const useCounter = create<CounterState>((set) => ({
    counter: 0,
    increment: () =>  {
        set((state) => ({counter: state + 1}))
    },
    
    decrement: () =>  {
        set((state) => ({counter: state - 1}))
    }
}))