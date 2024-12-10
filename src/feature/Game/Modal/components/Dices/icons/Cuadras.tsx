import { FC } from 'react'

type Props = {
  className?: string
  color?: string
}

const Cuadras: FC<Props> = ({ className, color = '#000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <circle cx="30" cy="30" r="9" fill={color} />
    <circle cx="70" cy="30" r="9" fill={color} />
    <circle cx="30" cy="70" r="9" fill={color} />
    <circle cx="70" cy="70" r="9" fill={color} />
  </svg>
)

export default Cuadras
