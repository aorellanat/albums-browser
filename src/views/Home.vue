<template>
  <v-container>
    <h1 id="title" class="text-center my-5">iTunes Artists</h1>
    <p id="instruction-text">Please enter artist name to search information about his albums:</p>
    <v-row justify="center">
      <v-col cols="8" sm="6" md="6">
        <v-form ref="form">
          <v-text-field id="artist-name" outlined label="Artist" placeholder="For example: Jack Johnson" v-model="artistName" :rules="rules"></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="3" sm="2" md="2">
        <v-btn id="search-button" class="mt-1" color="pink darken-3" dark large @click="search()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="album in albums" :key="album.name">
        <AlbumCard :album="album.collectionName" :artist="album.artistName" :price="album.collectionPrice" :urlImageCover="album.artworkUrl100"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AlbumCard from '@/components/AlbumCard';
import axios from 'axios';

export default {
  components: {
    AlbumCard
  },
  data() {
    return {
      artistName: '',
      albums: [],
      rules: [value => value !== '' || 'You must insert an artist name.'],
      resultCount: 0
    }
  },
  methods: {
    search: function() {
      if (this.validateField()){
        let artist = this.formatArtistName();

        axios.get(`https://itunes.apple.com/search?term=${artist}&entity=album`)
        .then(result => {
          console.log(result.data.results);
          this.albums = result.data.results;
          this.resultCount = result.data.resultCount;
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    formatArtistName: function() {
      return this.artistName.replace(' ','-').toLowerCase();
    },
    validateField: function() {
      return this.$refs.form.validate();
    }
  }
}
</script>