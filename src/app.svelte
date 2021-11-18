<script lang="ts">
  import Basics from './lib/basics.svelte'
  import Components from './lib/components.svelte'
  import RenderingHtml from './lib/rendering-html.svelte'
  import Reactivity from './lib/reactivity.svelte'
  import PropsSpread from './lib/props-spread.svelte'
  import Conditionals from './lib/conditionals.svelte'
  import Loops from './lib/loops.svelte'
  import Await from './lib/await.svelte'
  import EventHandling from './lib/event-handling.svelte'
  import Bindings from './lib/bindings.svelte'
  import Lifecycle from './lib/lifecycle.svelte'
  import Stores from './lib/stores/stores.svelte'
  import Motion from './lib/motion.svelte'
  import Transitions from './lib/transitions.svelte'
</script>

<main>
  <Basics />
  <Components />
  <RenderingHtml />
  <Reactivity />
  <PropsSpread />
  <Conditionals />
  <Loops />
  <Await />
  <EventHandling />
  <Bindings />
  <Lifecycle />
  <Stores />
  <Motion />
  <Transitions />
</main>

<style>
  main {
    max-width: 60ch;
    margin: 0 auto;
  }
</style>
