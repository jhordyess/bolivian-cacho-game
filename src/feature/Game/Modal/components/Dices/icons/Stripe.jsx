const Stripe = ({ className, color = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <defs>
      <pattern
        id="pattern_y2crB"
        patternUnits="userSpaceOnUse"
        width="25"
        height="25"
        patternTransform="rotate(45)"
      >
        <line x1="0" y="0" x2="0" y2="25" stroke={color} strokeWidth="2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pattern_y2crB)" opacity="1" />
  </svg>
)

export default Stripe
