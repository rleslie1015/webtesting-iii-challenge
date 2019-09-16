import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe("the display", () => {
    it("renders the display component", () => {
        render(<Display />);
    });
})