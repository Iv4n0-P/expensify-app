import { LoginPage } from '../../components/LoginPage'
import React from 'react'
import {shallow} from 'enzyme'

test ('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
 })

test('should call startLogin on button click', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('#startLogin').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})

test('should call startLoginFacebook on button click', () => {
    const startLoginFacebook = jest.fn()
    const wrapper = shallow(<LoginPage startLoginFacebook={startLoginFacebook} />)
    wrapper.find('#startLoginFacebook').simulate('click')
    expect(startLoginFacebook).toHaveBeenCalled()
})

test('should call startLoginTwitter on button click', () => {
    const startLoginTwitter = jest.fn()
    const wrapper = shallow(<LoginPage startLoginTwitter={startLoginTwitter} />)
    wrapper.find('#startLoginTwitter').simulate('click')
    expect(startLoginTwitter).toHaveBeenCalled()
})

test('should call startLoginGithub on button click', () => {
    const startLoginGithub = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGithub={startLoginGithub} />)
    wrapper.find('#startLoginGithub').simulate('click')
    expect(startLoginGithub).toHaveBeenCalled()
})