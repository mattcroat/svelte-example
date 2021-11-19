<script lang="ts">
  import { onMount } from 'svelte'

  let photos = []

  onMount(async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=4`
    )
    photos = await response.json()
  })
</script>

<section>
  <h1>Photo album</h1>

  <div class="photos">
    {#each photos as photo}
      <figure>
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <figcation>{photo.title}</figcation>
      </figure>
    {:else}
      <p>Loading...</p>
    {/each}
  </div>

  <hr />
</section>

<style>
  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

  figure,
  img {
    width: 100%;
    margin: 0;
  }
</style>
