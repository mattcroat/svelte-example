<script lang="ts">
  import Props from './props.svelte'

  let pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev',
  }
</script>

<section>
  <Props {...pkg} />

  <hr />
</section>
