import { render } from '@testing-library/react';

import BillingSummary from './BillingSummary';

describe('BillingSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BillingSummary />);
    expect(baseElement).toBeTruthy();
  });
});
