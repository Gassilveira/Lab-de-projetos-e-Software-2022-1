<template>
  <div class="login-container">
    <div class="login-container1 row">
      <img
        alt="image"
        src="../assets/logo3_29_2118-300h.png"
        class="login-image"
      />
      <div class="login-container2">
        <input type="text" placeholder="Login" class="login-txt-login input" />
        <input
          type="password"
          placeholder="Senha"
          class="login-txt-senha input"
        />
        <router-link class="login-button button" :to="{name: 'Exames'}"><span class="login-text">Login</span> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'E-xames Login',
    meta: [
      {
        property: 'og:title',
        content: 'Shadowy Hilarious Trout',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f3f9fe;
}
.login-container1 {
  width: 50%;
  height: 666px;
  align-items: flex-start;
  border-style: solid;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: center;
  background-color: #dceefb;
}
.login-image {
  width: 228px;
  height: 220px;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  object-fit: cover;
}
.login-container2 {
  flex: 0 0 auto;
  width: 357px;
  height: 268px;
  margin: auto;
  display: flex;
  box-shadow: -2px 2px 2px 0.5px rgba(166, 166, 166, 0.61);
  align-items: center;
  padding-top: 86px;
  border-color: #c5c5c5;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #c6d6e1;
}
.login-txt-login {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.login-txt-senha {
  margin-top: var(--dl-space-space-unit);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.login-button {
  text-decoration: none;
  margin-top: var(--dl-space-space-sixunits);
  background-color: #569ee8;
}
.login-text {
  color: #ffffff;
  font-style: normal;
  font-weight: 900;
}
@media(max-width: 479px) {
  .login-container1 {
    width: 100%;
  }
}
</style>
