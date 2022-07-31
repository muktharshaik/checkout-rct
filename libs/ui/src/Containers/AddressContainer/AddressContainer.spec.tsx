import { render } from '@testing-library/react';

import AddressContainer from './AddressContainer';

describe('AddressContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddressContainer />);
    expect(baseElement).toBeTruthy();
  });
});
