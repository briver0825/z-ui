const basic = {
    title:"基础组件",
    routes:[
        { 
            path: '/button', 
            meta:{
                title:{
                    en:"button",
                    zh:"按钮"
                },
            },
            component: ()=> import("../docs/button.md") 
        },
    ]
}

const other = {
    title:"其他组件",
    routes:[
        { 
            path: '/card', 
            meta:{
                title:{
                    en:"card",
                    zh:"卡片"
                },
            },
            component: ()=> import("../docs/card.md") 
        },
    ]
}

export const routes =  [
    ...basic.routes,
    ...other.routes
]

export const navMenus = [
    basic,
    other
]