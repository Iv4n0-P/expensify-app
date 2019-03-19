import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ( { 
    isAuthenticated, //je sa mapStateToProps
    component: Component, //ovo je komponenta iz appRouter koja je zadana za neku rutu, npr: component={ExpenseDashboardPage}
    ...rest//ovo ...rest (može se i drugacije zvat, npr: ...props) je kreira varijablu rest u kojoj je sve što se nije dekonstruiralo
} ) => (
    <div>
        <Route {...rest} component={(props)=>(
            isAuthenticated ? (
                <div>
                <Header />
                <Component {...props}/> </div>
            ) : (
                //ako nije autenticiran ćemo ga redirektirat, koristeći react-redux-dom komponentu <Redirect /> koju moramo gore importirat kraj Route-a
            <Redirect to="/"/>
                )
                //znači ovo će generirat komponentu ako smo logirani ili će nas redirectat ako nismo
        )} />
    </div>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //znači napravit ćemo jedan boolean property, ako postoji u store-u auth state sa uid propertijem onda je true
//problem je što ako ostavimo bez double flipa (!!) ćemo dobit undefined ako nema uid propertija u auth state-u ili ako postoji uid koji je string
//zato cemo napravit double flip jer će dat false lipo a ne undefined, ako je true onda super ako nije ide sljedeći uskličnik/flip koji će dat uredni false a ne undefined
})

export default connect (mapStateToProps)(PrivateRoute)