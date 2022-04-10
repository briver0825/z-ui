<template>
  <div class="app min-h-screen">
    <z-layout>
      <z-layout-header>
        <Header></Header>
      </z-layout-header>
      <z-layout-container>
        <z-layout-sider>
          <Sider></Sider>
        </z-layout-sider>
        <z-layout-content>
          <Main></Main>
        </z-layout-content>
      </z-layout-container>
    </z-layout>
  </div>
</template>

<script setup>
import Main from "./layout/Main.vue"
import Sider from "./layout/Sider.vue";
import Header from "./layout/Header.vue";
</script>
