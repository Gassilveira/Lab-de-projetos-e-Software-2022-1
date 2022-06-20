<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css"></style>

<template>
  <div class="h-[100vh] flex flex-col py-4">
    <h1 class="font-extrabold text-sky-800 text-2xl self-center">
      Bem vindo {{ name }}
    </h1>
    <div class="self-center py-8">
      <router-link
        :to="'/exames'"
        class="bg-green-600 px-4 p-2 rounded-md shadow-md"
        >Visualizar exames</router-link
      >
    </div>
  </div>
</template>
