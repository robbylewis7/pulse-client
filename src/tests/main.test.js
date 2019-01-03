import React from 'react'
import { shallow } from 'enzyme'
import Main from './../components/main'

describe('<Main />', () => {
    it('Renders without crashing', () => {
        shallow(<Main />);
    })
});

it('Hidden should be true', () => {
    const wrapper = shallow(<Main />);
    wrapper.simulate('click');
    expect(wrapper.state('hidden')).toEqual(false);
});

