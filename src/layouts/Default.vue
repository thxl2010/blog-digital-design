<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/">
            <img :src="GRIDSOME_API_URL + logo.url" alt="logo" class="logo" />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link class="nav__link" to="/journal">Journal</g-link>
          <g-link class="nav__link" to="/contact">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot />

    <footer class="footer">
      <div class="container">
        <span data-v-07acb5f8="">Copyright © 2021 Duyb</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  generals: allStrapiGeneral {
    edges {
      node {
        logo {
          url
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Default',
  computed: {
    logo() {
      return this.$static.generals.edges[0].node.logo[0];
    },
  },
};
</script>

<style scoped>
.nav > .nav__link {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.nav > .nav__link:last-of-type {
  margin: 0;
}

.nav > .nav__link.active,
.nav > .nav__link:hover {
  border-color: inherit;
}

.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
