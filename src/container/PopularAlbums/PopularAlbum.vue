<template>
  <div class="popular__albums">
    <slot></slot>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else class="popular__albums-wrapper">
      <div v-for="(album, index) in albums" :key="index">
        <AlbumCover :album="album" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import AlbumCover from "../../components/AlbumCover/AlbumCover.vue";

export default {
  name: "PopularAlbum",
  props: {
    albums: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
  },
  components: {
    AlbumCover,
  },
};
</script>

<style lang="scss" src="./_popular-album.scss"></style>
