import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DetailedHTMLProps, HTMLAttributes, MouseEvent, useCallback } from 'react';
import toast from 'react-hot-toast';

import {
  ARROW_BACK_BLACK_ICON,
  ARROW_BACK_WHITE_CIRCLE_ICON,
  CLOSE_BLACK_ICON,
  CLOSE_WHITE_ICON,
  LOGO_SG2_W,
  MENU_ICON,
} from '~/constants/images';

export type NavHeaderType = 'sub-transparent' | 'sub-white' | 'close-black' | 'close-white' | 'home';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  type?: NavHeaderType;
  hasNotificaiton?: boolean;
  logoLink?: string;
  handleClickClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  handleClickMoreMenu?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NavHeader = (props: Props) => {
  const router = useRouter();

  const handleClickBack = useCallback(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem('prevPath');

    if (prevPath != 'null') {
      router.back();
    } else {
      router.push('/');
    }
  }, [router]);

  const {
    type = 'home',
    hasNotificaiton = false,
    children,
    logoLink,
    handleClickClose,
    handleClickMoreMenu,
    className,
    ...rest
  } = props;

  if (type === 'sub-transparent') {
    return (
      <nav
        className={['relative w-full h-[60px] flex items-center bg-transparent p-[18px]', className].join(' ')}
        {...rest}
      >
        <button onClick={handleClickBack} className="flex items-center">
          <Image src={ARROW_BACK_WHITE_CIRCLE_ICON} alt="back" width={36} height={36} />
        </button>
      </nav>
    );
  }

  if (type === 'sub-white') {
    return (
      <nav
        className={['relative w-full h-[60px] flex items-center bg-white bg-opacity-50 p-[18px]', className].join(' ')}
        {...rest}
      >
        <button onClick={handleClickBack} className="w-8 h-8 p-1">
          <Image src={ARROW_BACK_BLACK_ICON} alt="back" width={24} height={24} />
        </button>
        <span className="absolute text-lg font-bold -translate-x-1/2 left-1/2">{children}</span>
      </nav>
    );
  }

  if (type === 'close-white') {
    return (
      <nav
        className={['relative w-full h-[60px] flex items-center bg-white bg-opacity-50  p-[18px]', className].join(' ')}
        {...rest}
      >
        <button onClick={handleClickClose} className="w-8 h-8 p-1">
          <Image src={CLOSE_BLACK_ICON} alt="back" width={24} height={24} />
        </button>
        <span className="absolute text-lg font-bold -translate-x-1/2 left-1/2">{children}</span>
      </nav>
    );
  }

  if (type === 'close-black') {
    return (
      <nav
        className={['relative w-full h-[60px] flex items-center bg-black text-white  p-[18px]', className].join(' ')}
        {...rest}
      >
        <button onClick={handleClickClose} className="w-8 h-8 p-1">
          <Image src={CLOSE_WHITE_ICON} alt="back" width={24} height={24} />
        </button>
        <span className="absolute text-lg font-bold -translate-x-1/2 left-1/2">{children}</span>
      </nav>
    );
  }

  return (
    <nav
      className={[
        'relative w-full h-[60px] flex justify-between items-center text-white bg-black pl-2 pr-4',
        className,
      ].join(' ')}
      {...rest}
    >
      {logoLink ? (
        <Link href={logoLink}>
          <a>
            <Image src={LOGO_SG2_W} alt="logo" width={171} height={36} />
          </a>
        </Link>
      ) : (
        <Image src={LOGO_SG2_W} alt="logo" width={171} height={36} />
      )}
      <div className="flex gap-4">
        {/* <div className="relative w-6 h-6 ">
          {hasNotificaiton && <div className="absolute w-[6px] h-[6px] bg-brand-pink top-0 right-0 rounded-full"></div>}
          <button
            className="ml-[4px] mt-[2px]"
            onClick={() => {
              toast.success('준비 중입니다.');
            }}
          >
            <Image src={`/icons/notifications.svg`} alt="noti" width={16} height={20} />
          </button>
        </div> */}
        <button onClick={handleClickMoreMenu}>
          <Image src={MENU_ICON} alt="menu" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavHeader;
