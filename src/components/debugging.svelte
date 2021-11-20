<script>
  let user = {
    firstName: 'Ada',
    lastName: 'Lovelace',
  }
</script>

<section>
  <input bind:value={user.firstName} />
  <input bind:value={user.lastName} />

  <!-- {(console.log(user), '')} -->
  {@debug user}

  <h1>Hello {user.firstName}</h1>
</section>
