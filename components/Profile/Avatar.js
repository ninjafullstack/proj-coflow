import img1 from '@/public/img1.png'
import Image from 'next/image';

const Avatar = ({ user, className, imgClassName }) => {
  return (
    <>
      {user?.image && (
        <div className={`rounded-full overflow-hidden mx-auto ${className}`}>
          <Image src={user?.image} alt='avatar' width={49} height={49} layout="responsive" className={imgClassName} />
        </div>
      )}
    </>
  );
};

export default Avatar;

