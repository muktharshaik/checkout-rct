import { render } from '@testing-library/react';

import ShippingAddress from './ShippingAddress';

describe('ShippingAddress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShippingAddress />);
    expect(baseElement).toBeTruthy();
  });
});
