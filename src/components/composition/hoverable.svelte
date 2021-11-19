<script lang="ts">
  let hovering: boolean
  let enter = () => (hovering = true)
  let leave = () => (hovering = false)
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot {hovering} />
</div>
