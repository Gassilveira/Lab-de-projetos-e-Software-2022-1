<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css" scoped></style>

<template>
  <div class="h-[100vh] flex flex-col">
    <div
      class="flex flex-row items-center justify-center border-[1px] top-0 left-0 right-0 homebg"
    >
      <h1 class="text-justify text-[#fbfbfb] text-3xl heading">
        <h1 class="hometest">Bem vindo {{ name }}</h1>
      </h1>
    </div>
    <div class="flex flex-row flex-wrap gap-2 py-8 justify-center">
      <router-link
        :to="'/exames'"
        class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
        >Visualizar exames</router-link
      >
      <router-link
        :to="'/exames'"
        class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
        >Compartilhar Exames</router-link
      >
      <div class="py-2 w-full flex flex-col gap-2 items-center" v-if="sharingCode !== ''">
        <h2 class="font-semibold"> Sua URL de Compartilhamento: </h2>
        <p>{{appURL}}exames/compartilhado/{{sharingCode}}</p>
      </div>
      <div class="py-2 w-full flex flex-col gap-2 items-center" v-else>
        <p>Você ainda não compartilhou seu histórico</p>
        
      </div>
    </div>
  </div>
</template>
