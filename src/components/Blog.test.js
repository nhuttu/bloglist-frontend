import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import Togglable from './Togglable'

describe('first test', () => {

    test('renders content', () => {
        const blog = ({
            title: "jep",
            author: "pepe",
            url: "jee.com",
            likes: 1,
            user: "idiasd"
        })


        const component = render(
            <Blog blog={blog} />
        )
        const div = component.container.querySelector('.togglableContent')

        expect(div).toHaveStyle('display: none')
        expect(component.container).toHaveTextContent(
            'jep'
        )
        expect(component.container).toHaveTextContent(
            'pepe'
        )

    })
    test('likes and url', () => {
        
    })

})

