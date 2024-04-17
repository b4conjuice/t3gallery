import { getImage } from '@/server/queries'
import Image from 'next/image'

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(photoId)

  if (Number.isNaN(idAsNumber)) throw new Error('invalid id')

  const image = await getImage(idAsNumber)
  return (
    <div>
      <Image
        src={image.url}
        style={{ objectFit: 'contain' }}
        width={192}
        height={192}
        alt={image.name}
      />
      <div>{image.name}</div>
    </div>
  )
}
