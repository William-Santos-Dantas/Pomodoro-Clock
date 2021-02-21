import Index from '@/pages/index'
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/',
                component: Index,
                name: 'Index',
                meta: {
                    title: 'Pomodoro - Clock'
                }
            },
        ]
    },

]

export default routes