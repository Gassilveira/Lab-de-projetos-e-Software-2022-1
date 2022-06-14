<script src="./App.ts" lang="ts"></script>
<style src="./App.css"></style>

<template>
  <header>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </header>
  <main class="ml-[64px]">
    <RouterView />
  </main>
</template>
