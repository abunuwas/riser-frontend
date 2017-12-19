<template>
  <div id="timesheets-list-view">
    <div v-if="timesheetsNotDefined()">
      <label for="from">From</label>
      <p class="control">
        <input
          type="number"
          class="input"
          name="numberOfTimeSheets"
          v-model="numberOfTimesheets"
        >
      </p>
      <pre>{{ numberOfTimesheets }}</pre>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Datepicker from 'vuejs-datepicker'
  import { moment } from '../../../filters'

  export default {
    name: 'timesheets-list-view',

    components: {
      Datepicker
    },

    data: () => {
      return {
        numberOfTimesheets: 0
      }
    },

    filters: {
      moment
    },

    mounted () {
    },

    methods: {
      ...mapActions([
      ]),

      timesheetsNotDefined () {
        return this.numberOfTimesheets === 0 || this.numberOfTimesheets === ''
      }
    },

    computed: {
      ...mapState({
      })
    }
  }
</script>
