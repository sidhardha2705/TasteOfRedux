import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Something);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
