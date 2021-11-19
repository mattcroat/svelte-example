<script lang="ts">
  import { fade, fly } from 'svelte/transition'

  let visible = true
</script>

<section>
  <input type="checkbox" bind:checked={visible} /> visible

  {#if visible}
    <p in:fly={{ y: 200, duration: 200 }} out:fade>Flies in and out</p>
  {/if}

  <hr />
</section>
