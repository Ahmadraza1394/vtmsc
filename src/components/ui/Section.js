import { cn } from '@/lib/utils'
import Container from '../layout/Container'

export default function Section({ children, className, containerClassName, fullWidth = false }) {
  const content = fullWidth ? children : (
    <Container className={containerClassName}>
      {children}
    </Container>
  )

  return (
    <section className={cn('py-16', className)}>
      {content}
    </section>
  )
}
