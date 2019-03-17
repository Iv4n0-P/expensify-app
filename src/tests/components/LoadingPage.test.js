import LoadingPage from '../../components/LoadingPage'
import React from 'react'
import { shallow } from 'enzyme'

test ('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
 })