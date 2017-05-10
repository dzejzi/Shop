import React from 'react';
import { Link } from 'react-router'

class CartTableRows extends React.Component {
  render(){
    return <tr>
        <td>
            <img className="mini-photo" src={this.props.photo} alt="Zdjęcie" />
        </td>
        <td>
            <span className="name">
              {this.props.name}
            </span>
            <span className="price">
              {this.props.price} zł
            </span>
            <br/>
            <span className="quantity">
              amount: {this.props.quantity}
            </span>
            <br/>
            <span className="productSum">
              summary: {this.props.productSum} PLN
            </span>
            <button onClick={this.props.deleteButton} data-id={this.props.id}
              className="btn btn-info show-product-button">
              Delete
            </button>
        </td>
    </tr>
  }

}

export default CartTableRows
