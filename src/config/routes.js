export default ($stateProvider,$urlRouterProvider)=>{
    $urlRouterProvider.otherwise("/")    
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'main.html',
            controller: 'mainController'
        })
}