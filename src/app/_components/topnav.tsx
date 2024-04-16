import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function TopNav() {
  return (
    <nav className='flex w-full items-center justify-between border-b border-cb-dusty-blue p-4'>
      <div className='text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10'>
        gallery
      </div>

      <div className='text-xl font-semibold'>
        <SignedOut>
          <SignInButton>sign in</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
