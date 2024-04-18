import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import { getMyImages } from '@/server/queries'

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {images.map(image => (
        <div key={image.id} className='flex flex-col'>
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: 'contain' }}
              width={192}
              height={192}
              alt={image.name}
            />
            <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <SignedOut>
        <div className='p-4 text-center'>please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </>
  )
}
