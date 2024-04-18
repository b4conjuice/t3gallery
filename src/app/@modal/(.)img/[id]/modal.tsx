'use client'

import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className='m-0 h-screen max-h-[100vh] w-screen max-w-[100vw] bg-cb-dark-blue/90 text-cb-white'
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className='absolute left-4 top-4'>
        close
      </button>
    </dialog>,
    document.getElementById('modal-root')!
  )
}
