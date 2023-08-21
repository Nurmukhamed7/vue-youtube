import Button from '@/views/Button.vue'
import Index from '@/views/Index.vue'
import Typography from '@/views/Typography.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
		},
		{
			path: '/typography',
			name: 'Typography',
			component: Typography,
		},
		{
			path: '/button',
			name: 'Button',
			component: Button,
		},
	],
})

export default router
