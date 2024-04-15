import { db } from '@/server/db'

export const dynamic = 'force-dynamic'

const mockUrls = [
  'https://utfs.io/f/e461c612-f375-4d52-9ed4-c19636464cb9-o7zgr4.jpg',
  'https://utfs.io/f/813ec977-4e31-4211-966f-171517d64be9-1jnw0z.jpg',
  'https://utfs.io/f/f4e437b4-29e8-4a71-ae8e-76cfb0ed1ca6-1sj3pb.png',
  'https://utfs.io/f/6940ba35-5aa1-48ca-996c-77c9eb2b9590-swwogy.jpeg',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className=''>
      <div className='flex flex-wrap gap-4'>
        {posts.map(post => (
          <div key={post.id} className='w-48'>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className='w-48'>
            <img src={image.url} className='' />
          </div>
        ))}
      </div>
    </main>
  )
}
