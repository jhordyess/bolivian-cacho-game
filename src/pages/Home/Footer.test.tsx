import { cleanup, render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  test('should render the footer', () => {
    render(<Footer />)
    const footerElement = screen.getByText(/Made with 💪 by/i)
    expect(footerElement).toBeInTheDocument()
  })

  test('should have an anchor tag with a URL to the GitHub repository', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: /View on GitHub/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jhordyess/bolivian-cacho-game')
  })

  afterAll(cleanup)
})
