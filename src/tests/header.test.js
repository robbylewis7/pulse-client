import React from 'react'
import { shallow } from 'enzyme'
import Header from './../components/header'

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    })
});


it('Should have the logout button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('button').text()
    ).toEqual('Logout')
});