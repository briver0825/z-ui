<template>
  <div class="w-1/3">
    <z-card headerHeight="400px" :headerBg="url">
      xxxxxxx衣服真漂亮
    </z-card>
  </div>
</template>

<script>
import {picture} from "./source-code"
export const code = picture
export default{
  setup(){
    return{
      url:'https://www.tailwindcss.cn/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg'
    }
  }
}
</script>
