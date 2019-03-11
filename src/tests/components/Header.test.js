//react-test-renderer
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'

//enzyme
import { shallow } from 'enzyme'
//import toJSON from 'enzyme-to-json'

//header component
import { Header } from '../../components/Header'



//react-test-renderer
/* test ('should render header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect (renderer.getRenderOutput()).toMatchSnapshot()
}) */

//enzyme test
test ('should render Header correctly', () => {
   const wrapper = shallow(<Header startLogout={() => {}}/>)
   //expect(wrapper.find('h1').text()).toBe('Expensify')
   expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})