<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>家計簿アプリ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
         @click="doLogout"
      >
        <span class="mr-2">ログアウト</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
          <v-row>
              <v-col>
                <graph :styles="{position: 'relative'}"></graph>
              </v-col>
              <v-col>
                <calender></calender>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
              <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                    ></v-data-table>
              </v-col>
              <v-col>
                   <div class="text-center">
                    <v-dialog
                    v-model="dialog"
                    width="500"
                    >
                    <template v-slot:activator="{ on }">
                        <v-btn
                        color="red lighten-2"
                        dark
                        v-on="on"
                        >
                        Click Me
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                        Privacy Policy
                        </v-card-title>

                        <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                        >
                            I accept
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </div>
              </v-col>
          </v-row>
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
import firebase from 'firebase'
import graph from '../components/graph.vue'
import calender from '../components/calender.vue'


  export default {
    name: 'Home',
    data: function() {
        return {
            dialog: false,
            headers: [
            {
                text: '収入/支出',
                align: 'left',
                sortable: false,
                value: 'name',
            },
            { text: 'ジャンル', value: 'calories' },
            { text: '日付', value: 'fat' },
            { text: '金額', value: 'carbs' },
            { text: 'メモ', value: 'protein' },
            { text: '操作', value: 'iron' },
            ],
            desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: "400000000000000000000000000000000000000000000000",
                iron: '1%',
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%',
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%',
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%',
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%',
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%',
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%',
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%',
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
            },
            ],
            
        }
    },
    components: {
        graph,
        calender
    },
    methods: {
         doLogout: function () {
            firebase.auth().signOut().then(() => {
            this.$router.push('/')
            })
         }
    },
    props: {
      source: String,
    },
  }
</script>
<style>

</style>