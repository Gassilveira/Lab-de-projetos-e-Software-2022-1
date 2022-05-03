<template>
  <nav class="navigation-links6-nav" v-bind:class="rootClassName">
    <span class="navigation-links6-text">{{ text }}</span>
    <span class="navigation-links6-text1">{{ text1 }}</span>
    <span class="navigation-links6-text2">{{ text2 }}</span>
    <span class="navigation-links6-text3">{{ text3 }}</span>
    <span class="navigation-links6-text4">{{ text4 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks6',
  props: {
    rootClassName: String,
    text2: {
      type: String,
      default: 'Pricing',
    },
    text3: {
      type: String,
      default: 'Team',
    },
    text1: {
      type: String,
      default: 'Features',
    },
    text4: {
      type: String,
      default: 'Blog',
    },
    text: {
      type: String,
      default: 'About',
    },
  },
}
</script>

<style scoped>
.navigation-links6-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links6-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links6-text2 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links6-text3 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links6-text4 {
  margin-left: var(--dl-space-space-twounits);
}











@media(max-width: 767px) {
  .navigation-links6-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links6-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links6-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links6-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links6-text3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links6-text4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
