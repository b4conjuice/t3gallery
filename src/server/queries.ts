import 'server-only'

import { redirect } from 'next/navigation'
import { and, eq } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'

import { db } from './db'
import { images } from './db/schema'

export async function getMyImages() {
  const user = auth()

  if (!user.userId) throw new Error('unauthorized')

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  })
  return images
}

export async function getImage(id: number) {
  const user = auth()

  if (!user.userId) throw new Error('unauthorized')

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  })

  if (!image) throw new Error('image not found')

  if (image.userId !== user.userId) throw new Error('unauthorized')

  return image
}

export async function deleteImage(id: number) {
  const user = auth()

  if (!user.userId) throw new Error('unauthorized')

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)))

  redirect('/')
}
