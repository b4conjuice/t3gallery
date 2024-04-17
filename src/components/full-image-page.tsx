import { getImage } from '@/server/queries'
import Image from 'next/image'

export default async function FullImagePage(props: { id: number }) {
  const idAsNumber = Number(props.id)

  if (Number.isNaN(idAsNumber)) throw new Error('invalid id')

  const image = await getImage(idAsNumber)
  return (
    <Image
      src={image.url}
      style={{ objectFit: 'contain' }}
      width={192}
      height={192}
      alt={image.name}
    />
  )
}
