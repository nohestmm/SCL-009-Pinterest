import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from './Modal'
import Footerbutton from './Footerbutton'
import InfiniteScroll from 'react-infinite-scroll-component'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('Existencia de componentes', () => {
  it('Debería existir el componente <Modal />', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Debería existir el componente <InfiniteScroll />', () => {
    const wrapper = shallow(<InfiniteScroll />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Debería existir el componente <Footerbutton />', () => {
    const wrapper = shallow(<Footerbutton />);
    expect(wrapper.exists()).toBe(true);
  });
});
describe('<Modal/>', () => {

  it('<Modal/>', () => {
    const img = shallow(<Modal />);
    expect(img.find('img').length).toEqual(1);
  });
  it('<Modal/>', () => {
    const button = shallow(<Modal />);
    expect(button.find('button').length).toEqual(3);
  });
  it('<Modal/>', () => {
    const section = shallow(<Modal />);
    expect(section.find('section').length).toEqual(1);
  });
  it('<Modal/>', () => {
    const div = shallow(<Modal />);
    expect(div.find('div').length).toEqual(11);
  });
})

describe('<Footerbutton/>', () => {

  it('<Footerbutton/>', () => {
    const section = shallow(<Footerbutton />);
    expect(section.find('section').length).toEqual(1);
  });
  it('<Footerbutton/>', () => {
    const button = shallow(<Footerbutton />);
    expect(button.find('button').length).toEqual(2);
  });
  it('<Footerbutton/>', () => {
    const div = shallow(<Footerbutton />);
    expect(div.find('div').length).toEqual(2);
  });
  it('<Footerbutton/>', () => {
    const icon = shallow(<Footerbutton />);
    expect(icon.find('i').length).toEqual(2);
  });
})
describe('<App/>', () => {
  it('<App/>', () => {
    const nav = shallow(<App />);
    expect(nav.find('nav').length).toEqual(1);
  });
  it('<App/>', () => {
    const input = shallow(<App />);
    expect(input.find('input').length).toEqual(1);
  });
  it('<App/>', () => {
    const div = shallow(<App />);
    expect(div.find('div').length).toEqual(14);
  });

})
