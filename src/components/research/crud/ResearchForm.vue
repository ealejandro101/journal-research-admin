<template>
    <div class="container-fluid">
        <div class="row totalWidth justify-content-center">
            <div class="cardSectionForm col-12 col-sm-12 col-md-11 col-lg-11 col-xl-10">
                <div class="container cardLogin">
                    <div class="row">
                        <div class="col">
                            <h5 v-if="form.title !== undefined" v-text="form.title"></h5>
                            <br v-if="form.description !== undefined" />
                            <p v-if="form.description !== undefined" v-text="form.description" class="textAlignLeft"></p>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <form v-on:submit.prevent="">
                                <div v-for="(item, index) in form.inputs" class="form-group d-flow-root" v-if="item.active" :key="index">
                                    <label :for="item.id" v-text="item.label" class="textAlignLeft d-block"></label>
                                    <input v-if="item.type != 'radio' && item.type != 'checkbox'" :type="item.type" class="form-control"
                                            :id="item.id" :placeholder="item.placeholder"
                                            v-model="item.res" :required="item.required">
                                    <div v-else>
                                        <div v-for="(option, oindex) in item.options" :key="oindex" class="d-flex inputOption">
                                            <input :type="item.type" class="form-check-input"
                                                :name="option.name"
                                                :checked="option.checked"
                                                :value="option.value"
                                                :id="oindex"
                                                :required="item.required"
                                                v-model="item.res"> {{option.text}}
                                        </div>

                                    </div>
                                </div>
                                <button @click="acton_event_aux" v-if="form.button_aux !== undefined && form.button_aux.active" class="btn btn-secondary" v-text="form.button_aux.textButton"></button>
                                <button @click="acton_event" v-if="form.button !== undefined && form.button.active" class="btn btn-secondary" v-text="form.button.textButton"></button>
                            </form>
                            <hr />
                        </div>
                    </div>
                    <div class="row" v-if="form.links !== undefined">
                        <div class="col">
                            <div v-for="(item, index) in form.links" v-if="item.active" :key="index" class="d-flex">
                                <p v-text="item.description"></p>
                                <router-link :to="item.link"><p v-text="item.span"></p></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="form.note !== undefined">
                        <div class="col">
                            <p v-text="form.note" class="textAlignLeft"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ECSRespondent',
  props: {
    'form': {
      default () {
        return {
          title: 'Login',
          description: 'En el momento solo se tiene Journal/Revista',
          inputs: [
          ],
          button: {
            textButton: 'Ingresar',
            active: false
          },
          button_aux: {
            textButton: 'Ingresar',
            active: false
          },
          links: [{
            description: 'olvido contraseña, haz click',
            span: 'aqui',
            link: '/FormRespondent',
            active: false
          },
          {
            description: '',
            span: '',
            link: '',
            active: false
          }]
        }
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    getJsonResponse () {
      let jsonResponse = {}
      for (const iterator of this.form.inputs) {
        if (iterator.active) {
          jsonResponse[iterator.id] = iterator.res
        }
      }
      return jsonResponse
    },
    acton_event: function () {
      let jsonResponse = this.getJsonResponse()
      this.$emit('listen:event', { id: this.form.title, data: jsonResponse })
    }
  }
}
</script>

<style scoped>
.cardLogin{
    border: solid 1px #adadad;
    padding-top: 1em;
    padding-bottom: 1em;
}
.totalWidth{
    width: 100%;
}
.inputOption{
    padding-left: 1.5rem;
}
.cardSectionForm{
    margin-bottom: 1em;
}
</style>
