import { render } from '@testing-library/react';

import ShippingMethodContainer from './ShippingMethodContainer';

describe('ShippingMethodContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShippingMethodContainer />);
    expect(baseElement).toBeTruthy();
  });
});
