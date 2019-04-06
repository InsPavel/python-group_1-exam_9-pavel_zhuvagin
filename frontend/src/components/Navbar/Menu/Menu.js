import React, {Fragment, Component} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';



class Menu extends Component{
    state = {
        collapse: true
    };

    toogle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    };

    render() {
        const {username, user_id} = this.props.auth;
        return <Fragment>
            <button onClick={this.toogle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : '') +  " navbar-collapse"} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Каталог товаров</MenuItem>
                    <MenuItem to="/">Просмотр товара</MenuItem>
                </ul>
                <ul className='navbar-nav ml-auto'>
                    {user_id ? [
                        <li className="nav-item" key="username">
                            <span className="navbar-text mr-3">
                                <NavLink to={"/users/" + user_id}>
                                    Привет, {username}!
                                </NavLink>
                            </span>
                        </li>,
                        <MenuItem to="/" key="trash">Корзина</MenuItem>,
                        <MenuItem to="/" key="order">Просмотр заказов.</MenuItem>,
                        <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                    ] : [
                        <MenuItem to="/login" key='login'>Войти</MenuItem>,
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);