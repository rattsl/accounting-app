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
                    :items="datas"
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
                        記録する
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                        新規収支登録
                        </v-card-title>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-select
                                        v-model="select"
                                        :items="items"
                                        :error-messages="selectErrors"
                                        label="Item"
                                        required
                                        @change="$v.select.$touch()"
                                        @blur="$v.select.$touch()"
                                        ></v-select>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        :counter="10"
                                        label="Name"
                                        required
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                        ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>

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
                value: 'inout',
            },
            { text: '日時', value: 'date' },
            { text: '金額', value: 'price' },
            { text: 'メモ', value: 'memo' },
            { text: '操作', value: 'action' },
            ],
            datas: [
            {
                inout: '収入',
                date: "2019-12-15",
                price: 6.0,
                memo: 24,
                action: '1%',
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