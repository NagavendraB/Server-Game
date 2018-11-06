import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Components
import {
  AppOperations,
  ServerOperations,
  Servers,
  UserOperations
} from '../components';

Enzyme.configure({ adapter: new Adapter() });

it('`AppOperations` exist and be a component', () => expect(AppOperations).toBeInstanceOf(Function));
it('`ServerOperations` exist and be a component', () => expect(ServerOperations).toBeInstanceOf(Function));
it('`Servers` exist and be a component', () => expect(Servers).toBeInstanceOf(Function));
it('`UserOperations` exist and be a component', () => expect(UserOperations).toBeInstanceOf(Function));

it('`AppOperations` component should render Add, Remove buttons on every app', () => {
  const wrapper = shallow(<AppOperations />);
  expect(wrapper.find('.add-icon')).toBeDefined();
  expect(wrapper.find('.remove-icon')).toBeDefined();
});

it('`ServerOperations` component should render Add Server, Destroy buttons', () => {
  const wrapper = shallow(<ServerOperations />);
  expect(wrapper.find('.add-icon.icon-large')).toBeDefined();
  expect(wrapper.find('.remove-icon.icon-large')).toBeDefined();
});

it('`Servers` component should render list of servers on screen', () => {
  const servers = [{runningApps: []}, {runningApps: []}];
  const component = shallow(<Servers servers={servers} />);
  const results = component.find('.server-container').children();
  expect(results.length).toBe(servers.length);
});

it('`UserOperations` component should render all user operations that user can interact with application', () => {
  const wrapper = shallow(<UserOperations />);
  expect(wrapper.find('.server-operations')).toBeDefined();
  expect(wrapper.find('.apps-container')).toBeDefined();
});