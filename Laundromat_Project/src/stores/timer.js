import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
const state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    intervalId: null
}

function startTimer() {
    state.isRunning = true;
    state.intervalId = setInterval(() => {
      if (state.seconds === 0) {
        if (state.minutes === 0) {
          clearInterval(state.intervalId);
          state.isRunning = false;
          
        } else {
          state.minutes--;
          state.seconds = 59;
        }
      } else {
        state.seconds--;
      }
    }, 1000);
}

  function stopTimer() {
    clearInterval(state.intervalId);
    state.isRunning = false;
  }

  function resetTimer() {
    clearInterval(state.intervalId);
    state.minutes = 25;
    state.seconds = 0;
    state.isRunning = false;
  }

  return { ...state, startTimer, stopTimer, resetTimer }
})
