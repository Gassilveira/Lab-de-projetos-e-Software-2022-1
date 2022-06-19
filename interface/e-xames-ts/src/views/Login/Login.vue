<script src="./Login.ts" lang="ts"></script>
<style src="./Login.css"></style>

<template>
    <Loading v-if="isLoading"></Loading>
    <div class="login_container" v-else>
        <div class="login_box">
            <img
            alt="image"
            src="../../assets/img/logo300h.png"
            class="login_image"
            />
            <div class="login_form">
                <input type="text" placeholder="E-mail" class="login_txt" v-model="email" />
                <input type="password" placeholder="Senha" class="login_txt" v-model="password"/>
                <button class="py-2 px-4 shadow-lg text-slate-200 rounded-md bg-teal-700" @click="login"> Entrar </button>
                
            </div>
        </div>
    </div>
</template>