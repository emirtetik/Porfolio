"use client";
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
 
const NotFound = () => {
      const { t } = useTranslation();
    
  return (
    <div className='text-black  bg-[var(--background)] h-screen flex flex-col justify-center items-center gap-y-10'>
      <h2 className='font-prata page-size'>404</h2>
      <Link href="/" className='font-prata screen-size hover-underline-animation'>{t("Home")}</Link>
    </div>
  )
}
export default dynamic(() => Promise.resolve(NotFound), { ssr: false });
