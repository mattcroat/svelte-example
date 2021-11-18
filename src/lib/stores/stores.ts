import { derived, readable, writable } from 'svelte/store'

// writable
export let count = writable(0)

// readable
export let time = readable(null, function start(set) {
  let interval = setInterval(() => {
    set(new Date())
  }, 1000)

  return function stop() {
    clearInterval(interval)
  }
})

// derived
let start = new Date().getTime()

export let elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
)

// custom
let createCount = () => {
  let { subscribe, set, update } = writable(0)

  return {
    subscribe,
    increment: () => update((number) => (number += 1)),
    decrement: () => update((number) => (number -= 1)),
    reset: () => set(0),
  }
}

export let customCount = createCount()
