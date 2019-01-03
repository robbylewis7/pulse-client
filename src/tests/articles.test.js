import React from 'react'
import { shallow } from 'enzyme'
import Articles from './../components/articles'

describe('<Articles />', () => {
    it('Renders without crashing', () => {
        shallow(<Articles />);
    })
});

// describe('rendering', () => {
//     let wrapper, showUrl
//      beforeEach(() => {
//        props =  {
//          location: { pathname: 'testUrl1'},
//          showUrl: (url) => {}
//        }
//        showUrl = sinon.stub(props, 'showUrl')
//      })
//      it('ComponentDidMount', () => {
//        wrapper = shallow(<Articles  />)
//        wrapper.instance().componentDidMount()
//        expect(showUrl.calledOnce).toBe(true)
//      })
//   })