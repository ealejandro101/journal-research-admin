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
                            <form v-on:submit.prevent="acton_event">
                                <div v-for="(item, index) in form.inputs" class="form-group d-flow-root" v-if="item.active" :key="index">
                                    <label :for="item.id" v-text="item.label" class="textAlignLeft d-block"></label>
                                    <div v-if="item.required && item.res.length == 0" style="color: red" class="isNecessary">Es necesario llenar este campo</div>
                                    <input v-if="item.type != 'radio' && item.type != 'checkbox' && item.type != 'select'" :type="item.type" class="form-control"
                                            :id="item.id" :placeholder="item.placeholder"
                                            v-model="item.res" :required="item.required" :value="item.value">
                                    <select v-else-if="item.type == 'select'" @change="selectOption(item)" :id="item.id" v-model="item.res" :required="item.required">
                                        <option v-for="(option, oindex) in item.options" :key="oindex"
                                            :value="option.value"
                                            v-text="option.text"></option>
                                    </select>
                                    <div v-else>
                                        <div v-for="(option, oindex) in item.options" :key="oindex" class="d-flex inputOption">
                                            <input :type="item.type" class="form-check-input"
                                                :name="option.name"
                                                :checked="option.checked"
                                                :value="option.value"
                                                :id="oindex"
                                                v-model="item.res" @change="selectOption(item)"> {{option.text}}
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" v-if="form.button_aux !== undefined && form.button_aux.active" class="btn btn-secondary" v-text="form.button_aux.textButton">
                                <input type="submit" v-if="form.button !== undefined && form.button.active" class="btn btn-secondary" v-text="form.button.textButton">
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
import controllerServices from '../../../client-http/services'

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
      auxIndex: []
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
      if (document.getElementsByClassName('isNecessary').length > 0) {
        alert('Te falta llenar algunos campos')
        return
      }
      let jsonResponse = this.getJsonResponse()
      this.$emit('listen:event', { id: this.form.title, data: jsonResponse, auxIndex: this.auxIndex })
    },
    selectOption (item) {
      if (item.id == 'indexacionesId') {
        this.form.inputs.splice(47, this.form.inputs.length - 47)// numero : el length inicial del array
        this.auxIndex = []
        for (const iterator of this.form.inputs[37].res) {
          this.form.inputs.push({
            label: this.form.inputs[37].options[iterator - 1].text,
            required: true,
            placeholder: 'Ingrese la URL de ' + this.form.inputs[37].options[iterator - 1].text,
            type: 'text',
            active: true,
            id: 'parametro' + this.form.inputs[37].options[iterator - 1].text,
            res: '',
            name: '',
            value: ''
          })
          this.auxIndex[this.form.inputs[37].options[iterator - 1].value] = 'parametro' + this.form.inputs[37].options[iterator - 1].text
        }
      }
      if (item.id == 'pais') {
        controllerServices.getModelsFilter(controllerServices.getEnum().estado, { 'where': { 'country_id': this.form.inputs[31].res } })
          .then(response => response.json())
          .catch(error => {
            console.error('Error:', error)
            alert('Error: ' + error)
          }).then(response => {
            this.form.inputs[32].options = []
            for (const iterator of response) {
              this.form.inputs[32].options.push({
                value: iterator.id,
                text: iterator.name
              })
            }
          })
      }
      if (item.id == 'estado') {
        controllerServices.getModelsFilter(controllerServices.getEnum().ciudad, { 'where': { 'state_id': this.form.inputs[32].res } })
          .then(response => response.json())
          .catch(error => {
            console.error('Error:', error)
            alert('Error: ' + error)
          }).then(response => {
            this.form.inputs[33].options = []
            for (const iterator of response) {
              this.form.inputs[33].options.push({
                value: iterator.id,
                text: iterator.name
              })
            }
          })
      }
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
