import React from 'react';
import Card from '../components/Card/Cards';
/* Contenedor que devolvera Lista de Cartas */
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=8bfa91f4";

class List extends React.Component {
    /**
     * Constructor que creará el estado del componente
     */
    constructor() {
        super();
        this.state = {
            data: []
        }
    };

    /**
     * función que llama de forma asincrona al json/api para obtener los datos
     */
    getData(res) {
        return res.json();
    };
    /**
     * metodo de react para cuando el componente se ha montado.
     * llamaremos a getData para obtener los datos y setear con ellos
     * el estado
     */
    async componentDidMount() {
        const res = await fetch(`${API}&s=batman`)
        const resJson = await this.getData(res);
        this.setState({ data: resJson.Search })
        console.log("Componente montado y llamada hecha: ", res);
    }
    /**
     * renderizamos el componente
     */
    render() {
        const { data } = this.state; //hacemos destructuring del estado
        return (
            <div className="row">
                {
                    data.map(value => { //mapeamos el estado y retornamos pasandole al componente Card el elemento que estamos recorriendo
                        return <Card movie={value} />
                    })
                }
            </div>
        )
    }
}

export default List;