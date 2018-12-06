import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import lazyLoading from './lazyLoading'
import Crud from '../components/research/crud/ResearchPageCrud.vue'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/addJournal',
      component: Crud
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSearch')
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSimple')
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundCustom')
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText')
        }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: lazyLoading('statistics/charts/Charts'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts'
              }
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: lazyLoading('statistics/progress-bars/ProgressBars'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars'
              }
            }
          ],
        }
      ]
    },
  ],
})
