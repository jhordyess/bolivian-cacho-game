import { FC } from 'react'

type Props = {
  className?: string
  color?: string
}

const Balas: FC<Props> = ({ className, color = '#000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="9" fill={color} />
  </svg>
)

export default Balas
