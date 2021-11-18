<script lang="ts">
  import { count } from './stores'

  let increment = () => count.update((number) => (number += 1))
</script>

<button on:click={increment}>+</button>
