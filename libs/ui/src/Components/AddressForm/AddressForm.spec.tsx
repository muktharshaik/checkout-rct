import { render } from '@testing-library/react';

import AddressForm from './AddressForm';

describe('AddressForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddressForm />);
    expect(baseElement).toBeTruthy();
  });
});
