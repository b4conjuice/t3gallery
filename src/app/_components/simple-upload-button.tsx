'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { useUploadThing } from '@/utils/uploadthing'
import { usePostHog } from 'posthog-js/react'

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args)

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const selectedFiles = Array.from(e.target.files)
    const result = await $ut.startUpload(selectedFiles)

    console.log('uploaded files', result)
    // TODO: persist result in state maybe?
  }

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: 'image/*',
    },
    isUploading: $ut.isUploading,
  }
}

function UploadIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-6 w-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
      />
    </svg>
  )
}

function LoadingIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />{' '}
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}

export function SimpleUploadButton() {
  const router = useRouter()
  const posthog = usePostHog()
  const { inputProps } = useUploadThingInputProps('imageUploader', {
    onUploadBegin() {
      posthog.capture('on-upload-begin')
      toast(
        <div className='flex w-full items-center space-x-4'>
          <LoadingIcon className='h-8 w-8 animate-spin-slow' />
          <span>uploading</span>
        </div>,
        {
          duration: 100000,
          id: 'on-upload-begin',
        }
      )
    },
    onUploadError(error) {
      posthog.capture('on-upload-error', { error })
      toast.dismiss('on-upload-begin')
      toast.error('upload failed')
    },
    onClientUploadComplete: () => {
      toast.dismiss('on-upload-begin')
      toast('upload complete')
      router.refresh()
    },
  })
  return (
    <div>
      <label htmlFor='upload-button' className='cursor-pointer'>
        <UploadIcon />
      </label>
      <input
        id='upload-button'
        type='file'
        className='sr-only'
        {...inputProps}
      />
    </div>
  )
}
