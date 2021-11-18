<script lang="ts">
  export let name: string
  export let version: number
  export let speed: string
  export let website: string
</script>

<section>
  <p>
    The <code>{name}</code> package is {speed} fast. Download version {version} from
    <a href="https://www.npmjs.com/package/{name}">npm</a>
    and <a href={website}>learn more here</a>
  </p>
</section>
