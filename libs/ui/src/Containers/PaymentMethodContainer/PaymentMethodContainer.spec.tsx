import { render } from '@testing-library/react';

import PaymentMethodContainer from './PaymentMethodContainer';

describe('PaymentMethodContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentMethodContainer />);
    expect(baseElement).toBeTruthy();
  });
});
