import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';


//page
import ProductList from 'pages/product/index/index.jsx';
import CategoryList from 'pages/product/category/index.jsx';
import ProductSave from 'pages/product/index/save.jsx';
import ProductDetail from 'pages/product/index/detail.jsx';


class ProductRouter extends React.Component{
	render(){
		return (
				<Switch>
					<Route path="/product/index" component={ProductList}/>
					<Route path="/product/save/:pid?" component={ProductSave}/>
					<Route path="/product/detail/:pid" component={ProductDetail}/>
					<Route path="/product-category/index/:categoryId?" component={CategoryList}/>
					<Redirect exact from='/product' to="/product/index" />
					<Redirect exact from='/product-category' to="/product-category/index" />					
				</Switch>
		)
	}
}

export default ProductRouter;