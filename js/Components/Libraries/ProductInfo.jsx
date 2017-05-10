import React from 'react'

class ProductInfo extends React.Component {
  render(){
    return <div>
      <p>
          <h2>{this.props.name}</h2>
          <span>{this.props.price}</span>
      </p>
      <p>
        {this.props.description}
      </p>
    </div>
  }
}
