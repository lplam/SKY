import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class KeyListItems extends Component {

    onDelete  = (id) =>{
        if(confirm('Do you want delete this product?')){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {

        var {product,index} = this.props;
        var statusName = "active"
        var statusClass = product.status? 'default' : 'warning'
        return (
       
                <tr>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.date_init}</td>
                    <td>{product.date_end}</td>
                    <td>
                        <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                        <button type="button" onClick = {() => this.onDelete(product.id)} className="btn btn-danger mr-10">DELL </button>
                        <Link to ={`/product/${product.id}/edit`} className="btn btn-success">EDIT</Link>
                    </td>
                </tr>
            

        );
    }
}
export default KeyListItems;