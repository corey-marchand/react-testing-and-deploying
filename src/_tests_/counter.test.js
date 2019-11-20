import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';
// import Snapshot from '../_tests_/__snapshots__';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter component, has a state of 0 when it loads', () => {
  let app = mount(<Counter />);

  it('Counter changes state up on Click', () => {
    let span = app.find('.up');
    expect(span).toBeDefined();
    expect(app.state('count')).toBe(0);
    span.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  it('Counter changes state down on Click', () => {
    let span = app.find('.down');
    expect(span).toBeDefined();
    expect(app.state('count')).toBe(1);
    span.simulate('click');
    expect(app.state('count')).toBe(0);
  });


  it('render correctly', () => {
    const renderTree = renderer.create(<Counter />).toJSON();
    expect(renderTree).toMatchSnapshot();
  })

  it('state is being transferred to the DOM', () => {
    let app = mount(< Counter />);
    let span = app.find('.count');
    expect(span).toBeDefined();
  })
});
