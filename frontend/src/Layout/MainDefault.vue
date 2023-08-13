<template>
    <div>
      <v-app-bar color="#FFFFFF">
        <v-app-bar-nav-icon
          class="ml-2"
          color="#85F068"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-img
            :src="require('../assets/logo_name.png')"
            class="my-3"
            contain
            width="240px"
            height="44px"
          />
        </v-toolbar-title>
        <v-spacer></v-spacer>
  
  
        <div class="mr-2" style="width: 108px">
          <v-text-field
            label="Search"
            disabled
            flat
            solo
            hide-details="auto"
            append-icon="mdi-magnify"
          >
            <template v-slot:label>
              <span style="color: #7cd40c">Search</span>
            </template>
            <template v-slot:append>
              <v-icon style="color: #7cd40c">mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </div>
        <div class="mr-3">
          <v-btn icon small>
            <v-icon color="#7CD40C"> mdi-white-balance-sunny </v-icon>
          </v-btn>
        </div>
        <div class="mr-2">
          <v-btn icon small>
            <v-badge color="red" dot>
              <v-icon color="#7CD40C"> mdi-bell </v-icon>
            </v-badge>
          </v-btn>
        </div>
        <div class="mr-2" style="width: 78px">
          <v-select
            v-model="select"
            :items="item"
            flat
            solo
            disabled
            hide-details="auto"
            color="#7CD40C"
          >
            <template v-slot:selection="{ item }">
              <span style="color: #7cd40c">{{ item }}</span>
            </template>
            <template v-slot:append>
              <v-icon style="color: #7cd40c">mdi-menu-down</v-icon>
            </template>
          </v-select>
        </div>
        <div class="mr-10">
          <v-btn icon>
            <v-avatar style="margin-left: 30%">
              <v-img
                center
                :src="require('../assets/profile.png')"
                style="height: 110px; margin-top: 50%"
              />
            </v-avatar>
            <v-icon class="" color="#7cd40c">mdi-menu-down</v-icon>
          </v-btn>
        </div>
      </v-app-bar>
  
  
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-img
              :src="require('../assets/logo.png')"
              contain
              class="my-3 mx-auto"
              width="150px"
            />
            <!-- <v-list-item style="background-color: #38d9b2">
              <v-list-item-icon class="mr-auto">
                <v-icon color="white">mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="ml-2 white--text">
                Login
              </v-list-item-title>
            </v-list-item>  -->
            <v-list-group class="list-group mb-1">
              <template v-slot:activator>
                <v-list-item-icon class="mr-auto">
                  <v-icon color="white">mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="ml-2 white--text"
                    >Home</v-list-item-title
                  >
                </v-list-item-content>
              </template>
              <v-list-item style="background-color: #f4f8fa" to="/">
                <v-list-item-icon class="mr-auto">
                  <v-icon style="color: #70b1a6 !important">mdi-lightbulb</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-2" style="color: #70b1a6"
                  >Zero waste tips</v-list-item-title
                >
              </v-list-item>
              <v-list-item style="background-color: #f4f8fa">
                <v-list-item-icon class="mr-auto">
                  <v-icon style="color: #70b1a6 !important">mdi-bookmark</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-2" style="color: #70b1a6"
                  >Tracking Waste Reduction</v-list-item-title
                >
              </v-list-item>
              <v-list-item style="background-color: #f4f8fa">
                <v-list-item-icon class="mr-auto">
                  <v-icon style="color: #70b1a6 !important"
                    >mdi-map-marker</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title class="ml-2" style="color: #70b1a6"
                  >Dumping point</v-list-item-title
                >
              </v-list-item>
              <v-list-item style="background-color: #f4f8fa">
                <v-list-item-icon class="mr-auto">
                  <v-icon style="color: #70b1a6 !important">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-2" style="color: #70b1a6"
                  >Reward Points</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="mb-1" style="background-color: #f4f8fa">
                <v-list-item-icon class="mr-auto">
                  <v-icon style="color: #70b1a6 !important"
                    >mdi-message-text</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title class="ml-2" style="color: #70b1a6"
                  >Community</v-list-item-title
                >
              </v-list-item>
            </v-list-group>
  
  
            <v-list-item class="sign-out mt-3" style="background-color: #f55a9a">
              <v-list-item-icon class="mr-auto">
                <v-icon color="white">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="ml-2 white--text"
                >Sign Out</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        select: "EN",
        item: ["EN", "TH"],
        home: [],
      };
    },
    methods: {},
  };
  </script>
  
  
  <style scoped>
  .list-group >>> .v-list-group__header {
    background-color: #2ceabc;
    box-shadow: 0 4px 10px -4px #c0f32f;
  }
  .list-group >>> .v-icon {
    color: white !important;
  }
  
  
  .sign-out {
    box-shadow: 1px 2px 6px #f55a9a;
  }
  </style>
  
  
  
  