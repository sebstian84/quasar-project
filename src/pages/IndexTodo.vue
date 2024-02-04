<template>
  <q-page class="bg-grey-2 column">
    <q-list class="bg-white">
      <q-item 
      v-for="task in tasks" 
      :key="task.title" 
      tag="label" 
      v-ripple>
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.done" 
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-pa-md q-gutter-sm">
    <q-btn class="btn-fixed-width" align="left" color="accent" text-color="white"  @click="doneAll" icon="mail">   Done All</q-btn>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn class="btn-fixed-width" align="left" color="accent" text-color="white"  @click="fetchData" icon="mail">   API</q-btn>
  </div>

  <div v-for="product in productArray" :key="product.title">
  {{ product.id }} <br>
  {{ product.title }} <br>
  {{ product.description }}
  <hr>
  </div>

  </q-page>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tasksArray = [
  {title: 'Nachricht 1', done: false},
  {title: 'Nachricht 2', done: false},
  {title: 'Nachricht 3', done: false}]

const tasks = ref(tasksArray)

const productArray = ref([
  {id: '', title: '', description: ''}
])

function doneAll (){
tasks.value.forEach((i) => {
i.done = !i.done
}) }

async function fetchData() {
const response = await fetch('https://dummyjson.com/products/')
const json = await response.json()
for (let i in json){
  for (let a in json[i]) {
     productArray.value.push(
      { id: json[i][a]['id'], title: json[i][a]['title'], description: json[i][a]['description']})
  }} 
}

</script>
