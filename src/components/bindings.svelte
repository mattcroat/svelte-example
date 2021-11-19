<script lang="ts">
  let name = 'darling'
  let html = 'Some strong <strong>HTML</strong> markup'

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

<section>
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
</section>
