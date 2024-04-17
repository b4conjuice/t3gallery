import FullImagePage from '@/components/full-image-page'

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(photoId)

  if (Number.isNaN(idAsNumber)) throw new Error('invalid id')

  return <FullImagePage id={idAsNumber} />
}
