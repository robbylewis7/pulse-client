import React from 'react'
import { shallow } from 'enzyme'
import MiddleInfo from './../components/middle-info'

describe('<MiddleInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<MiddleInfo />);
    })
});