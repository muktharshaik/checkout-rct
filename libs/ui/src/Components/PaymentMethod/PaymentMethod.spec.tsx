import { render } from '@testing-library/react';

import PaymentMethod from './PaymentMethod';

describe('PaymentMethod', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentMethod />);
    expect(baseElement).toBeTruthy();
  });
});
