(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d45a028","chunk-39f9076f","chunk-54ed73c0","chunk-3b0df76b","chunk-51971961"],{1912:function(a,t,e){},"195d":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row bottom-widgets"},[e("div",{staticClass:"col-md-6 d-flex"},[e("vuestic-widget",{staticClass:"no-h-padding no-v-padding"},[e("vuestic-feed",{attrs:{initialPosts:a.posts}})],1)],1),e("div",{staticClass:"col-md-6 d-flex"},[e("vuestic-widget",{staticClass:"business-posts"},[e("vuestic-social-news",{staticClass:"vuestic-social-news",attrs:{news:a.news,url:"http://instagram.com/smartapant"}})],1)],1)])},i=[],n={name:"dashboard-bottom-widgets",data:function(){return{posts:[{name:"Irina Myatelskaya",text:"joined the network",photoURL:"https://i.imgur.com/VuTDC8u.png"},{name:"Andrei Hrabouski",text:"has just started a live video",photoURL:"https://i.imgur.com/W3mGrmW.png"},{name:"Evan You",text:"joined the network",photoURL:"https://i.imgur.com/D7DOGBH.jpg"}],news:[{photoURL:"https://i.imgur.com/PiTDDcA.png"},{photoURL:"https://i.imgur.com/M6GugaM.png"},{photoURL:"https://i.imgur.com/vEy3fRU.png"},{photoURL:"https://i.imgur.com/Xrywphx.png"},{photoURL:"https://i.imgur.com/dqVtQGY.png"},{photoURL:"https://i.imgur.com/qP7rTCy.png"},{photoURL:"https://i.imgur.com/6YLsM43.png"},{photoURL:"https://i.imgur.com/9PAOx55.png"},{photoURL:"https://i.imgur.com/mVpc04D.png"},{photoURL:"https://i.imgur.com/WdbTSLn.png"},{photoURL:"https://i.imgur.com/ZXRIHfk.png"}]}}},o=n,r=(e("1b03"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"82981286",null);l.options.__file="DashboardBottomWidgets.vue";t["default"]=l.exports},"1b03":function(a,t,e){"use strict";var s=e("8a0c"),i=e.n(s);i.a},"1cf9":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"setup-profile-tab dashboard-tab"},[e("vuestic-wizard",{attrs:{steps:a.steps,"wizard-layout":"vertical","wizard-type":a.wizardType}},[e("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page1"},slot:"page1"},[e("h4",[a._v("Type your name")]),e("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),e("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("name"),valid:a.isFormFieldValid("name")}},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"name",required:"required"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}}),e("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),e("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),e("label",{staticClass:"control-label"},[a._v("Name")]),e("i",{staticClass:"bar"}),e("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[a._v(a._s(a.errors.first("name"))+"\n          ")])])])]),e("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page2"},slot:"page2"},[e("h4",[a._v("Select your country")]),e("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),e("vuestic-simple-select",{ref:"selectedCountrySelect",attrs:{label:"Select country",name:"country",required:!0,options:a.countriesList},model:{value:a.selectedCountry,callback:function(t){a.selectedCountry=t},expression:"selectedCountry"}})],1),e("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page3"},slot:"page3"},[e("h4",[a._v("Confirm selection")]),e("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])]),e("div",{staticClass:"form-wizard-tab-content wizard-completed-tab",attrs:{slot:"wizardCompleted"},slot:"wizardCompleted"},[e("h4",[a._v("Wizard completed!")]),e("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])])])],1)},i=[],n=e("8436"),o={name:"setup-profile-tab",props:{wizardType:{default:"rich"}},data:function(){var a=this;return{steps:[{label:"Step 1. Name",slot:"page1",onNext:function(){a.validateFormField("name")},isValid:function(){return a.isFormFieldValid("name")}},{label:"Step 2. Country",slot:"page2",onNext:function(){a.$refs.selectedCountrySelect.validate()},isValid:function(){return a.$refs.selectedCountrySelect.isValid()}},{label:"Step 3. Confirm",slot:"page3"}],selectedCountry:"",name:"",countriesList:n["a"]}},methods:{isFormFieldValid:function(a){var t=!1;return this.formFields[a]&&(t=this.formFields[a].validated&&this.formFields[a].valid),t},validateFormField:function(a){this.$validator.validate(a,this[a])}}},r=o,l=(e("b12d"),e("2877")),d=Object(l["a"])(r,s,i,!1,null,"2509e46b",null);d.options.__file="SetupProfileTab.vue";t["default"]=d.exports},3584:function(a,t,e){},"4a51":function(a,t,e){},"5f84":function(a,t,e){},"806e":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"users-members-tab dashboard-tab"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 d-flex justify-content-center align-items-center"},[e("vuestic-profile-card",{attrs:{name:"Veronique Lee",location:"Malaga, Spain",photoSource:"https://i.imgur.com/NLrdqsk.png",social:{twitter:"twitter.com",facebook:"facebook.com",instagram:"instagram.com"}}})],1),e("div",{staticClass:"col-md-9 d-flex"},[e("vuestic-chat",{model:{value:a.chatMessages,callback:function(t){a.chatMessages=t},expression:"chatMessages"}})],1)])])},i=[],n={name:"users-members-tab",data:function(){return{chatMessages:[{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]}}},o=n,r=(e("c236"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"40b6116c",null);l.options.__file="UsersMembersTab.vue";t["default"]=l.exports},8436:function(a,t,e){"use strict";t["a"]=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},"8a0c":function(a,t,e){},a69d:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dashboard"},[e("dashboard-info-widgets"),e("vuestic-widget",{staticClass:"no-padding no-v-padding"},[e("vuestic-tabs",{ref:"tabs",attrs:{names:[a.$t("dashboard.dataVisualization"),a.$t("dashboard.usersAndMembers"),a.$t("dashboard.setupProfile"),a.$t("dashboard.features")]}},[e("div",{attrs:{slot:a.$t("dashboard.dataVisualization")},slot:a.$t("dashboard.dataVisualization")},[e("data-visualisation-tab")],1),e("div",{attrs:{slot:a.$t("dashboard.usersAndMembers")},slot:a.$t("dashboard.usersAndMembers")},[e("users-members-tab")],1),e("div",{attrs:{slot:a.$t("dashboard.setupProfile")},slot:a.$t("dashboard.setupProfile")},[e("setup-profile-tab")],1),e("div",{attrs:{slot:a.$t("dashboard.features")},slot:a.$t("dashboard.features")},[e("features-tab")],1)])],1),e("dashboard-bottom-widgets")],1)},i=[],n=(e("cadf"),e("551c"),e("097d"),e("f9cd")),o=e("806e"),r=e("1cf9"),l=e("5a4f"),d=e("607c"),c=e("195d"),u={name:"dashboard",components:{DataVisualisationTab:d["default"],DashboardInfoWidgets:n["default"],UsersMembersTab:o["default"],SetupProfileTab:r["default"],FeaturesTab:l["default"],DashboardBottomWidgets:c["default"]},methods:{launchEpicmaxToast:function(){this.showToast("Let's work together!",{icon:"fa-star-o",position:"top-right",duration:1/0,action:{text:"Hire us",href:"http://epicmax.co/#/contact",class:"vuestic-toasted-link"}})}}},m=u,h=(e("bef19"),e("2877")),p=Object(h["a"])(m,s,i,!1,null,"6c3e4df0",null);p.options.__file="Dashboard.vue";t["default"]=p.exports},b12d:function(a,t,e){"use strict";var s=e("5f84"),i=e.n(s);i.a},bef19:function(a,t,e){"use strict";var s=e("3584"),i=e.n(s);i.a},c236:function(a,t,e){"use strict";var s=e("1912"),i=e.n(s);i.a},dca0:function(a,t,e){"use strict";var s=e("4a51"),i=e.n(s);i.a},f9cd:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row dashboard-info-widgets"},[e("div",{staticClass:"col-md-6 col-xl-3"},[e("vuestic-widget",{staticClass:"info-widget"},[e("div",{staticClass:"info-widget-inner"},[e("div",{staticClass:"stats"},[e("div",{staticClass:"stats-number"},[e("i",{staticClass:"ion ion-md-arrow-up text-primary stats-icon"}),a._v("\n            59\n          ")]),e("div",{staticClass:"stats-title"},[a._v(a._s(a._f("translate")("dashboard.elements")))])])])])],1),e("div",{staticClass:"col-md-6 col-xl-3"},[e("vuestic-widget",{staticClass:"info-widget"},[e("div",{staticClass:"info-widget-inner"},[e("div",{staticClass:"stats"},[e("div",{staticClass:"stats-number"},[e("i",{staticClass:"ion ion-md-arrow-down text-danger stats-icon"}),a._v("\n            12\n          ")]),e("div",{staticClass:"stats-title"},[a._v(a._s(a._f("translate")("dashboard.versions")))])])])])],1),e("div",{staticClass:"col-md-6 col-xl-3"},[e("vuestic-widget",{staticClass:"info-widget brand-danger"},[e("div",{staticClass:"info-widget-inner"},[e("div",{staticClass:"info-widget-inner has-chart"},[e("div",{staticClass:"stats"},[e("div",{staticClass:"stats-number"},[a._v("\n              425\n            ")]),e("div",{staticClass:"stats-title"},[a._v("Commits")])]),e("div",{staticClass:"chart-container"},[e("vuestic-progress-bar",{attrs:{type:"circle",value:70,theme:"White",backgroundTheme:"Danger"}})],1)])])])],1),e("div",{staticClass:"col-md-6 col-xl-3"},[e("vuestic-widget",{staticClass:"info-widget brand-info"},[e("div",{staticClass:"info-widget-inner"},[e("div",{staticClass:"stats"},[e("div",{staticClass:"stats-number"},[e("i",{staticClass:"ion ion-md-people stats-icon icon-wide"}),a._v("\n            5\n          ")]),e("div",{staticClass:"stats-title"},[a._v(a._s(a._f("translate")("dashboard.teamMembers")))])])])])],1)])},i=[],n={name:"dashboard-info-widgets"},o=n,r=(e("dca0"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"7fc1a5d2",null);l.options.__file="DashboardInfoWidgets.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1d45a028.7ecd6c49.js.map