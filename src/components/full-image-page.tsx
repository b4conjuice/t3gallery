import { clerkClient } from '@clerk/nextjs/server'

import { getImage } from '@/server/queries'

export default async function FullImagePage(props: { id: number }) {
  const image = await getImage(props.id)

  const uploaderInfo = await clerkClient.users.getUser(image.userId)
  return (
    <div className='flex h-full w-full min-w-0 divide-x divide-cb-dusty-blue'>
      <div className='flex flex-shrink items-center justify-center'>
        <img
          src={image.url}
          alt={image.name}
          className='flex-shrink object-contain'
        />
      </div>
      <div className='flex flex-shrink-0 flex-col divide-y divide-cb-dusty-blue'>
        <div className='p-4 text-center text-lg'>{image.name}</div>
        <div className='space-y-3 p-4'>
          <div>
            <span>uploaded by: </span>
            <span>{uploaderInfo.fullName}</span>
          </div>
          <div>
            <span>created on: </span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
