import clsx from 'clsx';
import Image from 'next/image';

const Avatar = ({ className, size, src, title, hover }) => {
  return (
    <div className={clsx('cursor-pointer mask mask-squircle', className)}>
      <Image
        className={clsx('w-full h-full', hover && 'hover:scale-110')}
        src={src || '/git.jpg'}
        alt={title || 'user' + ' avatar'}
        width={80}
        height={80}></Image>
    </div>
  );
};

export default Avatar;
