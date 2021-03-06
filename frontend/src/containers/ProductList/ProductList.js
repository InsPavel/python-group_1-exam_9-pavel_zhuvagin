import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux';
import {loadProduct} from "../../store/actions/product-list";
import Card from "../../components/UI/Card/Card";


class ProductList extends  Component {
    componentDidMount(){
        this.props.loadProduct()
    }

    render() {
        return <Fragment>
            <div className='row mt-5'>
                {this.props.products.map(product => {
                    return <div className='col col-4' key={product.id}>
                        <Card product={product} key={product.id} id={product.id}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}


const mapStateToProps = (state) => state.productList;
const mapDispatchToProps = dispatch => ({
    loadProduct: () => dispatch(loadProduct())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);