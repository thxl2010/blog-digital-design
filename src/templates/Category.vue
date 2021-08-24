<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1># {{ $page.category.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            v-for="post in $page.category.posts"
            :key="post.id"
            class="post-preview"
          >
            <g-link :to="`/post/${post.id}`">
              <h2 class="post-title">
                {{ post.title }}
              </h2>
            </g-link>
          </div>
          <!-- Divider-->
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  category: strapiCategory (id: $id) {
    id
    title
    photographies {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
  name: 'Category',
  metaInfo: {
    title: 'Category',
  },
};
</script>
