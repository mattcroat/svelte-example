<script>
  let getRandomPokemon = async () => {
    return 'Remove this line to get random Pokemon'

    let { count } = await (
      await fetch('https://pokeapi.co/api/v2/pokemon-species/')
    ).json()
    let randomPokemon = Math.round(Math.random() * count)

    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    )
    let pokemon = (await response.json()).species.name

    if (!response.ok) {
      throw new Error('Something went wrong fetching the Pokemon.')
    }

    return pokemon
  }

  let randomPokemon = getRandomPokemon()
</script>

<section>
  {#await randomPokemon}
    <p>Picking random Pokemon...</p>
  {:then pokemon}
    <p style="text-transform: capitalize">{pokemon}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

  <hr />
</section>
