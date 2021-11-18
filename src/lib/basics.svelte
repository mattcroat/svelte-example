<script lang="ts">
  import src from '../assets/svelte.png'
  let name = 'darling'
</script>

<section>
  <img {src} alt="Svelte logo" />
  <h1>Hello, {name.toUpperCase()}</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia
    perferendis placeat! Iure quis dolores numquam aliquid, dicta impedit
    voluptatem ad facere tenetur quod, sunt exercitationem, magnam incidunt
    delectus ullam.
  </p>

  <hr />
</section>

<style>
  img {
    max-height: 6rem;
  }
</style>
