import React from 'react'
import { shallow } from 'enzyme'
import LandingTop from './../components/landing-top'

describe('<LandingTop />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingTop />);
    })
});

