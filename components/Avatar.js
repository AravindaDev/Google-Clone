import Image from 'next/image';
function Avatar({ url, className }) {
  return (
    <Image
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src='/images/avatar.jpg'
      alt='ProfilePicture'
      height={40}
      width={40}
    />
  );
}

export default Avatar;
