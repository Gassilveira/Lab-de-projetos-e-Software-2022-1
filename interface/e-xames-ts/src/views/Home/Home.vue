<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css"></style>

<template>
  <div class="h-[100vh] flex flex-col">
    <div class="manutenodecontasusurio-container2">
      <h1 class="manutenodecontasusurio-text heading">
        <h1>Bem vindo {{ name }}</h1>
      </h1>
    </div>
    <div class="self-center py-8">
      <router-link
        :to="'/exames'"
         class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
        >Visualizar exames</router-link
      >
    </div>
  </div>
</template>
