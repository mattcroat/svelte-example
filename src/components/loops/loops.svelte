<script lang="ts">
  import Thing from './thing.svelte'

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ]

  let handleClick = () => (things = things.slice(1))
</script>

<section>
  <button on:click={handleClick}>Remove first thing</button>
  {#each things as { id, name } (id)}
    <Thing {name} />
  {/each}

  <hr />
</section>
