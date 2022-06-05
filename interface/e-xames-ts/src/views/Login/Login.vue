<script src="./Login.ts" lang="ts"></script>
<style src="./Login.css"></style>

<template>
    <div class="login_container">
        <div class="login_box">
            <img
            alt="image"
            src="../../assets/img/logo300h.png"
            class="login_image"
            />
            <div class="login_form">
                <input type="text" placeholder="Login" class="login_txt" />
                <input
                    type="password"
                    placeholder="Senha"
                    class="login_txt"
                />
                <button @click="AuthProvider('github')">auth Github</button>
<button @click="AuthProvider('facebook')">auth Facebook</button>
<button @click="AuthProvider('google')">auth Google</button>
<button @click="AuthProvider('twitter')">auth Twitter</button>
<button @click="AuthProvider('vkontakte')">auth Vkontakte</button>
                <router-link class="login-button button" :to="{path: '/exames'}"><span class="login-text">Login</span> </router-link>
            </div>
        </div>
    </div>
</template>