import Rx from 'rxjs'

const lista = [
        {nombre: 'chantal', checked: false,page: 'opticachantal'},
        {nombre: 'sampere', checked: false, page: 'sampereoptica'},
        {nombre: 'vilareal', checked: false, page: 'opticavilareal'}
    ]
    
export default ($firebaseObject,ezfb)=>{
    return {
        opticas$: streamed(),
        listado: ()=>{
            var ref = new Firebase("https://optik.firebaseio.com/clientes")
            return $firebaseObject(ref)
        },
        fbInfo$: fbInfo(ezfb)
    }
}
function fbInfo(ezfb){
    const fbItems$ = Rx.Observable.from(lista)
        .map(item => Object.assign( {}, item, {query: `/${item.page}/feed?limit=1`}))
        .do(x=>console.log(x))
        .flatMap(item => {
            return  Rx.Observable.fromPromise( 
                            ezfb.getLoginStatus()
                            .then(()=>{return ezfb.api(item.query)})
                            .then((item)=> {return ezfb.api(`/${item.data[0].id}?fields=picture,icon,name,message,caption,updated_time,description,from,link`)})
                        )
                        // return Rx.Observable.fromPromise( ezfb.api(`/${post.data[0].id}`)).do(x=>console.log(x))
                        .withLatestFrom(Rx.Observable.from([item]),(res, it)=> Object.assign({}, res, it))
        }).do(x=>console.log(x))
        
    return fbItems$
}

function streamed(){
    const opticas$ = Rx.Observable.from(lista).bufferTime(1000)
        .scan((acc,item)=>{
            return acc.concat(item)
        },[])
    return opticas$
}