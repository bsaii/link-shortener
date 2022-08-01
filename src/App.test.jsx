/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

describe('renders elements of the app', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders textbox for URL', () => {
    const inputBox = screen.getByRole('textbox')
    expect(inputBox).toBeInTheDocument()
  })

  it('renders button for creating a new URL', () => {
    const button = screen.getByText(/create/i)
    expect(button).toBeInTheDocument()
  })
})
