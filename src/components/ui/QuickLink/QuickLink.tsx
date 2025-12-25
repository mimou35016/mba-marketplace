'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface QuickLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function QuickLink({
  href,
  children,
  className,
}: QuickLinkProps) {
  const router = useRouter()

  const handleMouseEnter = useCallback(() => {
    router.prefetch(href) // Preload page bundle before click
  }, [href, router])

  return (
    <Link href={href} className={className} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  )
}
