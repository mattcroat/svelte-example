<script lang="ts">
  let count = 0
  $: doubled = count * 2
  let incrementCount = () => (count += 1)
  // $: console.log(`The count is ${count}`)
  // $: if (count >= 10) {
  //   console.log('Count is dangerously high!')
  //   count = 9
  // }

  let numbers = [1, 2, 3, 4]
  // let addNumber = () => (numbers = [...numbers, numbers.length + 1])
  let addNumber = () => (numbers[numbers.length] = numbers.length + 1)
  $: sum = numbers.reduce((acc, value) => acc + value, 0)
</script>

<section>
  <button on:click={incrementCount}>Click</button>
  <p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
  <p>{count} doubled is {doubled}</p>

  <hr />

  <button on:click={addNumber}>Add a number</button>
  <p>{numbers.join(' + ')} = {sum}</p>

  <hr />
</section>
