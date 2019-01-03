import React from 'react'
import { shallow } from 'enzyme'
import TopInfo from './../components/top-info'

describe('<TopInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<TopInfo />);
    })
});

it('Should have the login button', () => {
    const wrapper = shallow(<LandingTop />);
    expect(wrapper.find('loginButton').text()
    ).toEqual('Login')
});

it('Should have the signup button', () => {
    const wrapper = shallow(<LandingTop />);
    expect(wrapper.find('signupButton').text()
    ).toEqual('Sign up')
});