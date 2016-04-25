import 'angular-material/angular-material.css'
import './app.css'
import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngMaterial from 'angular-material'
import uirouter from 'angular-ui-router'

require('firebase')
require('angularfire')
require('angular-easyfb')
require('moment')
require('angular-moment/angular-moment')

import routes from './config/routes'
import fbInits from './config/fbInits'
import lista from './components/listaOpticas'
import inouts from './services/inouts'

angular.module('fbApp',[ngAnimate, ngMaterial, uirouter,'angularMoment','firebase','ezfb'])
    .config(routes)
    .config(fbInits)
    .service('inouts',inouts)
    .component('lista', lista)
