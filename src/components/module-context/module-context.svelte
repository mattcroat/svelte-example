<script>
  import AudioPlayer, { stopAll } from './AudioPlayer.svelte'

  let tracks = [
    {
      src: 'https://sveltejs.github.io/assets/music/strauss.mp3',
      title: 'The Blue Danube Waltz',
      composer: 'Johann Strauss',
      performer: 'European Archive',
    },
    {
      src: 'https://sveltejs.github.io/assets/music/holst.mp3',
      title: 'Mars, the Bringer of War',
      composer: 'Gustav Holst',
      performer: 'USAF Heritage of America Band',
    },
    {
      src: 'https://sveltejs.github.io/assets/music/satie.mp3',
      title: 'Gymnopédie no. 1',
      composer: 'Erik Satie',
      performer: 'Prodigal Procrastinator',
    },
    {
      src: 'https://sveltejs.github.io/assets/music/beethoven.mp3',
      title: 'Symphony no. 5 in Cm, Op. 67 - I. Allegro con brio',
      composer: 'Ludwig van Beethoven',
      performer: 'European Archive',
    },
  ]
</script>

<section>
  <button on:click={stopAll}>Stop all audio</button>

  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}

  <hr />
</section>
