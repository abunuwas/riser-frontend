<template>
  <div id="placements-create-edit-view">
    You can create and edit placements with me, yippeeee!

    <router-link :to="{ name: 'listPlacements' }">
      View all of your placements!
    </router-link>

    <form class="form" @submit.prevent="processSave">
      <label for="submitted">Submitted</label>
      <p class="control">
        <input
          type="text"
          class="input"
          name="submitted"
          v-model="selectedPlacement.name"
        >
      </p>
      <label for="status">Status</label>
      <p class="control">
        <select
          name="status"
          v-model="selectedPlacement.status"
        >
          <option
            v-for="value, key in statuses"
            :value="key"
          >{{ value }}</option>
        </select>
      </p>
      <label for="company">Company</label>
      <p class="control">
        <select
          name="company"
          v-model="selectedPlacement.company"
        >
          <option
            v-for="value, key in companies"
            :value="key"
          >{{ value }}</option>
        </select>
      </p>
      <label for="candidate">Candidate</label>
      <p class="control">
        <select
          name="candidate"
          v-model="selectedPlacement.candidate"
        >
          <option
            v-for="value, key in candidates"
            :value="key"
          >{{ value }}</option>
        </select>
      </p>
      <label for="start">Start</label>
      <p class="control has-icon has-addons">
        <datepicker
          name="start"
          input-class="input"
          format="dd MMMM yyyy"
          v-model="selectedPlacement.start"
        ></datepicker>
        <span class="icon">
          <i class="fa fa-calendar"
             aria-hidden="true"></i>
        </span>
      </p>
      <label for="end">End</label>
      <p class="control has-icon has-addons">
        <datepicker
          name="end"
          input-class="input"
          format="dd MMMM yyyy"
          v-model="selectedPlacement.end"
        ></datepicker>
        <span class="icon">
          <i class="fa fa-calendar"
             aria-hidden="true"></i>
        </span>
      </p>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <router-link :to="{ name: 'listPlacements' }">
            <button class="button is-link">Cancel</button>
          </router-link>
        </p>
      </div>
    </form>
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
