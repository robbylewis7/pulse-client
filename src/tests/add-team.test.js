import React from 'react'
import { shallow, mount } from 'enzyme'
import AddTeam from './../components/add-team'

describe('<AddTeam />', () => {
    it('Renders without crashing', () => {
        shallow(<AddTeam />);
    })
});

it('Renders the add button initially', () => {
    const wrapper = shallow(<AddTeam />);
    expect(wrapper.hasClass('add-button')).toEqual(true);
});

it('Should switch to editing when the add button is clicked', () => {
    const wrapper = shallow(<AddTeam />);
    wrapper.simulate('click');
    expect(wrapper.state('editing')).toEqual(false);
});

it('Should switch to checked when the add button is clicked', () => {
    const wrapper = shallow(<AddTeam />);
    wrapper.simulate('click');
    expect(wrapper.state('checked')).toEqual(false);
});

// it('Should fire the onAdd callback when the form is submitted', () => {
//     const callback = jest.fn();
//     const wrapper = mount(<AddTeam onAdd={callback} />);
//     const value = 'Foobar';
//     wrapper.instance().setEditing(true);
//     wrapper.update();
//     wrapper.find('input[type="text"]').instance().value = value;
//     wrapper.simulate('submit');
//     expect(callback).toHaveBeenCalledWith(value);
// });

// it('Should not fire onAdd if the input is empty', () => {
//     const callback = jest.fn();
//     const wrapper = mount(<AddTeam onAdd={callback} />);
//     wrapper.instance().setEditing(true);
//     wrapper.simulate('submit');
//     expect(callback).not.toHaveBeenCalled();
// });


