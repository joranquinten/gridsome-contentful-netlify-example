<template>
  <Layout>
    <h1>Blog</h1>

    <ul class="posts">
      <li class="post" v-for="{ node } in $page.post.edges" :key="node.id">
        <div class="post-header">
          <h3 class="post-title">
            <g-link :to="`blog/${node.slug}`"> {{ node.title }}</g-link>
          </h3>
          <span class="post-date hand-written">{{
            dateFormat(node.publishDate)
          }}</span>
        </div>
        <vue-markdown class="description">{{ excerpt(node) }}</vue-markdown>
        <div class="post-footer">
          <Tags :tags="node.tags" />
        </div>
      </li>
    </ul>
  </Layout>
</template>

<script>
import VueMarkdown from "vue-markdown";
import truncate from "html-truncate";
import dateFormat from "date-fns/format";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    VueMarkdown
  },
  methods: {
    excerpt(node) {
      let excerpt = node.metaDescription ? node.metaDescription : node.body;
      return truncate(excerpt, 120);
    },
    dateFormat(date) {
      const thisDate = new Date(date);
      return dateFormat(thisDate, "MMMM do, yyyy");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_core.scss";
.posts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .post + * {
    margin-top: 2em;
  }

  @media screen and (min-width: 740px) {
    .post:nth-child(even) {
      margin-left: 1em;
    }
    .post {
      width: calc(50% - 0.5em);
    }
    .post + * {
      margin-top: 0;
    }
  }

  .post-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .post-title {
      margin: 0.4em 0;
    }

    .post-date {
      font-size: 1.2em;
    }
  }
}
</style>

<page-query>
query Posts {
  post: allContentfulPost(sortBy:"publishDate" order:DESC) {
    edges {
      node {
        title,
        slug,
        publishDate,
        metaDescription,
        body
      }
    }
  }
}
</page-query>
