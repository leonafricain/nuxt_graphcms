<template>
  <div class="container mx-auto p-8">
    <div class="my-8">
      <button
        @click="addCours"
        class="
          px-4
          py-2
          font-bod
          bg-green-600
          rounded
          hover:bg-green-700
          text-white
        "
      >
        add Cours
      </button>
    </div>
    <div v-for="course in courses" :key="course.id">
      <NuxtLink :to="{ name: 'course-slug', params: { slug: course.id } }">
        {{ course.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { gql } from "graphql-request";
export default {
  async asyncData({ $graphcms }) {
    const query = gql`
      query {
        courses {
          id
        }
      }
    `;
    const { courses } = await $graphcms.request(query);
    console.log(courses);
    return {
      courses,
    };
  },
  methods: {
    async addCours() {
      const mutation = gql`
        mutation MyMutation {
          __typename
          createCourse(
            data: {
              name: "Reactjs"
              description: "un cours"
              url: "https://www.google.fr"
            }
          ) {
            id
            stage
            name
          }
        }
      `;
      const response = await this.$graphcms.request(mutation);
      console.log(response.createCourse);
      if (response.createCourse.stage == "DRAFT") {
        const confirm = gql`
          mutation confirmMutation($id: ID) {
            __typename
            publishCourse(where: { id: $id }) {
              name
            }
          }
        `;
        const variables = { id: response.createCourse.id };
        const djaweb = await this.$graphcms.request(confirm, variables);
        console.log("djaweb", djaweb);
      }
    },
  },
};
</script>
