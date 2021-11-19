<script lang="ts">
  let user = { loggedIn: false }
  let toggle = () => (user.loggedIn = !user.loggedIn)
</script>

<section>
  {#if user.loggedIn}
    <button on:click={toggle}>Log out</button>
  {:else}
    <button on:click={toggle}>Log in</button>
  {/if}

  <hr />
</section>
