(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39591ecc"],{"1cf9":function(a,e,n){"use strict";n.r(e);var i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"setup-profile-tab dashboard-tab"},[n("vuestic-wizard",{attrs:{steps:a.steps,"wizard-layout":"vertical","wizard-type":a.wizardType}},[n("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page1"},slot:"page1"},[n("h4",[a._v("Type your name")]),n("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),n("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("name"),valid:a.isFormFieldValid("name")}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"name",required:"required"},domProps:{value:a.name},on:{input:function(e){e.target.composing||(a.name=e.target.value)}}}),n("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),n("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),n("label",{staticClass:"control-label"},[a._v("Name")]),n("i",{staticClass:"bar"}),n("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[a._v(a._s(a.errors.first("name"))+"\n          ")])])])]),n("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page2"},slot:"page2"},[n("h4",[a._v("Select your country")]),n("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),n("vuestic-simple-select",{ref:"selectedCountrySelect",attrs:{label:"Select country",name:"country",required:!0,options:a.countriesList},model:{value:a.selectedCountry,callback:function(e){a.selectedCountry=e},expression:"selectedCountry"}})],1),n("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page3"},slot:"page3"},[n("h4",[a._v("Confirm selection")]),n("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])]),n("div",{staticClass:"form-wizard-tab-content wizard-completed-tab",attrs:{slot:"wizardCompleted"},slot:"wizardCompleted"},[n("h4",[a._v("Wizard completed!")]),n("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])])])],1)},t=[],r=n("8436"),o={name:"setup-profile-tab",props:{wizardType:{default:"rich"}},data:function(){var a=this;return{steps:[{label:"Step 1. Name",slot:"page1",onNext:function(){a.validateFormField("name")},isValid:function(){return a.isFormFieldValid("name")}},{label:"Step 2. Country",slot:"page2",onNext:function(){a.$refs.selectedCountrySelect.validate()},isValid:function(){return a.$refs.selectedCountrySelect.isValid()}},{label:"Step 3. Confirm",slot:"page3"}],selectedCountry:"",name:"",countriesList:r["a"]}},methods:{isFormFieldValid:function(a){var e=!1;return this.formFields[a]&&(e=this.formFields[a].validated&&this.formFields[a].valid),e},validateFormField:function(a){this.$validator.validate(a,this[a])}}},s=o,l=(n("b12d"),n("2877")),d=Object(l["a"])(s,i,t,!1,null,"2509e46b",null);d.options.__file="SetupProfileTab.vue";e["default"]=d.exports},"5f84":function(a,e,n){},8436:function(a,e,n){"use strict";e["a"]=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},b12d:function(a,e,n){"use strict";var i=n("5f84"),t=n.n(i);t.a}}]);
//# sourceMappingURL=chunk-39591ecc.49c740f3.js.map