<template>
  <div class="container mx-auto" v-if="post">
    <div class="w-full border">
     <div class="flex items-center justify-around">
        <h3 class="font-bold text-4xl">{{ post.title }}</h3>
      <small class="italic font-bold text-pink-600">
        <span>Posted {{ formatDate(post.createdAt) }}</span> &mdash;
        <span>Updated {{ formatDate(post.updatedAt) }}</span>
      </small>
     </div>
      <div
        class="prose lg:prose-sm min-w-full"
        v-html="$md.render(post.content)"
      ></div>
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";
export default {
  async asyncData({ $graphcms, params }) {
    console.log("params", params);
    const { slug } = params;
    const { post } = await $graphcms.request(
      gql`
        query GetPost($id: ID) {
          post(where: { id: $id }) {
            title
            description
            content
            createdAt
            updatedAt
          }
        }
      `,
      {
        id: slug,
      }
    );
    console.log("Post =>", post);
    return { post };
  },
  head() {
    return { title: this.post?.title };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("ar", options).format(new Date(date));
    },
  },
};
</script>
<style >
</style>