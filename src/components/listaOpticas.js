//Component:: Listado de Opticas
// Se encarga mantener y actualizar la lista de opticas de firebase
// pasa solo los nombres de las páginas a <optica> para renderizar cada una
//
export default {
    bindings: {
        opticas: "<"
    },
    template: `
        <md-list>
            <optica page="optica" ng-repeat="optica in $ctrl.opticas"></optica>
        </md-list>
       `
}