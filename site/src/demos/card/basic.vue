<template>
  <div class="w-1/2">
    <z-card title="卡片名称">
      <ul style="line-height: 2.25rem;" v-for="item in 5" :key="item">
        <li>列表内容 {{item}}</li>
      </ul>
    </z-card>
  </div>
</template>

<script>
import {basic} from "./source-code"
export const code = basic
</script>
