<article class="contact-card">
  <h2>
    <slot name="name">
      <span class="missing">🤷 Unknown name</span>
    </slot>
  </h2>

  <div class="address">
    <slot name="address">
      <span class="missing">🏠 Unknown address</span>
    </slot>
  </div>

  <div class="email">
    <slot name="email">
      <span class="missing">✉️ Unknown email</span>
    </slot>
  </div>
</article>

<style>
  .contact-card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px hsla(0 0% 0% / 10%);
    padding: 1em;
  }

  .missing {
    color: #999;
  }
</style>
