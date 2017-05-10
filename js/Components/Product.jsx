import React from 'react'
import config from '../config.js'
import ProductImage from './Libraries/ProductImage.jsx'
import ProductImages from './Libraries/ProductImages.jsx'

class Product extends React.Component {
  constructor(props){
    super(props);
    this.state={
      product: {},
      id: this.props.params.id
    }
  }

  componentWillMount() {
    fetch(config.apiUrl + "/product/" + this.state.id)
      .then(response => response.json())
      .then(responseJson => {
          //console.log(responseJson);
          this.setState({
            product: responseJson.product
          })
      })
  }

  componentDidMount() {
  this.hasData = false;
      if(this.state.product !== {}){
        this.hasData = true;
      }
  }

  render(){
    return <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
          <div className="col-md-6 col-sm-12">
            {
              this.hasData ? <ProductImage url={this.state.product.product_images[0].url} /> : null
            }
            {
              this.hasData ? <ProductImages images={this.state.product.product_images} /> : null
            }
          </div>
          <div className="col-md-6 col-sm-12">
          </div>
      </div>

    </div>
  }
}

export default Product
