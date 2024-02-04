<template>
  <q-layout>
    <div class="shadow-up-3">
      <q-toolbar class="bg-white">

        <!-- Responsive Mobile-->        
        <div class="lt-md row col">
        <q-btn flat icon="menu" label="Menü" no-caps style="color: #006AC7; font-size: 15px;"/>
        <div class="row col justify-center">
        <q-img class="q-mb-sm q-mr-md q-mt-md"  width="65px" src="~assets/dkb_logo.png"></q-img>
        </div>
        </div>

        <!-- Responsive Desktop-->  
        <div class=" gt-sm row col">
        <div style="margin-left: 175px;" class="gt-md"></div>
        <q-img class="q-mb-sm q-mr-md q-mt-md" width="90px" src="~assets/dkb_logo.png"></q-img>
        <q-tabs no-caps id="topmenu" dense indicator-color="white" >
          <q-route-tab v-for="item in menuPunkteHigher" :key="item.link" :label="item.text" :to="item.link" exact />
        </q-tabs>
        </div>

        <div class="row" style="margin-right: 25px;">
           <!-- Suchmaske -->
        <q-input model-value="" class="q-mr-md" v-show="searchPanel"  label="Suche" maxlength="50" >
        <template v-slot:append>
          <q-icon name="search" />
          <q-icon name="close" @click="searchPanel = !searchPanel" class="cursor-pointer" />
        </template>
         </q-input>
       <!-- Responsive Suche und Anmelden -->
        <q-btn v-show="!searchPanel" v-on:click="searchPanel = !searchPanel" no-caps flat icon="search" class="text-bold gt-xs" style="color: #006AC7; font-size: 15px;" label="Suche" />
        <q-btn v-show="!searchPanel" v-on:click="searchPanel = !searchPanel" no-caps flat icon="search" class="text-bold lt-sm" style="color: #006AC7; font-size: 15px;"/>
        <q-btn no-caps flat icon="login" class="text-bold gt-sm" style="background: #D9EFFF; color: #006AC7; font-size: 15px; " label="Anmelden" />
        <q-btn no-caps flat icon="login" class="text-bold lt-md" style="background: #D9EFFF; color: #006AC7; font-size: 15px; "  /> 
        </div>
     
      </q-toolbar>

      <div class="gt-sm" style="background-color: #F3F9FE; width:100%;">
      <q-toolbar>
        <!-- Einzug Desktop Ansicht -->
        <div style="margin-left: 280px" class="gt-md"></div>
        <div style="margin-left: 105px" class="lt-lg"></div>
        <q-tabs id="topmenu2" no-caps>
          <q-tab v-for="item in menuPunkteLower" :key="item.text" :label="item.text"/>
        </q-tabs>
      </q-toolbar>
    </div>
   </div>
   <div>
    <q-page-container>
    <router-view />
    </q-page-container>
   </div>
  </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const searchPanel = ref(false)

const menuPunkteHigher = ref([
  {text: 'Privat', link:'/'},
  {text: 'Geschäftlich', link:'/geschaeftlich'},
  {text: 'Nachhalting', link:'/nachhaltig'},
])

const menuPunkteLower = ref([
  {text: 'Girokonto'},
  {text: 'Karten'},
  {text: 'Kredite'},
  {text: 'Investieren'},
  {text: 'Sparen'},
  {text: 'Baufinanzierung'},
  {text: 'Versicherungen'}
])
</script>


<style lang="scss">


</style>
