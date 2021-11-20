<script context="module">
  // let current

  let elements = new Set()
  export const stopAll = () => elements.forEach((element) => element.pause())
</script>

<script>
  import { onMount } from 'svelte'

  export let src
  export let title
  export let composer
  export let performer

  let audio
  let paused = true

  // let stopOthers = () => {
  //   if (current && current !== audio) {
  //     current.pause()
  //   }

  //   current = audio
  // }

  onMount(() => {
    elements.add(audio)
    return () => elements.delete(audio)
  })

  let stopOthers = () => {
    elements.forEach((element) => element !== audio && element.pause())
  }
</script>

<article class:playing={!paused}>
  <h2>{title}</h2>
  <p><strong>{composer}</strong> / perfomed by {performer}</p>
  <audio bind:this={audio} bind:paused on:play={stopOthers} controls {src} />
</article>

<style>
  article {
    margin: 0 0 1em 0;
    max-width: 800px;
  }

  h2,
  p {
    margin: 0 0 0.3em 0;
  }

  audio {
    width: 100%;
    margin: 0.5em 0 1em 0;
  }

  .playing {
    color: #ff3e00;
  }
</style>
