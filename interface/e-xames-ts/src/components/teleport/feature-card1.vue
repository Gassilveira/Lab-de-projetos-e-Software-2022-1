<template>
  <div class="feature-card1-feature-card" v-bind:class="rootClassName">
    <h2 class="feature-card1-text">{{ title }}</h2>
    <img :alt="image_alt" :src="image_src" class="feature-card1-image" />
    <button class="feature-card1-button button">{{ button }}</button>
    <button class="feature-card1-button1 button">{{ button1 }}</button>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard1',
  props: {
    button: {
      type: String,
      default: 'Visualizar',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Lorem ipsum',
    },
    rootClassName: String,
    button1: {
      type: String,
      default: 'Compartilhar',
    },
  },
}
</script>

<style scoped>
.feature-card1-feature-card {
  width: 100%;
  height: 334px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.feature-card1-feature-card:hover {
  transform: scale(1.02);
}
.feature-card1-text {
  align-self: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.feature-card1-image {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  align-self: center;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius4);
}
.feature-card1-button {
  color: #ffffff;
  align-self: center;
  margin-top: var(--dl-space-space-oneandhalfunits);
  border-color: #989898;
  background-color: #499ef5;
}
.feature-card1-button1 {
  color: #fdfdfd;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  border-color: #b1b1b1;
  background-color: #2b8129;
}








</style>
