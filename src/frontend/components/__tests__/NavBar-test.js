jest.unmock('../Navbar')

import React from 'react';
import Navbar from '../Navbar'

import renderer from 'react-test-renderer'

describe('Navbar', () => {

    it('Displays well', () => {

        const tree = renderer.create(
            <Navbar />
        ).toJSON();
        
        expect(tree).toMatchSnapshot();
        
    });
});
