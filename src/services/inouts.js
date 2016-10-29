import Rx from 'rxjs'

const old_lista = [
        {nombre: 'sampere', checked: false, page: 'sampereoptica'},
        {nombre: 'vilareal', checked: false, page: 'opticavilareal'}
    ]
    
export default ($firebaseArray,ezfb)=>{
    return {
        fetchLista: ()=>{
            var ref = new Firebase("https://fbooks.firebaseio.com/clientes")
            return $firebaseArray(ref)
        },
        //fbData$: fbData(id, ezfb),
        fbInfo$: fbInfo(lista)
    }
}

function fbData(id, ezfb){
            return Rx.Observable.fromPromise(
                    ezfb.getLoginStatus()
                    .then(()=>{
                        return ezfb.api(`/${id}/feed?limit=1`)})
                    .then((item)=>{
                        return ezfb.api(`/${item.data[0].id}?fields=picture,icon,name,message,caption,updated_time,description,from,link`)})
            )
        }
function fbInfo(lista){
    // recoge lista y procesa con la API de Facebook
    const fbItems$ = Rx.Observable.from(lista).do(x=>console.log(x))
        .map(item => Object.assign( {}, ref, {query: `/${item.$value}/feed?limit=1`}))
        .do(x=>console.log(x))
        .flatMap(item => {
            return  Rx.Observable.fromPromise( 
                            ezfb.getLoginStatus()
                            .then(()=>{return ezfb.api(item.query)})
                            .then((item)=> {return ezfb.api(`/${item.data[0].id}?fields=picture,icon,name,message,caption,updated_time,description,from,link`)})
                        )
                        // return Rx.Observable.fromPromise( ezfb.api(`/${post.data[0].id}`)).do(x=>console.log(x))
                        .withLatestFrom(Rx.Observable.from([item]),(res, it)=> Object.assign({}, res, it))
        })
    return fbItems$
}