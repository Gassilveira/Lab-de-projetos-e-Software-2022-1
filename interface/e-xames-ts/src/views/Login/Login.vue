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
                <button @click="useAuthProvider('google', Google)">auth Google</button>
            </div>
        </div>
    </div>
</template>