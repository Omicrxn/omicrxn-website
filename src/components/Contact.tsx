import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='absolute top-1/2 -translate-y-1/2 right-0 w-[37.5%] flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold'>Want to make your dreams true?</h2>
        <a className='text-xl font-bold underline underline-offset-[3px]' href='mailto:alexavila0128@gmail.com'>Let&apos;s Connect</a>
        <div className='flex gap-2 pt-4'>
            <Link href="mailto:alexavila0128@gmail.com" >
                <Image src={"/icons/social/mail.svg"} width={24} height={24} alt='Gmail'/>
            </Link>
            <Link href="https://www.linkedin.com/in/alejandro-avila-rodriguez/" target='_blank'>
            <Image src={"/icons/social/linkedin.svg"} width={24} height={24} alt='Gmail'/>
            </Link>
            <Link href="https://www.instagram.com/omicrxndev/" target='_blank'>
            <Image src={"/icons/social/instagram.svg"} width={24} height={24} alt='Gmail'/>
            </Link>
            <Link href="https://twitter.com/OmicrxnDev" target='_blank'>
            <Image src={"/icons/social/twitter.svg"} width={24} height={24} alt='Gmail'/>
            </Link>
            <Link href="https://github.com/Omicrxn" target='_blank'>
            <Image src={"/icons/social/github.svg"} width={24} height={24} alt='Gmail'/>
            </Link>
        </div>
    </div>
  )
}
