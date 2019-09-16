import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

describe("Controls", () => {
    it("renders the component without errors", () => {
        render(<Controls />);
    });
}) 

describe("The lock/unlock button", () => {

    it('should be enabled if closed is true', () => {

        let state = {
            locked: false,
            closed: true
        }

        const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
            buttons = container.getElementsByClassName('toggle-btn'),
            lock = buttons[0]

        expect(lock.disabled).toBe(false)

    });
})