import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header_title" to="/dashboard" activeClassName="is-active" >
                    <h1>Expensify</h1>
                </Link>
                <button className="button button-blue--nobg" id="btn" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)