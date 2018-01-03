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
        <div class="container">
          <div class="item"
               v-for="timesheet, key in timesheets">
            <div v-bind:style="{ 'background-color': getColor(timesheet.status) }">{{ timesheet.status }}</div>
            <div>{{ timesheet.start }}-{{ timesheet.end }}</div>
            <div>{{ timesheet.working_days }} days worked</div>
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
  .container {
    width: 100%;
    height: 100%;
    border: black .1px solid;
    border-bottom: black .1px solid;
    border-right: black .1px solid;
  }

  .item {
    float: left;
    width: 30%;
    height: 28%;
    border: red .2px solid;
  }
</style>
