jest.unmock('../Home')

import React from 'react';
import Home from '../Home'

import renderer from 'react-test-renderer'

describe('Home', () => {

    it('Displays well', () => {

        const tree = renderer.create(
            <Home />
        ).toJSON();
        
        expect(tree).toMatchSnapshot();
        
    });
});
