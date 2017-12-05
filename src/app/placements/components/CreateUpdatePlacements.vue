<template>
  <div id="placements-create-edit-view">
    You can create and edit placements with me, yippeeee!

    <router-link :to="{ name: 'listPlacements' }">
      View all of your placements!
    </router-link>

    <form class="form" @submit.prevent="createNewPlacement">
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
      <p class="control">
        <datepicker
          name="start"
          input-class="input"
          format="dd MMMM yyyy"
          v-model="selectedPlacement.start"
        ></datepicker>
      </p>
      <label for="end">End</label>
      <p class="control">
        <datepicker
          name="end"
          input-class="input"
          format="dd MMMM yyyy"
          v-model="selectedPlacement.end"
        ></datepicker>
      </p>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
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
        selectedPlacement: {}
      }
    },

    methods: {
      ...mapActions([
        'createPlacement'
      ]),

      createNewPlacement () {
        this.createPlacement(this.selectedPlacement).then(() => {
          this.selectedPlacement = {}
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #placements-create-edit-view {

  }
</style>
