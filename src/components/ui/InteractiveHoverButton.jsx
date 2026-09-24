import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'

/* Coffee bean — oval body + curved crease, drawn as inline SVG */
function CoffeeBeanIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bean body — warm brown ellipse, tilted */}
      <ellipse
        cx="12"
        cy="12"
        rx="6.5"
        ry="9.5"
        fill="#6b3a1f"
        transform="rotate(-30 12 12)"
      />
      {/* Center crease — darker curved line */}
      <path
        d="M9.8 5.8 Q13 12 9.8 18.2"
        stroke="#3d1f0a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

const InteractiveHoverButton = forwardRef(function InteractiveHoverButton(
  { text = 'Button', className = '', href, ...props },
  ref,
) {
  const inner = (
    <>
      {/* Resting label — slides out on hover */}
      <span className="ihb-label">
        {text}
      </span>

      {/* Hover label + arrow — slides in on hover */}
      <div className="ihb-hover-content">
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>

      {/* Coffee bean origin — expands to fill the button on hover */}
      <div className="ihb-coffee-blob" aria-hidden="true">
        <CoffeeBeanIcon size={20} />
      </div>
    </>
  )

  // Render as <a> when href is provided so the hero CTA stays semantic
  if (href) {
    return (
      <a ref={ref} href={href} className={`ihb ${className}`} {...props}>
        {inner}
      </a>
    )
  }

  return (
    <button ref={ref} className={`ihb ${className}`} {...props}>
      {inner}
    </button>
  )
})

InteractiveHoverButton.displayName = 'InteractiveHoverButton'

export { InteractiveHoverButton }
