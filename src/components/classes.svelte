<script lang="ts">
  let current = 'first'
  let big = false
</script>

<section>
  <button
    class:selected={current === 'first'}
    on:click={() => (current = 'first')}>First</button
  >

  <button
    class:selected={current == 'second'}
    on:click={() => (current = 'second')}>Second</button
  >

  <button
    class:selected={current === 'third'}
    on:click={() => (current = 'third')}>Third</button
  >

  <hr />

  <label>
    <input type="checkbox" bind:checked={big} /> big
  </label>

  <div class:big>
    some {big ? 'big' : 'small'} text
  </div>

  <hr />
</section>

<style>
  .selected {
    color: #fff;
    background-color: #ff3e00;
  }

  .big {
    font-size: 4rem;
  }
</style>
