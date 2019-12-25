<template>
  <v-app class="blue lighten-5"> 
        <v-row
            align="center"
            justify="center"
            >
            <v-lazy
                :options="{
                threshold: 1
                }"
                transition="scale-transition"
            >
            <v-col class="text-center" cols="12">
                <h3 class="subheading">freee 技術課題</h3>
                <h1 class="display-2 font-weight-bold mb-4">家計簿アプリ</h1>
            </v-col>
            </v-lazy>
    </v-row>
  
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>