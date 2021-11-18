<script lang="ts">
  import Nested from './nested.svelte'
</script>

<section>
  <Nested answer={42} />
  <Nested />

  <hr />
</section>
