import React from 'react'
import { shallow } from 'enzyme'
import BottomContent from './../components/bottom-content'

describe('<BottomContent />', () => {
    it('Renders without crashing', () => {
        shallow(<BottomContent />);
    })
});