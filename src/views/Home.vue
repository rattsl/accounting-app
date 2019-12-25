<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>家計簿アプリ</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <Top/>
      <v-container>
        <v-card>
          <Signup/>
        </v-card>
        <v-card>
          <Signin/>
        </v-card>
      </v-container>
    </v-content>
    <v-footer
      color="primary"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Top from "../components/top.vue"
import Signup from "../components/signup.vue"
import Signin from "../components/signin.vue"

  export default {
    name: "App",
    components: {
      Top,
      Signup,
      Signin
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
