<template>
  <div class="columns">
    <div class="column is-1"></div>
    <div class="dashboard">
      <h2 class="title is-2 has-text-centered">Your dashboard</h2>
      <nav class="level">
        <aside class="menu">
          <p class="menu-label">Sections</p>
          <ul class="menu-list">
            <li>
              <router-link
              class="button is-primary"
              :to="{ name: 'listPlacements' }"
            >Placements
              </router-link>
            </li>
            <li>
              <router-link
                class="button is-primary"
                :to="{ name: 'listTimesheets' }"
              >Timesheets</router-link>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dashboard'
  }
</script>
