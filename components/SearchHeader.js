import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
function SearchHeader({ term }) {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/?term=${term}`);
  };
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
          height={40}
          width={120}
          className='cursor-pointer'
          alt='Google'
          onClick={() => router.push('/')}
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 flex-grow rounded-full shadow-lg max-w-3xl'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url='https://lh3.googleusercontent.com/ogw/ADea4I7DoPNV8ZOpIz1B7h73Ym8MA_jHxmGygABTLuZOvA=s32-c-mo'
          className='ml-auto'
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
