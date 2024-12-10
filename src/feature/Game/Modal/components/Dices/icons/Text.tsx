const Text = ({ txt = '', className, color = '#000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
    <text
      x="50"
      y="50"
      fontSize="45"
      textAnchor="middle"
      dominantBaseline="central"
      fontWeight="bold"
      fill={color}
    >
      {txt}
    </text>
  </svg>
)

export default Text
