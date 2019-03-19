import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginFacebook, startLoginTwitter } from '../actions/auth'

export const LoginPage = ({ startLogin, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button id='startLogin' className="button-blue button-google" onClick={startLogin}>Login with Google</button>
            <button id='startLoginFacebook' className="button-blue button-facebook" onClick={startLoginFacebook}>Login with Facebook</button>
            <button id='startLoginTwitter' className="button-blue button-twitter" onClick={startLoginTwitter}>Login with Twitter</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginTwitter: () => dispatch(startLoginTwitter())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)