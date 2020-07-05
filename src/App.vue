<template>
  <v-app>
    <AlbumsBrowser />
  </v-app>
</template>

<script>
import AlbumsBrowser from '@/views/AlbumsBrowser';

export default {
  name: 'App',

  components: {
    AlbumsBrowser
  },

  data: () => ({
    //
  }),
};
</script>
