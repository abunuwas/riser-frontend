<template>
  <div class="columns">
    <div class="column is-2"></div>
    <div id="placements-list-view">
      <nav class="level">
        <div class="level-left">
          <h2 class="title is-2">Placements</h2>
        </div>
        <div class="level-right">
          <div class="level-item has-text-centered">
            <router-link
              class="button is-primary"
              :to="{ name: 'createUpdatePlacement' }"
            >
              Add a new placement +
            </router-link>
          </div>
        </div>
      </nav>
      <pre>{{ placements }}</pre>
      <table class="table is-bordered">
        <thead>
        <tr>
          <th>Submitted</th>
          <th>Status</th>
          <th>Candidate</th>
          <th>Company</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="placement, key in placements">
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.submitted }}</span>
          </td>
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.status }}</span>
          </td>
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.candidate }}</span>
          </td>
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.company }}</span>
          </td>
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.start | moment }}</span>
          </td>
          <td class="subtitle is-5">
            <span class="tag is-5">{{ placement.end | moment }}</span>
          </td>
          <td>
            <router-link
              class="button is-primary"
              :to="{ name: 'createUpdatePlacement', params: placement.id }"
            >
              Edit
            </router-link>
          </td>
          <td>
            <a
              class="button is-danger"
              @click="confirmDeletePlacement(placement)"
            >
              Delete
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="column is-2"></div>
  </div>

</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { moment } from '../../../filters'

  export default {
    name: 'placements-list-view',

    filters: {
      moment
    },

    mounted () {
      this.loadPlacements()
    },

    methods: {
      ...mapActions([
        'deletePlacement',
        'loadPlacements'
      ]),

      confirmDeletePlacement (placement) {
        if (confirm(`Are you sure you want to delete candidacy of ${placement.candidate} for ${placement.company}`)) {
          this.deletePlacement(placement)
          // this.$forceUpdate()
        }
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
