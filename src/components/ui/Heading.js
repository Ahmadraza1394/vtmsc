import { cn } from '@/lib/utils'

export default function Heading({ level = 'h2', children, className }) {
  const Tag = level

  const baseStyles = 'font-bold text-gray-900'
  const sizeStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-xl md:text-2xl lg:text-3xl',
    h5: 'text-lg md:text-xl lg:text-2xl',
    h6: 'text-base md:text-lg lg:text-xl',
  }

  return (
    <Tag className={cn(baseStyles, sizeStyles[level], className)}>
      {children}
    </Tag>
  )
}
