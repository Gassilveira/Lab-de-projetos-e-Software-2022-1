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
                <router-link class="login-button button" :to="{name: 'Login'}"><span class="login-text">Login</span> </router-link>
            </div>
        </div>
    </div>
</template>