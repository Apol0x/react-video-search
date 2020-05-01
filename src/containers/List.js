/* eslint-disable */
import React, {Fragment} from 'react';
import Card from '../components/Card/Cards';
import CircularProgress from '@material-ui/core/CircularProgress';
import CONSTANTS from '../constants/index';
/* Contenedor que devolvera Lista de Cartas */
// TODO: probar hooks
// TODO: añadir Redux

class List extends React.Component {
   /**
    * Constructor que creará el estado del componente
    */
   constructor() {
      super();
      this.state = { //estados iniciales
         data: [],
         searchTerm: '',
         error: '',
         loading: true,
      }
   }

   /**
    * función que llama de forma asincrona al json/api para obtener los datos
    */
   async getData() {
      const {searchTerm}=this.state;
      const res = await fetch(`${CONSTANTS.API_URL}&s=${searchTerm != '' ? searchTerm : 'batman' }`)
      const resJson = await res.json(res);
      return resJson;
   }
   /**
    * metodo de react para cuando el componente se ha montado.
    * llamaremos a getData para obtener los datos y setear con ellos
    * el estado
    */
   async componentDidMount() {
      const resJson = await this.getData();
      this.setState({ data: resJson.Search, loading: false })
      console.log("Componente montado y llamada hecha: ", resJson);
   }
   // TODO: añadir shouldComponentUpdate
   /**
    * Capturador del evento submit para realizar la consulta asincrona
    * @param {texto submiteado para hacer la busqueda} event 
    */
   async handleSubmit(event){
      event.preventDefault();
      const {searchTerm} = this.state;
      if(!searchTerm || searchTerm == ''){
         return this.setState({error: 'Please enter a valid text'});
      }
      const response = await this.getData();
      if(!response.Search){
         return this.setState({error: 'No match found'})
      }else{
         this.setState({data: response.Search, error: '', searchTerm: ''});
      }
      
   }
   /**
    * Capturador de evento al escribir
    * @param {texto introducido en el input} text 
    */
   handleSearchInput(text){
      this.setState({searchTerm: text.target.value});
      console.log(this.state.searchTerm);
   }
   
   /**
    * renderizamos el componente
    */
   render() {
      const { data, error, loading } = this.state; //hacemos destructuring del estado
      return (
         <Fragment>
            <header className="navbar-dark navbar bg-dark border-bottom border-white">
               <a href="/" className="navbar-brand">
                  MOVIE SEARCH
               </a>
            </header>
            {
               // TODO: create input Component
            }
            <div className="row">
               <div className="col-md-4 offset-md4 p-4">
                  <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                     <input type="text"
                         name="serach"
                         id="input-search"
                         className="form-control"
                         placeholder="Search"
                        autoFocus
                        onChange={e => this.handleSearchInput(e)}
                     />
                  </form>
                  {
                     error ? <p className="text-white">{error}</p>: null
                  }
               </div>
            </div>
            {loading ? <CircularProgress/> :
            <div className="row">
               {
                  data.map((value, index) => { //mapeamos el estado y retornamos pasandole al componente Card el elemento que estamos recorriendo
                     return <Card movie={value} key={index} />
                  })
               }
            </div>}
         </Fragment>
      )
   }
}

export default List;