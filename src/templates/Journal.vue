<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.journal.title }}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <span class="meta">
                Posted by
                <!-- <a href="#!">Start Bootstrap</a> -->
                on {{ $page.journal.created_at }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="content"></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  journal: strapiJournal (id: $id) {
    id
    title
    content
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default {
  name: 'Journal',
  metaInfo: {
    title: 'Journal',
  },
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    content() {
      return md.render(this.$page.journal.content);
    },
  },
  methods: {},
};
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}

.journal-meta > div {
  margin-right: 4rem;
}

.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
