<template>
  <v-card class="mb-2">
    <v-row no-gutters justify="end">
      <v-col cols="6" sm="6" md="6">
        <v-img :src="urlImageCover" class="image"></v-img>
      </v-col>
      <v-col cols="6" sm="6" md="6">
      <v-card-title class="mt-1 ml-5">Album: {{album}}</v-card-title>
      <v-card-subtitle class="mt-1 ml-5">{{artist}}</v-card-subtitle>
      <v-card-text class="ml-5">Price: {{price}}</v-card-text>
      </v-col>
    </v-row>
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
