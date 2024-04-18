import { getImage } from '@/server/queries'

export default async function FullImagePage(props: { id: number }) {
  const image = await getImage(props.id)
  return (
    <div className='flex h-full w-full divide-x divide-cb-dusty-blue'>
      <div className='flex flex-shrink items-center justify-center px-4'>
        <img src={image.url} alt={image.name} className='w-96 object-contain' />
      </div>
      <div className='flex w-48 flex-shrink-0 flex-col px-4'>
        <div className='text-xl font-bold'>{image.name}</div>
      </div>
    </div>
  )
}
