<script src="./RegisterPatient.ts" lang="ts"></script>
<style src="./RegisterPatient.css"></style>

<template>
  <Loading v-if="loading"></Loading>
  <div class="manutenodecontasusurio-container" v-else>
    <div class="manutenodecontasusurio-container2">
      <h1 class="manutenodecontasusurio-text heading">
        <span>Manutenção de contas</span>
      </h1>
    </div>
    <div class="manutenodecontasusurio-container3">
      <h1 class="manutenodecontasusurio-text02">
        <span>Informações de seu usuário</span>
      </h1>
      <form
        class="flex flex-col px-10 py-8 w-full gap-8 flex-wrap xl:w-[60%] xl:flex-row"
      >
        <div class="flex flex-col gap-2 w-full">
          <label class="uppercase font-extrabold">Nome Completo</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.name"
          />
        </div>
        <div class="flex flex-col gap-2 flex-grow w-full xl:w-[33%]">
          <label class="uppercase font-extrabold">cpf</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.cpf"
          />
        </div>
        <div class="flex flex-col gap-2 w-full xl:w-[50%]">
          <label class="uppercase font-extrabold">e-mail</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.email"
          />
        </div>
        <div class="w-full flex flex-row items-center py-8">
          <button
            class="mx-auto py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
            @click="register($event)"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
