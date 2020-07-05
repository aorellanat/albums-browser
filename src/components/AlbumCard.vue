<template>
  <v-card class="mb-2" height="100%">
    <v-img :src="urlImageCover" height="300"></v-img>
    <v-card-title class="mt-1">{{album}}</v-card-title>
    <v-card-subtitle class="mt-1">{{artist}}</v-card-subtitle>
    <v-card-text>Price: {{price}} $</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    album: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    urlImageCover: {
      type: String,
      default: 'https://resistencia.es/wp-content/uploads/2018/10/music.png'
    }
  },
}
</script>

<style scoped>
.image {
  height: 100%;
  width: 40vw;
}
</style>
