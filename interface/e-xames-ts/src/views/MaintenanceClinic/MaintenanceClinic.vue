<script src="./MaintenanceClinic.ts" lang="ts"></script>
<style src="./MaintenanceClinic.css"></style>

<template>
  <Loading v-if="loading"></Loading>
  <div class="manutenodecontasclnica-container" v-else>
    <div class="manutenodecontasclnica-container2">
      <h1 class="manutenodecontasclnica-text heading">
        <span>Manutenção de contas</span>
      </h1>
    </div>
    <div class="manutenodecontasclnica-container3">
      <h1 class="manutenodecontasclnica-text02">
        <span>Informações gerais</span>
      </h1>
      <form
        class="flex flex-col px-10 py-8 w-full gap-8 flex-wrap xl:w-[60%] xl:flex-row"
      >
        <div class="flex flex-col gap-2 w-full xl:w-[33%]">
          <label class="uppercase font-extrabold">Nome Fantasia</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.name"
            @change="registerChange('name')"
          />
        </div>
        <div class="flex flex-col gap-2 flex-grow w-full xl:w-[33%]">
          <label class="uppercase font-extrabold">cnpj</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.cnpj"
            @change="registerChange('cnpj')"
          />
        </div>
        <div class="w-full flex flex-row items-center py-8">
          <button
            class="mx-auto py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
            @click="saveClinic($event)"
          >
            Salvar
          </button>
        </div>
      </form>
      <h2 class="py-4">Usuários com permissão na clinica</h2>
      <div
        class="bg-white w-[80%] h-[100px] rounded-lg shadow-lg flex flex-row gap-2 flex-wrap p-2 xl:w-[60%] xl:flex-row"
      >
        <div
          class="py-2 px-4 rounded-lg shadow-lg h-fit"
          v-for="(user, index) in allowedUsers"
          :key="index"
        >
          <label>{{ user.user.name }}</label>
          <i
            class="fa-solid fa-ban text-red-600 ml-2 cursor-pointer"
            @click="deleteUser($event,user.user)"
          ></i>
        </div>
      </div>
      <h2 class="py-4">Adicionar usuários</h2>
      <form
        class="flex flex-col px-10 py-8 w-full gap-8 flex-wrap xl:w-[60%] xl:flex-row"
      >
        <div class="flex flex-col gap-2 w-full xl:w-[33%]">
          <label class="uppercase font-extrabold">cpf do usuário </label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="allowForm.cpf"
          />
        </div>
        <div class="w-full flex flex-row items-center py-8">
          <button
            class="mx-auto py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
            @click="allowUser($event)"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
