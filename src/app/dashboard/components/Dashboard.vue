<template>
  <div class="columns">
    <div class="column is-1"></div>
    <div class="dashboard">
      <h2 class="title is-2 has-text-centered">Your dashboard</h2>
      <nav class="level">
        <aside class="menu" style="background-color: #f2f2f2">
          <p class="menu-label">Sections</p>
          <ul class="menu-list">
            <li>
              <router-link
              :to="{ name: 'listPlacements' }"
            >Placements
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'listTimesheets' }"
              >Timesheets</router-link>
            </li>
          </ul>
          <p class="menu-label">Rock n' Roll</p>
          <ul class="menu-list">
            <li>
              <a v-on:click="showMusic()"
              >Rock n' Roll</a>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
    <div class="column is-8">
    <iframe src="http://www.youtube.com/embed/M6JpxDebokM" hidden="false" id="player"
            width="560" height="315" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dashboard',

    methods: {
      showMusic () {
        let musicFrame = document.getElementById('player')
        musicFrame.removeAttribute('hidden')
        musicFrame.setAttribute('src', 'http://www.youtube.com/embed/M6JpxDebokM?autoplay=1')
      }
    }
  }
</script>
