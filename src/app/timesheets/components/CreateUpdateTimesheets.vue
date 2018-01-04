<template>
  <div class="columns">
    <div class="column is-1"></div>
    <div id="timesheet-create-edit-view">
      <nav class="level">
        <div class="level-left">
          <h2 class="title is-3">Update Timesheet</h2>
        </div>
        <div class="level-right">
            <div class="level-item has-text-centered">
              <router-link
                class="button is-primary"
                :to="{ name: 'listTimesheets' }"
              >View all timesheets</router-link>
          </div>
        </div>
      </nav>

      <div class="columns">
        <div class="column is-6">
          <form
            class="form"
            @submit.prevent="processSave"
          >
            <label for="State">State</label>
            <p class="control">
                <input
                  type="text"
                  class="input has-text-centered"
                  name="submitted"
                  value="selectedTimesheet.state"
                  v-model="selectedTimesheet.state"
                readonly>
              </p>
            <label for="Date">Date</label>
            <p class="control">
                {{ selectedTimesheet.date }}12
              </p>
            <label for="break">Break</label>
            <p class="control">
              <input
                type="text"
                class="input"
                name="submitted"
                v-model="selectedTimesheet.break"
              >
            </p>
            <label for="break">Break</label>
            <p class="control">
              <input
                type="text"
                class="input"
                name="submitted"
                v-model="selectedTimesheet.break"
              >
            </p>
            <label for="break">Break</label>
            <p class="control">
              <input
                type="text"
                class="input"
                name="submitted"
                v-model="selectedTimesheet.break"
              >
            </p>
          </form>
        </div>
      </div>
    </div>
    <div class="column is-1"></div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'timesheets-create-edit-view',

    components: {
      Datepicker
    },

    data: () => {
      return {
        selectedTimesheet: {
          'state': 'pending'
        }
      }
    },

    methods: {
      ...mapActions([
        'updateTimesheet'
      ]),

      saveTimesheet () {
        this.updateTimesheet(this.selectedTimeshset).then(() => {
          console.log('Timesheet updated.')
        })
      },

      processSave () {
        this.saveTimesheet()
      }
    },

    computed: {
      ...mapGetters([
        'getTimesheetById'
      ])
    }
  }
</script>

