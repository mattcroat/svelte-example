<script lang="ts">
  import CustomButton from './custom-button.svelte'

  let handleClick = () => alert('Clicked')

  let mouse = { x: 0, y: 0 }
  let handleMouseMove = (event: MouseEvent) =>
    (mouse = { x: event.clientX, y: event.clientY })
</script>

<section>
  <div on:mousemove={handleMouseMove}>
    The moust position is {mouse.x} x {mouse.y}
  </div>

  <hr />

  <button on:click|once|self={handleClick}>Click</button>

  <hr />

  <CustomButton on:click={() => alert('Forwarded event')} />

  <hr />
</section>
