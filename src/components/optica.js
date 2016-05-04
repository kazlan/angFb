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
                    <span class="md-subhead">
                        {{::$ctrl.fbData.message | limitTo:110}}...
                        </br>
                        <p am-time-ago="::$ctrl.fbData.updated_time"></p>
                    </span>
                </md-card-title-text>
                <md-card-title-media>
                    <div class="md-media-lg card-media">
                        <img ng-src="{{ ::$ctrl.fbData.picture}}" md-card-image>
                    </div>
                </md-card-title-media>
            </md-card-title>
        </md-card>
        `
}