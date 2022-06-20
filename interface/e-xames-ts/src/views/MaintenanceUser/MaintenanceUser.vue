<script src="./MaintenanceUser.ts" lang="ts"></script>
<style src="./MaintenanceUser.css"></style>

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
        class="flex flex-col px-10 py-8 w-full gap-8 flex-wrap md:w-[60%] md:flex-row"
      >
        <div class="flex flex-col gap-2 w-full">
          <label class="uppercase font-extrabold">Nome Completo</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.name"
            @change="registerChange('name')"
          />
        </div>
        <div class="flex flex-col gap-2 flex-grow w-full md:w-[33%]">
          <label class="uppercase font-extrabold">cpf</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.cpf"
            @change="registerChange('cpf')"
          />
        </div>
        <div class="flex flex-col gap-2 flex-grow w-full md:w-[33%]">
          <label class="uppercase font-extrabold">Data de Nascimento</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="date"
            v-model="form.birthday"
            @change="registerChange('birthday')"
          />
        </div>
        <div class="flex flex-col gap-2 w-full md:w-[50%]">
          <label class="uppercase font-extrabold">e-mail</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="text"
            v-model="form.email"
            @change="registerChange('email')"
          />
        </div>
        <div class="w-full flex flex-row items-center py-8">
          <button
            class="mx-auto py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
            @click="saveUser($event)"
          >
            Salvar
          </button>
        </div>
        <div class="flex flex-col gap-2 w-full md:w-[33%]">
          <label class="uppercase font-extrabold">Nova Senha</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="password"
            v-model="form.password"
          />
        </div>
        <div class="flex flex-col gap-2 w-full md:w-[33%]">
          <label class="uppercase font-extrabold">Confirma Nova Senha</label>
          <input
            class="rounded-md py-1 px-4 border-blue-700"
            type="password"
            v-model="form.cPassword"
          />
        </div>
        <div class="w-full flex flex-row items-center py-8">
          <button
            class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700"
            @click="saveUserNewPassword($event)"
          >
            Salvar Nova Senha
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
