<script lang="ts">
  import Nested from './Nested.svelte'
  import Props from './Props.svelte'
  import src from './assets/svelte.png'
  import Thing from './Thing.svelte'
  import CustomButton from './CustomButton.svelte'

  let name = 'darling'
  let html = 'Some strong <strong>HTML</strong> markup'

  let count = 0
  $: doubled = count * 2
  let incrementCount = () => (count += 1)
  // $: console.log(`The count is ${count}`)
  // $: if (count >= 10) {
  //   console.log('Count is dangerously high!')
  //   count = 9
  // }

  let numbers = [1, 2, 3, 4]
  // let addNumber = () => (numbers = [...numbers, numbers.length + 1])
  let addNumber = () => (numbers[numbers.length] = numbers.length + 1)
  $: sum = numbers.reduce((acc, value) => acc + value, 0)

  const pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev',
  }

  let user = { loggedIn: false }
  let toggle = () => (user.loggedIn = !user.loggedIn)

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ]

  let handleClick = () => (things = things.slice(1))

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

  let mouse = { x: 0, y: 0 }
  let handleMouseMove = (event) =>
    (mouse = { x: event.clientX, y: event.clientY })

  let yes = false
  let value = 'Some words are <em>italic</em>, some are <strong>bold</strong>'
  let pokemon = [
    { id: 1, name: 'Pikachu' },
    { id: 2, name: 'Bulbasaur' },
    { id: 3, name: 'Charmander' },
  ]
  let selected: string
  let handleSubmit = () => alert(`You selected ${selected}`)
</script>

<main>
  <img {src} alt="Svelte logo" />
  <h1>Hello, {name.toUpperCase()}</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia
    perferendis placeat! Iure quis dolores numquam aliquid, dicta impedit
    voluptatem ad facere tenetur quod, sunt exercitationem, magnam incidunt
    delectus ullam.
  </p>

  <hr />

  <Nested answer={42} />
  <Nested />

  <hr />

  {@html html}

  <hr />

  <button on:click={incrementCount}>Click</button>
  <p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
  <p>{count} doubled is {doubled}</p>

  <hr />

  <button on:click={addNumber}> Add a number </button>
  <p>{numbers.join(' + ')} = {sum}</p>

  <hr />

  <Props {...pkg} />

  <hr />

  {#if user.loggedIn}
    <button on:click={toggle}>Log out</button>
  {:else}
    <button on:click={toggle}>Log in</button>
  {/if}

  <hr />

  <button on:click={handleClick}>Remove first thing</button>
  {#each things as { id, name } (id)}
    <Thing {name} />
  {/each}

  <hr />

  {#await randomPokemon}
    <p>Picking random Pokemon...</p>
  {:then pokemon}
    <p style="text-transform: capitalize">{pokemon}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

  <hr />

  <div on:mousemove={handleMouseMove}>
    The moust position is {mouse.x} x {mouse.y}
  </div>

  <hr />

  <button on:click|once|self={handleClick}>Click</button>

  <hr />

  <CustomButton on:click={() => alert('Forwarded event')} />

  <hr />

  <input bind:value={name} />
  <h1>Hello {name}</h1>

  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
  </label>

  {#if yes}
    <p>Thank you.</p>
  {:else}
    <p>You must opt in to continue.</p>
  {/if}

  {@html value}
  <textarea bind:value cols="40" rows="10" />

  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected}>
      {#each pokemon as { name }}
        <option value={name}>{name}</option>
      {/each}
    </select>
    <button type="submit">Submit</button>
  </form>

  <div contenteditable="true" bind:innerHTML={html} />
  <pre>{html}</pre>
</main>

<style>
  main {
    max-width: 60ch;
    margin: 0 auto;
  }

  img {
    max-height: 6rem;
  }

  p {
    color: #aaa;
    line-height: 1.4;
  }

  hr {
    margin: 1rem 0;
    border: 1px solid #3a3a3a;
  }
</style>
