import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('renders the dashboard', () => {
    it('renders the component', () => {
        render(<Dashboard />);
    });
})