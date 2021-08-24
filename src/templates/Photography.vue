<template>
  <Layout>
    <div class="project photography">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{ photography.title }}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span
                  class="category"
                  v-for="category in photography.categories"
                  :key="category.id"
                >
                  {{ category.title }}
                </span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{ createdYear }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-if="photography.content" v-html="content"></div>
          <p>
            <img :src="GRIDSOME_API_URL + photography.img[0].url" alt="" />
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  photography: strapiPhotography (id: $id) {
    id
    title
    content
    img {
      url
    }
    categories {
      id
      title
    }
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default {
  name: 'Photography',
  metaInfo: {
    title: 'Photography',
  },
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    photography() {
      return this.$page.photography;
    },
    content() {
      return md.render(this.photography.content);
    },
    createdYear() {
      return new Date(this.photography.created_at).getFullYear();
    },
  },
  methods: {},
};
</script>

<style scoped></style>
