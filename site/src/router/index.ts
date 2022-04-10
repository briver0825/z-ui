import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

import NProgress from "nprogress"
import 'nprogress/nprogress.css'

NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

const router = createRouter({
    history: createWebHistory(),
    routes
})

NProgress.start()
router.beforeEach((to,from,next)=>{
    next()
})

router.afterEach(transition => {
	NProgress.done();
});

export default router