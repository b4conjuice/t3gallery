import { SignedIn, SignedOut } from '@clerk/nextjs'

import { db } from '@/server/db'

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })
  return (
    <div className='flex flex-wrap gap-4'>
      {[...images, ...images, ...images].map(image => (
        <div key={image.id} className='flex w-48 flex-col'>
          <img src={image.url} className='' />
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
