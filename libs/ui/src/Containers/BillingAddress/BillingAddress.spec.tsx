import { render } from '@testing-library/react';

import BillingAddress from './BillingAddress';

describe('BillingAddress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BillingAddress />);
    expect(baseElement).toBeTruthy();
  });
});
