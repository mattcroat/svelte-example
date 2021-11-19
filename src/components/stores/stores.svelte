<script lang="ts">
  // import { onDestroy } from 'svelte'
  import { count, customCount, elapsed, time } from './stores'
  import Incrementer from './incrementer.svelte'
  import Decrementer from './decrementer.svelte'
  import Resetter from './resetter.svelte'

  // let countValue: number
  // count.subscribe((value) => (countValue = value))

  // let unsubscribe = count.subscribe((value) => (countValue = value))
  // onDestroy(unsubscribe)

  let formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  })
</script>

<section>
  <h1>Count is {$count}</h1>
  <Incrementer />
  <Decrementer />
  <Resetter />

  <h1>The time is {formatter.format($time)}</h1>

  <p>
    The page has been open for {$elapsed}
    {$elapsed === 1 ? 'second' : 'seconds'}
  </p>

  <h1>Count is {$customCount}</h1>
  <button on:click={customCount.increment}>+</button>
  <button on:click={customCount.decrement}>-</button>
  <button on:click={customCount.reset}>Reset</button>

  <hr />
</section>
