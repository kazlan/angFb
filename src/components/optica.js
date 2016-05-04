export default {
    bindings: {
        page: '<'
    },
    controller: function(inouts){
        inouts.fbData$(this.page.$value).subscribe(x=>this.fbData = x)
    },
    template: `
        <md-card disabled md-theme="{{ showDarkTheme ? 'dark-grey' : 'default' }}" md-theme-watch>
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">{{::$ctrl.fbData.from.name}}</span>
                    <span class="md-subhead">{{::$ctrl.fbData.message}}</span>
                </md-card-title-text>
                <md-card-title-media>
                    <div class="md-media-lg card-media">
                        <img ng-src="{{ ::$ctrl.fbData.picture}}" md-card-image>
                    </div>
                </md-card-title-media>
            </md-card-title>
            <md-card-actions layout="row" layout-align="start center">
                <md-card-actions>
                        <span am-time-ago="::$ctrl.fbData.updated_time"></span>
                </md-card-actions>
                <md-card-actions>
                    <md-button>Action 1</md-button>
                    <md-button>Action 2</md-button>
                </md-card-actions>
            </md-card-actions>
        </md-card>
        `
}