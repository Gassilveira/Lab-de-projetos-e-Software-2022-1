<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]">
      <router-view/>
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
          header: true,
          title: "Getting Started"
        },
        {
          href: "/",
          title: "Installation",
          icon: "fa fa-download"
        },
        {
          href: "/basic-usage",
          title: "Basic Usage",
          icon: "fa fa-code"
        },
        {
          href: "/page",
          title: "Dropdown Page",
          icon: "fa fa-list-ul",
          child: [
            {
              href: "/page/sub-page-1",
              title: "Sub Page 01",
              icon: "fa fa-file-alt"
            },
            {
              href: "/page/sub-page-2",
              title: "Sub Page 02",
              icon: "fa fa-file-alt"
            }
          ]
        }
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

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>
