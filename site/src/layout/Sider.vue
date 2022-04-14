<template>
    <div class="shadow-sm fixed top-0 bottom-0 px-4 bg-white overflow-auto pt-24 w-60">
        <div v-for="item in navMenus" :key="item" class="py-2">
            <div class="text-gray-500 text-sm py-2">{{item.title}}</div>
            <div v-for="i in item.routes" :key="i" class="py-1 text-gray-600">
                <router-link :to="i.path">{{i.meta.title.en + i.meta.title.zh}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { navMenus } from '../router/demos'

export default {
    data(){
        return{
            navMenus
        }
    }
}
</script>
