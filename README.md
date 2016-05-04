# angFB
Notas
04/05
Acabo de probar el hacer a cada componente responsable de sus datos,
pero me encuentro que el ng-repeat de la lista no tiene ni puñetera idea de 
como debe ordenarse porque no dispone de los datos de fb, sólo tiene los de 
firebase.

Parece que un enfoque a lo redux, con un state gordo creado arriba del todo y 
del que cada uno coge lo que necesita debe ser el más adecuado.

otra opción, y la que voy a probar ahora es a guardar los últimos datos de fb
en el propio firebase, de manera que nos genere un initial state y después haga
los refreshes cuando toque.
