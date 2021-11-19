<script lang="ts">
  import Basics from './components/basics.svelte'
  import Components from './components/components/components.svelte'
  import RenderingHtml from './components/rendering-html.svelte'
  import Reactivity from './components/reactivity.svelte'
  import PropsSpread from './components/props-spread.svelte'
  import Conditionals from './components/conditionals.svelte'
  import Loops from './components/loops/loops.svelte'
  import Await from './components/await.svelte'
  import EventHandling from './components/event-handling.svelte'
  import Bindings from './components/bindings.svelte'
  import Lifecycle from './components/lifecycle.svelte'
  import Stores from './components/stores/stores.svelte'
  import Motion from './components/motion.svelte'
  import Transitions from './components/transitions.svelte'
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
