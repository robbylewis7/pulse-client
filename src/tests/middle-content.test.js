import React from 'react'
import { shallow } from 'enzyme'
import MiddleContent from './../components/middle-content'

describe('<MiddleContent />', () => {
    it('Renders without crashing', () => {
        shallow(<MiddleContent />);
    })
});