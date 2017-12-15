<template>
  <div id="placements-list-view">
    I'm a list of placements!

    <router-link :to="{ name: 'createUpdatePlacement' }">Add a new placement</router-link>

    <ul>
      <li v-for="placement, key in placements">
        {{ placement.status }}
        {{ placement.candidate }}
        {{ placement.company }}
        {{ placement.start }}
        {{ placement.end }}
        <router-link :to="{ name: 'createUpdatePlacement', params: placement.id }">Edit</router-link>
        <a @click="confirmDeletePlacement(placement)">Delete</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'placements-list-view',

    mounted () {
      this.loadPlacements()
    },

    methods: {
      ...mapActions([
        'deletePlacement',
        'loadPlacements'
      ])
    },

    confirmDeletePlacement (placement) {
      if (confirm(`Are you sure you want to delete candidacy of ${placement.candidate} for ${placement.company}`)) {
        this.deletePlacement(placement)
      }
    },

    computed: {
      ...mapState({
        'placements': state => state.placements.placements
      })
    }
  }
</script>

<style scoped lang="scss">
  #accounts-list-view {
  }
</style>
