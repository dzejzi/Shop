import React from 'react'
import config from '../config.js'
import TableRows from './Libraries/TableRows.jsx'

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            toFind: ""
        }
    }

    componentDidMount() {
      fetch(config.apiUrl + '/products')
            .then(response => response.json())
            .then(responseJson => {
              //console.log(responseJson);
                this.setState({
                  products: responseJson.products
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    handleToFindChange = event =>{
      this.setState({
        toFind: event.target.value
      })
    }

    hanfleFormSubmit = event =>{
      event.preventDefault();
      this.search = true;
      fetch(config.apiUrl + "/product/find/" + this.state.toFind)
        .then(response => response.json())
        .then(responseJson =>{
          console.log(responseJson);
            this.setState({
              products: responseJson.products
            }, () =>{
              this.search = false;
              console.log(this.state.products);
            })
        })
    }

    render() {
        return <div className="row">
            <div className="col-md-12 col-sm-12">

              <form onSubmit={this.hanfleFormSubmit}>
                <div className="input-group">
                    <input type="text"
                            className="form-control"
                             placeholder="Search for..." onChange={this.handleToFindChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Go!</button>
                    </span>
                </div>
              </form>

                <table className="table table-bordered table-hovered">
                  <tbody>
                    {
                      this.search ? null : this.state.products.map(element=>{
                        return <TableRows
                          key={element.id}
                          id={element.id}
                          name={element.name}
                          price={element.price}
                          available={element.available}
                          photo={element.product_images[0].url}
                          description={element.description}
                       />
                     })
                    }
                  </tbody>
                </table>
            </div>

        </div>
    }
}

export default Products


class Dziecko extends React.Component{
  constructor(props){
    super(props);
      this.state={
        wiek: 13
      }
    }

    let time = setTimeout({
        wiek: this.state.wiek + 5
    }, 5000)
  }

  render(){
    return <li>{this.props.name} {this.props.nazwisko} {this.state.wiek}</li>
  }
}

class Rodzic extends React.Component{
  render(){
    return <div>
    <ul>
      <Dziecko imię="Jaś" nazwisko="Kowalski"/> <li>Jaś Kowalski 13/18</li>
      <Dziecko imię="Joanna" nazwisko="Zielona"/>
      <Dziecko imię="Anna" nazwisko="Krzak"/>
      <li> Natalia Jakaśtam 2</li>
    </ul>

    </div>
  }
}
