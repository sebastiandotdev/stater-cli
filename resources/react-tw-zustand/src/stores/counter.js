import { create } from 'zustand'

export const useCounter = create(set => ({
  counter: 0,
  increment: () => {
    set(state => ({ counter: state + 1 }))
  },
  decrement: () => {
    set(state => ({ counter: state - 1 }))
  },
}))
