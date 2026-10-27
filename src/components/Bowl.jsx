// A small SVG bowl of spice, coloured per product
export default function Bowl({ color, size = 160 }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 200 150" role="img" aria-label="Bowl of spice">
      <ellipse cx="100" cy="132" rx="72" ry="10" fill="rgba(0,0,0,.12)" />
      <path d="M34 78 Q100 12 166 78 Z" fill={color} />
      <path d="M18 76 H182 Q176 126 100 130 Q24 126 18 76 Z" fill="#6a4630" />
      <ellipse cx="100" cy="76" rx="82" ry="9" fill="#8a6244" />
      <path d="M34 77 Q100 40 166 77 Q100 90 34 77 Z" fill={color} />
    </svg>
  )
}
