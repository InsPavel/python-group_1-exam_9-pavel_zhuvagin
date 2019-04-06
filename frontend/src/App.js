import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import {tokenLogin} from "./store/actions/token-login";
import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import ProductList from "./containers/ProductList/ProductList";
import {connect} from "react-redux";
import ProductDetail from "./containers/ProductDetail/ProductDetail";

class App extends Component {
     componentDidMount(){
        this.props.tokenLogin();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                              <Route path='/products/:id' component={ProductDetail} />
                              <Route path='/login' component={Login} />
                              <Route path='/logout' component={Logout} />
                              <Route path='/' component={ProductList}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
