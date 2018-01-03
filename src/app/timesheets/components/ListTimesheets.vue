<template>
  <div class="columns">
    <div class="column is-2"></div>
      <div id="timesheets-ist-view">
        <nav class="level">
          <div class="level-left">
            <h2 class="title is-2">Timesheets</h2>
          </div>
        </nav>
        <!--<pre>{{ timesheets }}</pre>-->
        <div class="tile is-ancestor">
          <div class="tile is-parent"
               v-for="timesheet, key in timesheets">
          <article class="tile is-child box">
            <p class="subtitle" v-bind:style="{ 'background-color': getColor(timesheet.status) }">
              {{ timesheet.status }}</p>
            <div class="content">{{ timesheet.start }}-{{ timesheet.end }}</div>
            <div class="content">{{ timesheet.working_days }} days worked</div>
          </article>
          </div>
        </div>
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
        timesheets: {
          '1': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '2': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '3': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '4': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '5': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '6': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '7': {
            start: '2017-01-03',
            end: '2017-02-04',
            status: 'approved',
            working_days: 10
          },
          '8': {
            start: '2017-04-03',
            end: '2017-05-04',
            status: 'undefined',
            working_days: 0
          }
        }
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

      getColor (status) {
        if (status === 'approved') {
          return 'green'
        } else {
          return 'blue'
        }
      }
    },

    computed: {
      ...mapState({
      })
    }
  }
</script>

<style>
</style>
