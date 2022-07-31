import { render } from '@testing-library/react';

import ShippingMethod from './ShippingMethod';

describe('ShippingMethod', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShippingMethod />);
    expect(baseElement).toBeTruthy();
  });
});
