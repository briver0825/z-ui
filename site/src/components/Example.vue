<template>
  <div class="container">
    <div class="code-box">
      <div class="title">
        <span>{{ title }}</span>
        <div class="showCode" @click="toggleCode">
          {{ codeIsShow ? "关闭代码" : "显示代码" }}
        </div>
      </div>
      <div class="comp">
        <component :is="comp"></component>
      </div>
      <pre class="code" v-show="codeIsShow" ref="codeRef" v-text="code"></pre>
    </div>
  </div>
</template>

<script>
import clipboard from "clipboard"
import { defineAsyncComponent, ref } from "vue"

export default {
  name: "Example",
  props: {
    demo: String,
    title: String,
  },
  setup({ demo, title }, context) {
    const demos = import.meta.glob("../demos/**/*.vue")
    let code = ref("")
    const comp = defineAsyncComponent(() => {
      return new Promise((res, rej) => {
        for (const path in demos) {
          demos[path]().then((mod) => {
            if (path.includes(demo)) {
              res(mod)
              code.value = mod.code.trim()
              rej()
            }
          })
        }
      })
    })

    const codeIsShow = ref(false)

    const toggleCode = () => {
      codeIsShow.value = !codeIsShow.value
    }

    return {
      demo,
      comp,
      title,
      code,
      codeIsShow,
      toggleCode,
    }
  },
}
</script>

<style lang="scss">
.container {
  @apply box-border my-12 bg-white shadow-lg;
  & .code-box {
    @apply border rounded p-4;
    border-color: rgb(239, 239, 245);
    & .title {
      @apply mb-4 relative;
      & span {
        @apply text-xl;
      }
      & .showCode {
        @apply absolute top-0 right-2 text-sm text-gray-500 hover:text-red-400 cursor-pointer;
      }
    }
    & .comp {
      & > div > * {
        @apply ml-4;
      }
      & > div > *:first-child {
        @apply ml-0;
      }
    }
    & .code {
      @apply overflow-hidden;
      width: 900px;
  overflow-x:auto;
    }
  }
}
</style>
