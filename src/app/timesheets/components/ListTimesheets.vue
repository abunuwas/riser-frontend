<template>
  <div class="columns">
    <div class="column is-2 is-mobile"></div>
    <div class="column is- is-mobile">
      <div id="timesheets-list-view">
        <nav class="level">
          <div class="level-left">
            <h2 class="title is-2">Timesheets</h2>
          </div>
        </nav>
        <!--<pre>{{ timesheets }}</pre>-->
            <div class="a-column">
              <div class="tile is-parent is-4"
                   style="float: left;"
                   v-for="timesheet, key in timesheets"
              >
                <article class="tile is-child box">
                  <router-link
                    :to="{ name: 'updateTimesheet',
                       params: { timesheetId: key } }"
                  >
                  <p class="subtitle timesheet-url"
                     v-bind:style="{ 'background-color': getColor(timesheet.status) }">
                    {{ translateStatus(timesheet.status) }}</p>
                  <div class="content" style="color: black;">from {{ timesheet.ts_start | moment }} to {{ timesheet.ts_end | moment }}</div>
                  <div class="content" style="color: black;">{{ timesheet["working days"].length }} days worked</div>
                  </router-link>
                </article>
              </div>
            </div>
      </div>
    </div>
    <div class="column is-2 is-mobile"></div>
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

    filters: {
      moment
    },

    mounted () {
      this.loadTimesheets()
    },

    methods: {
      ...mapActions([
        'loadTimesheets'
      ]),

      getColor (status) {
        if (status[0] === 'X') {
          return 'yellow'
        } else {
          return 'blue'
        }
      },

      translateStatus (status) {
        let statusMap = {
          'X': 'pending',
          'S': 'submitted',
          'A': 'submitted',
          'B': 'approved'
        }
        let tsStatus = status[0]
        return statusMap[tsStatus]
      }
    },

    computed: {
      ...mapState({
        'timesheets': state => state.timesheets.timesheets
      })
    }
  }
</script>
<style>
  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    width: 85%;
  }

  .a-column {
    flex: 50%;
    padding: 0 4px;
    width: 85%;
  }

  .timesheet-url {
  }
</style>
