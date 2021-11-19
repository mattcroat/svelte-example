<script lang="ts">
  import { spring, tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  let progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  })

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  )

  let size = spring(10)
</script>

<section>
  <progress value={$progress} />

  <button on:click={() => progress.set(0)}>0%</button>
  <button on:click={() => progress.set(0.25)}>25%</button>
  <button on:click={() => progress.set(0.5)}>50%</button>
  <button on:click={() => progress.set(0.75)}>75%</button>
  <button on:click={() => progress.set(1)}>100%</button>

  <svg
    on:mousemove={(event) => coords.set({ x: event.clientX, y: event.clientY })}
    on:mousedown={() => size.set(30)}
    on:mouseup={() => size.set(10)}
  >
    <circle cx={$coords.x} cy={$coords.y} r={$size} />
  </svg>

  <hr />
</section>

<style>
  progress {
    width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  circle {
    fill: #ff3e00;
  }
</style>
