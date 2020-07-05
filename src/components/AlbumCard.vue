<template>
  <v-card class="mb-2" height="100%">
    <v-img class="album-img" :src="urlImageCover" height="300"></v-img>
    <v-card-title class="mt-1 album-name">{{album}}</v-card-title>
    <v-card-subtitle class="mt-1 album-artist">{{artist}}</v-card-subtitle>
    <v-card-text class="album-price">Price: {{price}} USD</v-card-text>
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
