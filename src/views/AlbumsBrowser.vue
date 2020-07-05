<template>
  <v-container>
    <Searcher v-on:send-artist-name="searchAlbums"/>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="album in albums" :key="album.name">
        <AlbumCard :album="album.collectionName" :artist="album.artistName" :price="album.collectionPrice ? album.collectionPrice: 0" :urlImageCover="album.artworkUrl100"/>
      </v-col>
    </v-row>
    <div v-if="!disablePagination" class="text-center mb-5">
      <v-pagination
        v-model="currentPage"
        color="pink lighten-1"
        :length="pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      >
      </v-pagination>
      <v-btn text @click="showAllAlbums()">See all ></v-btn>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink darken-1" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Searcher from '@/components/Searcher';
import AlbumCard from '@/components/AlbumCard';
import axios from 'axios';

export default {
  components: {
    Searcher,
    AlbumCard
  },
  data() {
    return {
      albums: [],
      results: [],
      currentPage: 0,
      pages: 0,
      cardsPerPage: 20,
      disablePagination: true,
      snackbar: false,
      timeout: 900,
      text: 'No results found.'
    }
  },
  watch: {
    currentPage: function() {
      let start = (this.currentPage - 1) * this.cardsPerPage;
      let end = this.currentPage * this.cardsPerPage;
      this.updateCurrentPage(start, end);
      this.$vuetify.goTo(0);
    }
  },
  methods: {
    searchAlbums: function(artistName) {
      axios.get(`https://itunes.apple.com/search?term=${artistName}&entity=album`)
      .then(result => {
        this.results = result.data.results;

        if (this.results.length > 0) {
          this.setUpPagination();
        } else {
          this.results = [];
          this.albums = [];
          this.disablePagination = true;
          this.showSnackbar();
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    setUpPagination: function() {
      this.disablePagination = false;

      if (this.currentPage === 1) {
        this.updateCurrentPage(0, this.cardsPerPage);
      } else {
        this.currentPage = 1;
      }

      this.pages = Math.ceil(this.results.length / this.cardsPerPage);
    },
    showAllAlbums: function() {
      this.disablePagination = true;
      this.albums = this.results;
    },
    showSnackbar: function() {
      this.snackbar = true;
    },
    updateCurrentPage: function(start, end) {
      this.albums = this.results.slice(start, end);
    }
  }
}
</script>