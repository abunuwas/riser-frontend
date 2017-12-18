<template>
  <div class="columns">
    <div class="column is-2"></div>
      <div id="placements-create-edit-view">
        <nav class="level">
          <div class="level-left">
            <h1 class="title is-2">Add a new placement</h1>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="level-item has-text-centered">
                <router-link
                  class="button is-primary"
                  :to="{ name: 'listPlacements' }"
                >
                  View all of your placements!
                </router-link>
              </div>
            </div>
          </div>
        </nav>

        <div class="columns">
          <div class="column is-6">
            <form
              class="form"
              @submit.prevent="processSave"
            >
              <label for="submitted">Submitted</label>
              <p class="control">
                <input
                  type="text"
                  class="input"
                  name="submitted"
                  v-model="selectedPlacement.submitted"
                >
              </p>
              <label for="status">Status</label>
              <p class="control">
                <select
                  type="text"
                  name="status"
                  v-model="selectedPlacement.status"
                >
                <option
                  v-for="value, key in statuses"
                  :value="value"
                >{{ value }}</option>
                </select>
              </p>
              <label for="candidate">Candidate</label>
              <p class="control">
                <input
                  type="text"
                  class="input"
                  name="candidate"
                  v-model="selectedPlacement.candidate"
                >
              </p>
              <label for="company">Company</label>
              <p class="control">
                <input
                  type="text"
                  class="input"
                  name="company"
                  v-model="selectedPlacement.company"
                >
              </p>
              <label for="start" class="date">Start</label>
              <p class="control">
                <datepicker
                  name="start"
                  input-class="input"
                  format="dd MMMM yyyy"
                  v-model="selectedPlacement.start"
                ></datepicker>
                <span class="icon">
                  <i class="fa fa-calendar"
                     aria-hidden="true"
                  ></i>
                </span>
              </p>
              <label for="start" class="date">End</label>
              <p class="control">
                <datepicker
                  name="end"
                  input-class="input"
                  format="dd MMMM yyyy"
                  v-model="selectedPlacement.end"
                ></datepicker>
                <span class="icon">
                  <i class="fa fa-calendar"
                     aria-hidden="true"
                  ></i>
                </span>
              </p>
              <p class="control">
                <button class="button is-primary">Submit</button>
              </p>
              <p class="control">
                <router-link :to="{ name: 'listPlacements' }">
                  <button class="button is-link">Cancel</button>
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    <div class="column is-2"></div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Datepicker from 'vuejs-datepicker'

  const STATUSES = {
    'ACCEPTED': 'Accepted',
    'DECLINED': 'Declined',
    'PENDING': 'Pending'
  }

  const COMPANIES = {
    'MICROSOFT': 'Microsoft',
    'GOOGLE': 'Google',
    'FACEBOOK': 'Facebook'
  }

  const CANDIDATES = {
    'John': 'john',
    'Rob': 'Rob',
    'Charles': 'Charles'
  }

  export default {
    name: 'placements-create-edit-view',

    components: {
      Datepicker
    },

    data: () => {
      return {
        statuses: STATUSES,
        companies: COMPANIES,
        candidates: CANDIDATES,
        selectedPlacement: {},
        editing: false
      }
    },

    mounted () {
      if ('budgetId' in this.$route.params) {
        this.loadBudgets().then(() => {
          let selectedPlacement = this.getPlacementById(this.$route.params.placementId)
          if (selectedPlacement) {
            this.editing = true
            this.selectedPlacement = Object.assign({}, selectedPlacement)
          }
        })
      }
    },

    methods: {
      ...mapActions([
        'createPlacement',
        'updatePlacement',
        'loadPlacements'
      ]),

      resetAndGo () {
        this.selectedPlacement = {}
      },

      saveNewPlacement () {
        this.createPlacement(this.selectedPlacement).then(() => {
          this.resetAndGo()
        }).catch((err) => {
          alert(err)
        })
      },

      savePlacement () {
        this.updatePlacement(this.selectedPlacement).then(() => {
          this.resetAndGo()
        })
      },

      processSave () {
        this.$route.params.placementId ? this.savePlacement() : this.saveNewPlacement()
      }
    },

    computed: {
      ...mapGetters([
        'getPlacementById',
        'getCategoryById'
      ])
    }
  }
</script>

<style scoped lang="scss">
  #placements-create-edit-view {

  }
</style>
