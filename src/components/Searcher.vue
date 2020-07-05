<template>
  <div>
    <h1 id="title" class="text-center my-5">iTunes Artists</h1>
    <p id="instruction-text">Please enter the artist name to find information about related albums:</p>
    <v-row justify="center">
      <v-col cols="8" sm="6" md="6">
        <v-form ref="form">
          <v-text-field id="artist-name" outlined label="Artist" placeholder="For example: Jack Johnson" v-model="artistName" :rules="rules"></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="3" sm="2" md="2">
        <v-btn id="search-button" class="mt-1" color="pink darken-3" dark large @click="sendArtistName()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artistName: '',
      rules: [value => value !== '' || 'You must insert an artist name.']
    }
  },
  methods: {
    validateField: function() {
      return this.$refs.form.validate();
    },
    sendArtistName: function() {
      if (this.validateField()) {
        this.$emit('send-artist-name', this.artistName)
      }
    }
  }
}
</script>