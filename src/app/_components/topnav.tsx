import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { SimpleUploadButton } from './simple-upload-button'

export default function TopNav() {
  return (
    <nav className='flex w-full items-center justify-between border-b border-cb-dusty-blue p-4'>
      <Link href='/'>
        <div className='text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10'>
          gallery
        </div>
      </Link>

      <div className='text-xl font-semibold'>
        <SignedOut>
          <SignInButton>sign in</SignInButton>
        </SignedOut>
        <SignedIn>
          <div className='flex items-center gap-4'>
            <SimpleUploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
