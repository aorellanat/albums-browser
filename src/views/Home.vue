<template>
  <v-container>
    <h1 id="title" class="text-center my-5">iTunes Artists</h1>
    <p id="instruction-text">Please enter artist name to search information about his albums:</p>
    <v-row justify="center">
      <v-col cols="8" sm="6" md="6">
        <v-text-field id="artist-name" outlined label="Artist"></v-text-field>
      </v-col>
      <v-col cols="3" sm="2" md="2">
        <v-btn id="search-button" class="mt-1" color="pink darken-3" dark large>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
