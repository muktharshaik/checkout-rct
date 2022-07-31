import { render } from '@testing-library/react';

import DiscountCode from './DiscountCode';

describe('DiscountCode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DiscountCode />);
    expect(baseElement).toBeTruthy();
  });
});
