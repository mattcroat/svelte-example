<script lang="ts">
  import { count } from './stores'

  let decrement = () => count.update((number) => (number -= 1))
</script>

<button on:click={decrement}>-</button>
