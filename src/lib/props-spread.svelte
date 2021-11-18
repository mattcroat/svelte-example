<script>
  import Props from './props.svelte'

  const pkg = {
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
