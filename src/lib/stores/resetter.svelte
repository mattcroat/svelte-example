<script lang="ts">
  import { count } from './stores'

  let resetCount = () => count.set(0)
</script>

<button on:click={resetCount}>Reset</button>
