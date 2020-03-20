import React from 'react'
import HelloWorld from '../src/hello-world'
import renderer from 'react-test-renderer'

test('HelloWorld match snapshot', () => {
    const component = renderer.create( 
        < HelloWorld/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})