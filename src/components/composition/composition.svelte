<script lang="ts">
  import Box from './box.svelte'
  import Comment from './comment.svelte'
  import ContactCard from './contact-card.svelte'
  import Hoverable from './hoverable.svelte'
  import Project from './project.svelte'
</script>

<section>
  <Box>
    <h2>Box</h2>
    <p>This is a box. It can contain anything.</p>
  </Box>

  <Box />

  <hr />

  <ContactCard />

  <br />

  <ContactCard>
    <span slot="name">Matia</span>
    <span slot="address">Imagination</span>
  </ContactCard>

  <hr />

  <h1>Projects</h1>

  <ul>
    <li>
      <Project
        title="Add TypeScript support"
        tasksCompleted={25}
        totalTasks={57}
      >
        <div slot="comments">
          <Comment name="ECMAScript" postedAt={new Date()}>
            <p>Those interface tests are now passing.</p>
          </Comment>
        </div>
      </Project>
    </li>
    <li>
      <Project
        title="Update documentation"
        tasksCompleted={18}
        totalTasks={21}
      />
    </li>
  </ul>

  <hr />

  <Hoverable let:hovering={active}>
    <div class="hoverable" class:active>
      {#if active}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hover over me!</p>
      {/if}
    </div>
  </Hoverable>

  <hr />
</section>

<style>
  h1 {
    font-weight: 300;
    margin: 0 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem;
    display: flex;
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }

  li {
    padding: 0.5rem;
    flex: 1 1 50%;
    min-width: 200px;
  }

  .hoverable {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }
</style>
