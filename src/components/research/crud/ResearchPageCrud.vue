<template>
    <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content" role="main">
        <div>

        </div>
        <research-form :form="form" @listen:event="post"></research-form>
    </main>
    <span slot="footer">©2018. Made by&nbsp;<a href="https://epicmax.co" target="_blank">Epicmax </a></span>
  </vuestic-layout>
</template>

<script>
import VuesticLayout from '../../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './../../admin/app-navbar/AppNavbar'
import AppSidebar from './../../admin/app-sidebar/AppSidebar'
import AppBreadcrumbs from './../../admin/app-breadcrumbs/AppBreadcrumbs'
import { mapGetters } from 'vuex'
import Layout from 'vuestic-theme/vuestic-directives/Layout'
import ResearchForm from './ResearchForm.vue'
import controllerCrud from './controllerCrud'
import controllerServices from '../../../client-http/services'

export default {
  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs,
    ResearchForm
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
      form: undefined
    }
  },
  created () {
    this.changeModel()
    /* controllerServices.getJournals()
    .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log(response)}) */
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
    post (req) {
      let model = this.$route.params.model
      if (model === 'journal') {
        controllerServices.getJournalsCount()
          .then(responseCount => responseCount.json())
          .catch(error => {
            console.error('Error:', error)
            alert("Error: "+error)
            })
          .then(responseCount => {
            req['id'] = responseCount['count'] + 1
            controllerServices.postJournal(req)
              .then(response => response.json())
              .catch(error => {
                console.error('Error:', error)
                alert("Error: "+error)
                })
              .then(response => {
                if(response["id"] !== undefined){
                  alert("Se inserto Correctamente")
                }else{
                  console.error('Error:', response.error)
                  alert("Error: "+response.error.message)
                }
                
              })
          })
      }
    },
    changeModel () {
      let model = this.$route.params.model
      let self = this
      if (model === 'journal') {
        controllerCrud.crudOfJournal(function (err, data) {
          if (!err) {
            self.form = data
          }
        })
      } else {
        self.form = undefined
      }
    }
  },
  watch: {
    '$route.params.model': function () {
      this.changeModel()
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style>

</style>
