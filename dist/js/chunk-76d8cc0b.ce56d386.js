(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['chunk-76d8cc0b', 'chunk-39591ecc'], { '1cf9': function (a, e, t) { 'use strict'; t.r(e); var i = function () { var a = this, e = a.$createElement, t = a._self._c || e; return t('div', { staticClass: 'setup-profile-tab dashboard-tab' }, [t('vuestic-wizard', { attrs: { steps: a.steps, 'wizard-layout': 'vertical', 'wizard-type': a.wizardType } }, [t('div', { staticClass: 'form-wizard-tab-content', attrs: { slot: 'page1' }, slot: 'page1' }, [t('h4', [a._v('Type your name')]), t('p', [a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]), t('div', { staticClass: 'form-group with-icon-right', class: { 'has-error': a.errors.has('name'), valid: a.isFormFieldValid('name') } }, [t('div', { staticClass: 'input-group' }, [t('input', { directives: [{ name: 'model', rawName: 'v-model', value: a.name, expression: 'name' }, { name: 'validate', rawName: 'v-validate', value: 'required', expression: "'required'" }], attrs: { type: 'text', name: 'name', required: 'required' }, domProps: { value: a.name }, on: { input: function (e) { e.target.composing || (a.name = e.target.value) } } }), t('i', { staticClass: 'fa fa-exclamation-triangle error-icon icon-right input-icon' }), t('i', { staticClass: 'fa fa-check valid-icon icon-right input-icon' }), t('label', { staticClass: 'control-label' }, [a._v('Name')]), t('i', { staticClass: 'bar' }), t('small', { directives: [{ name: 'show', rawName: 'v-show', value: a.errors.has('name'), expression: "errors.has('name')" }], staticClass: 'help text-danger' }, [a._v(a._s(a.errors.first('name')) + '\n          ')])])])]), t('div', { staticClass: 'form-wizard-tab-content', attrs: { slot: 'page2' }, slot: 'page2' }, [t('h4', [a._v('Select your country')]), t('p', [a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]), t('vuestic-simple-select', { ref: 'selectedCountrySelect', attrs: { label: 'Select country', name: 'country', required: !0, options: a.countriesList }, model: { value: a.selectedCountry, callback: function (e) { a.selectedCountry = e }, expression: 'selectedCountry' } })], 1), t('div', { staticClass: 'form-wizard-tab-content', attrs: { slot: 'page3' }, slot: 'page3' }, [t('h4', [a._v('Confirm selection')]), t('p', [a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])]), t('div', { staticClass: 'form-wizard-tab-content wizard-completed-tab', attrs: { slot: 'wizardCompleted' }, slot: 'wizardCompleted' }, [t('h4', [a._v('Wizard completed!')]), t('p', [a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])])])], 1) }, s = [], n = t('8436'), o = { name: 'setup-profile-tab', props: { wizardType: { default: 'rich' } }, data: function () { var a = this; return { steps: [{ label: 'Step 1. Name', slot: 'page1', onNext: function () { a.validateFormField('name') }, isValid: function () { return a.isFormFieldValid('name') } }, { label: 'Step 2. Country', slot: 'page2', onNext: function () { a.$refs.selectedCountrySelect.validate() }, isValid: function () { return a.$refs.selectedCountrySelect.isValid() } }, { label: 'Step 3. Confirm', slot: 'page3' }], selectedCountry: '', name: '', countriesList: n['a'] } }, methods: { isFormFieldValid: function (a) { var e = !1; return this.formFields[a] && (e = this.formFields[a].validated && this.formFields[a].valid), e }, validateFormField: function (a) { this.$validator.validate(a, this[a]) } } }, r = o, l = (t('b12d'), t('2877')), d = Object(l['a'])(r, i, s, !1, null, '2509e46b', null); d.options.__file = 'SetupProfileTab.vue'; e['default'] = d.exports }, '3f71': function (a, e, t) { 'use strict'; var i = t('4a00'), s = t.n(i); s.a }, '4a00': function (a, e, t) {}, '5f84': function (a, e, t) {}, 8436: function (a, e, t) { 'use strict'; e['a'] = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao, People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'] }, b12d: function (a, e, t) { 'use strict'; var i = t('5f84'), s = t.n(i); s.a }, f9c4: function (a, e, t) { 'use strict'; t.r(e); var i = function () { var a = this, e = a.$createElement, t = a._self._c || e; return t('div', { staticClass: 'extra' }, [t('vuestic-widget', { staticClass: 'no-v-padding', attrs: { headerText: a._f('translate')('extra.tabs.title') } }, [t('vuestic-tabs', { staticClass: 'tabs', attrs: { names: [a.$t('extra.tabs.maps'), a.$t('extra.tabs.setupProfile'), a.$t('extra.tabs.overview')] } }, [t('div', { staticClass: 'd-flex justify-content-center', attrs: { slot: a._f('translate')('extra.tabs.overview') }, slot: a._f('translate')('extra.tabs.overview') }, [t('overview-tab')], 1), t('div', { staticClass: 'maps-tab', attrs: { slot: a._f('translate')('extra.tabs.maps') }, slot: a._f('translate')('extra.tabs.maps') }, [t('leaflet-map')], 1), t('div', { staticClass: 'd-flex justify-content-center', attrs: { slot: a._f('translate')('extra.tabs.setupProfile') }, slot: a._f('translate')('extra.tabs.setupProfile') }, [t('setup-profile-tab', { attrs: { wizardType: 'simple' } })], 1)])], 1), t('div', { staticClass: 'row' }, [t('div', { staticClass: 'col-md-4 d-flex' }, [t('vuestic-widget', { staticClass: 'profile-card-widget', attrs: { headerText: a.$t('extra.profileCard') } }, [t('vuestic-profile-card', { attrs: { name: 'Veronique Lee', location: 'Malaga, Spain', photoSource: 'https://i.imgur.com/NLrdqsk.png', social: { twitter: 'twitter.com', facebook: 'facebook.com', instagram: 'instagram.com' } } })], 1)], 1), t('div', { staticClass: 'col-md-8 d-flex' }, [t('vuestic-widget', { staticClass: 'chat-widget', attrs: { headerText: a.$t('extra.chat') } }, [t('vuestic-chat', { model: { value: a.chatMessages, callback: function (e) { a.chatMessages = e }, expression: 'chatMessages' } })], 1)], 1)]), t('div', { staticClass: 'row bottom-widgets' }, [t('div', { staticClass: 'col-md-6 d-flex' }, [t('vuestic-widget', { staticClass: 'no-h-padding no-v-padding' }, [t('vuestic-feed', { attrs: { initialPosts: a.posts } })], 1)], 1), t('div', { staticClass: 'col-md-6 d-flex' }, [t('vuestic-widget', { staticClass: 'business-posts' }, [t('vuestic-social-news', { attrs: { news: a.news, url: 'https://instagram.com/smartapant' } })], 1)], 1)])], 1) }, s = [], n = t('5a4f'), o = t('1cf9'), r = t('3b37'), l = { name: 'extra', components: { LeafletMap: r['default'], SetupProfileTab: o['default'], OverviewTab: n['default'] }, data: function () { return { chatMessages: [{ text: 'Hello! So glad you liked my work. Do you want me to shoot you?', yours: !1 }, { text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?', yours: !0 }, { text: 'Sounds great! See you later!', yours: !1 }, { text: 'Should I bring a lightbox with me?', yours: !0 }, { text: 'No, thanks. There is no need. Can we set up a meeting earlier?', yours: !1 }, { text: "I'm working on Vuestic, so let's meet at 3pm. Thanks!", yours: !0 }], posts: [{ name: 'Irina Myatelskaya', text: 'joined the network', photoURL: 'https://i.imgur.com/VuTDC8u.png' }, { name: 'Andrei Hrabouski', text: 'has just started a live video', photoURL: 'https://i.imgur.com/W3mGrmW.png' }, { name: 'Evan You', text: 'joined the network', photoURL: 'https://i.imgur.com/D7DOGBH.jpg' }], news: [{ photoURL: 'https://i.imgur.com/PiTDDcA.png' }, { photoURL: 'https://i.imgur.com/M6GugaM.png' }, { photoURL: 'https://i.imgur.com/vEy3fRU.png' }, { photoURL: 'https://i.imgur.com/Xrywphx.png' }, { photoURL: 'https://i.imgur.com/dqVtQGY.png' }, { photoURL: 'https://i.imgur.com/qP7rTCy.png' }, { photoURL: 'https://i.imgur.com/6YLsM43.png' }, { photoURL: 'https://i.imgur.com/9PAOx55.png' }, { photoURL: 'https://i.imgur.com/mVpc04D.png' }, { photoURL: 'https://i.imgur.com/WdbTSLn.png' }, { photoURL: 'https://i.imgur.com/ZXRIHfk.png' }] } } }, d = l, u = (t('3f71'), t('2877')), c = Object(u['a'])(d, i, s, !1, null, '66cfd02e', null); c.options.__file = 'Extra.vue'; e['default'] = c.exports } }])
// # sourceMappingURL=chunk-76d8cc0b.ce56d386.js.map
