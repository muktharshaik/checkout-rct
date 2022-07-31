import { render } from '@testing-library/react';

import Disclaimer from './Disclaimer';

describe('Disclaimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Disclaimer />);
    expect(baseElement).toBeTruthy();
  });
});
