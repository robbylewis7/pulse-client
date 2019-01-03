import React from 'react'
import { shallow } from 'enzyme'
import Landing from './../components/landingPage'

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
    })
});