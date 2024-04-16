import { SignedIn, SignedOut } from '@clerk/nextjs'

import { getMyImages } from '@/server/queries'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()
  return (
    <div className='flex flex-wrap gap-4'>
      {images.map(image => (
        <div key={image.id} className='flex h-48 w-48 flex-col'>
          <Image
            src={image.url}
            style={{ objectFit: 'contain' }}
            width={192}
            height={192}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function Home() {
  return (
    <main className='px-4'>
      <SignedOut>
        <p>please sign in</p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  )
}
