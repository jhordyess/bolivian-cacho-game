import { type ReactNode } from 'react'

export default function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="text-center">
      <p className="text-gray-400">{children}</p>
    </footer>
  )
}
