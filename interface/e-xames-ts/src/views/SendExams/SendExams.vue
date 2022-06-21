<script src="./SendExams.ts" lang="ts"></script>
<style src="./SendExams.css"></style>

<template>
  <Loading v-if="loading"></Loading>
  <div class="uploadexames-container01 w-full h-[100vh] items-center" v-else>
    <div class="uploadexames-container03">
      <h1 class="uploadexames-text heading">ENVIO DE EXAMES</h1>
    </div>
    <form
      class="flex flex-col px-10 py-8 w-full gap-8 flex-wrap xl:w-[60%] xl:flex-row"
    >
      <div class="flex flex-col gap-2 w-[80%] xl:w-[33%]">
        <label class="uppercase font-extrabold">cpf do paciente</label>
        <input
          class="rounded-md py-1 px-4 border-blue-700"
          type="text"
          v-model="form.patientCPF"
        />
      </div>
      <div class="flex flex-col gap-2 w-[80%] xl:w-[33%]">
        <label class="uppercase font-extrabold">Data/hora exame</label>
        <input
          class="rounded-md py-1 px-4 border-blue-700"
          type="datetime-local"
          v-model="form.date"
        />
      </div>
      <div class="flex flex-col gap-2 w-[80%] xl:w-[33%]">
        <label class="uppercase font-extrabold">especialidade</label>
        <input
          class="rounded-md py-1 px-4 border-blue-700"
          type="text"
          v-model="form.specialty"
        />
      </div>
      <div class="flex flex-col gap-2 w-[80%] xl:w-[33%]">
        <label class="uppercase font-extrabold">Arquivo</label>
        <input
          class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-4"
          type="file"
          @change="saveFile($event)"
        />
      </div>
      <div class="flex flex-col gap-2 w-[80%] xl:w-[70%]">
        <label class="uppercase font-extrabold">descrição do exame</label>
        <textarea
          class="rounded-md py-1 px-4 border-blue-700"
          rows="4"
          type="textarea"
          v-model="form.desc"
        ></textarea>
      </div>
      <div class="w-full flex flex-row items-center py-8">
        <button
          class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
          @click="sendExam($event)"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>
