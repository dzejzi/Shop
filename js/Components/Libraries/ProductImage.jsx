import React from 'react'

class ProductImage extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return <img src={this.props.url}/>
  }
}

export default ProductImage
