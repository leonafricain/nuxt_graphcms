<template>
 <div>
   <div>Le Projet de Hakim</div>
    <article class="container mx-auto p-8">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="`course/${post.id}`">
        {{ post.title }}
      </NuxtLink>
    </div>
  </article>
 </div>
</template>

<script>
import { gql } from "graphql-request";
export default {
  head() {
    return {title: "blog"}
  },
  async asyncData({ $graphcms }) {
    console.log($graphcms);
    const query = gql`
      query {
        posts {
          title
          id
          description
          createdAt
            updatedAt
        }
      }
    `;
    const { posts } = await $graphcms.request(query);
    console.log(posts);
    return {
      posts,
    };
  },
  layout: "default",
};
</script>
