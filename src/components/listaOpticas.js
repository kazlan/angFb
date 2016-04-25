//Component:: Listado de Opticas
//
export default {
    bindings: {
        store: '<'
    },
    controller: ($scope, $element, $attrs, inouts)=>{
        $scope.lista = [];
        //$scope.listado = inouts.listado()
        //const lista = inouts.opticas$.subscribe(item=>$scope.lista=item)
        const fbInfo$ = inouts.fbInfo$.subscribe(
            x => $scope.lista.push(x),
            error=>console.log(error)
            )
        
    },
    template: `
        <md-list>
            <md-card disabled md-theme="{{ showDarkTheme ? 'dark-grey' : 'default' }}" md-theme-watch ng-repeat='item in lista'>
                <md-card-title>
                    <md-card-title-text>
                        <span class="md-headline">{{item.from.name}}</span>
                        <span class="md-subhead">{{item.message}}</span>
                    </md-card-title-text>
                    <md-card-title-media>
                        <div class="md-media-lg card-media">
                            <img ng-src="{{item.picture}}" md-card-image>
                        </div>
                    </md-card-title-media>
                </md-card-title>
                <md-card-actions layout="row" layout-align="start center">
                    <md-card-actions>
                         <span am-time-ago="item.updated_time"></span>
                    </md-card-actions>
                    <md-card-actions>
                        <md-button>Action 1</md-button>
                        <md-button>Action 2</md-button>
                    </md-card-actions>
                </md-card-actions>
            </md-card>
        </md-list>`
}