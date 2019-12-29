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
                                        label="収支"
                                        required
                                        ></v-select>
                                </v-col>
                                <v-col>
                                    <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="date"
                                        label="日時"
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-menu>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                        <v-text-field
                                        v-model="price"
                                        :error-messages="nameErrors"
                                        :counter="10"
                                        label="金額"
                                        required
                                        ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        v-model="memo"
                                        :error-messages="nameErrors"
                                        :counter="10"
                                        label="一言メモ"
                                        required
                                        ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="gray"
                            text
                            @click="dialog = false"
                        >
                            キャンセル
                        </v-btn>
                        <v-btn
                            color="primary"
                            text
                            @click="register"
                        >
                            登録
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
                {text: '収入/支出', align: 'left', sortable: false, value: 'inout'},
            { text: '日時', value: 'date' },
            { text: '金額', value: 'price' },
            { text: 'メモ', value: 'memo' },
            { text: '操作', value: 'action' },
            ],
            registers: [],
            register: [
            {
                inout: '',
                date: "",
                price: "",
                memo: "",
                action: "",
            },
            ],
            
        }
    },
    components: {
        graph,
        calender
    },
    created: function(){

    },
    methods: {
         doLogout: function () {
            firebase.auth().signOut().then(() => {
            this.$router.push('/')
            })
         },
         doRegister: function(){
            
         },
    },
    props: {
      source: String,
    },
  }
</script>
<style>

</style>