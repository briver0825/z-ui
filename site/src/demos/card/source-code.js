export const basic = 
`
<z-card title="卡片名称">
    <ul style="line-height: 2.25rem;" v-for="item in 5" :key="item">
        <li>列表内容 {{item}}</li>
    </ul>
</z-card>
`

export const plain = 
`
<z-card>简约用法</z-card>
`

export const picture = 
`
<template>
  <div class="w-1/3">
    <z-card headerHeight="400px" :headerBg="url">
      xxxxxxx衣服真漂亮
    </z-card>
  </div>
</template>

<script>
export default{
  setup(){
    return{
      url:'https://www.tailwindcss.cn/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg'
    }
  }
}
</script>

`