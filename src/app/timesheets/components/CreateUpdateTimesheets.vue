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

      <!--<pre>{{ selectedTimesheet }}</pre>-->

      <div class="columns">
        <div class="column is-6">
          <p class="control">
              Status: {{ selectedTimesheet.status }}
          </p>
          <p class="control">
            Start: {{ selectedTimesheet.ts_start }}
          </p>
          <p class="control">
            End: {{ selectedTimesheet.ts_end }}
          </p>
          <p class="control">
            {{ selectedTimesheet.break }}
          </p>
          <p class="control">Working days:</p>
          <form
            class="form"
            @submit.prevent="processSave"
          >
            <table class="table is-bordered">
              <thead>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Break</th>
              <th>Status</th>
              </thead>
              <tbody v-for="day in selectedTimesheet['working days']">
              <tr>
                <td>
                  <div style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis">{{ day.date }}</div>
                </td>
                <td>
                  <input type="text"
                         class="input"
                         name="start"
                         v-model="day.start"
                         style="width:auto;"
                  >
                </td>
                <td>
                  <input type="text"
                         class="input"
                         name="end"
                         v-model="day.end"
                         style="width:auto;"
                  >
                </td>
                <td>
                  <input type="text"
                         class="input"
                         name="end"
                         v-model="day.break"
                         style="width:auto;"
                  >
                </td>
                <td>
                  <div class="non-wrappers">{{ day.state }}</div>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="control is-grouped">
              <p class="control">
                <button class="button is-success">Submit</button>
              </p>
              <p class="control">
                <router-link :to="{ name: 'listTimesheets' }">
                  <button class="button is-linked">Cancel</button>
                </router-link>
              </p>
              </div>
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
        selectedTimesheet: {},
        editing: false
      }
    },

    mounted () {
      if ('timesheetId' in this.$route.params) {
        this.loadTimesheets().then(() => {
          let selectedTimesheet = this.getTimesheetById(this.$route.params.timesheetId)
          if (selectedTimesheet) {
            this.editing = true
            this.selectedTimesheet = Object.assign({}, selectedTimesheet)
            this.selectedTimesheet.id = this.$route.params.timesheetId
          }
        })
      }
    },

    methods: {
      ...mapActions([
        'updateTimesheet',
        'loadTimesheets'
      ]),

      saveTimesheet () {
        console.log('THE TIMESHEET ID: ' + this.selectedTimesheet.id)
        this.updateTimesheet(this.selectedTimesheet).then(() => {
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
<style>
  .non-wrappers {
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>

