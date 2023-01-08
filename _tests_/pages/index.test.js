import { render, screen } from '@testing-library/react'
import Welcome from '../../pages/components/Home'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Welcome />)

    const heading = screen.getByRole('heading', {
      name: "Toms Profile",
    })

    expect(heading).toBeInTheDocument()
  })
})