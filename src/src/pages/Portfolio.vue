<template>
  <section class="section">
    <h2>Portfolio</h2>
    <p>
      This is but a sample of my previous work.
      <br />Want to see more? Get in touch with me!
    </p>

    <ul class="ul">
      <li v-for="index in items" :key="index">
        <ModalImage :src="`img-${index}`" />
      </li>
    </ul>
  </section>
</template>

<script>
import { ModalImage } from "../components";

export default {
  name: "Portfolio",

  props: { items: Number },

  components: { ModalImage },
};
</script>

<style scoped>
.section {
  background-color: var(--high-contrast-color);
}

.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 0.25rem;
}

@media (min-width: 940px) {
  .ul {
    margin: 2rem auto;

    overflow: auto;
    align-self: stretch;
    height: 57.5vh;
  }
}
</style>