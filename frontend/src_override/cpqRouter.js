
const handleMobileView = (componentName) => {
  return window.innerWidth < 768 ? `Mobile${componentName}` : componentName
}

export const cpqRoutes = [
    {
        alias: '/designs',
        path: '/designs/view/:viewType?',
        name: 'Designs',
        component: () => import('@/pages/Designs.vue'),
        meta: { scrollPos: { top: 0, left: 0 } },
    },
    {
      path: '/designs/:designId',
      name: 'Design',
      component: () => import(`@/pages/${handleMobileView('Design')}.vue`),
      props: true,
    },
    {
      alias: '/items',
      path: '/items/view/:viewType?',
      name: 'Items',
      component: () => import('@/pages/Items.vue'),
      meta: { scrollPos: { top: 0, left: 0 } },
  },
    {
      path: '/items/:itemId',
      name: 'Item',
      component: () => import(`@/pages/${handleMobileView('Item')}.vue`),
      props: true,
    },
]

// importing the icon
import TaskIcon from '@/components/Icons/TaskIcon.vue'

//cpq Menu 
export const cpqLinks = [
    {
        label: 'Designs',
        icon: TaskIcon,
        to: 'Designs',
    },
    {
      label: 'Items',
      icon: TaskIcon,
      to: 'Items',
  },
  
]

//custom function to add the icon
export function getCustomIcon(routeName) {
    switch (routeName) {
      case 'Designs':
        return TaskIcon
      case 'Items':
        return TaskIcon
      default:
        return null
    }
  }