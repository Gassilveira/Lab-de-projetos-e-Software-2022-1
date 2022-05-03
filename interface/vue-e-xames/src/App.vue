<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]">
      <RouterView />
    </div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          href: "",
          title: "Exames",
          icon: "fa fa-solid fa-folder",
          child: [
            {
              href: "/exames",
              title: "Visualizar Exames",
              icon: "fa fa-solid fa-file-waveform"
            },
            {
              href: "/exames/enviar",
              title: "Enviar exames",
              icon: "fa fa-solid fa-file-arrow-down"
            },
          ]
        },
        {
          href: "/manutencao/clinica",
          title: "Clinica",
          icon: "fa fa-solid fa-house-chimney-medical"
        },
        {
          href: "/manutencao/usuario",
          title: "Usuário",
          icon: "fa fa-solid fa-address-card"
        },
       
      ],
      collapsed: true
    };
  },
  methods: {
    onItemClick(e, i) {
      console.log("onItemClick");
    },
    onCollapse(c) {
      console.log("onCollapse");
      this.collapsed = c;
    }
  }
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar {
  flex-direction: column-reverse !important;
}
.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>
