import { render } from '@testing-library/react';

import NortonLogo from './NortonLogo';

describe('NortonLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NortonLogo />);
    expect(baseElement).toBeTruthy();
  });
});
