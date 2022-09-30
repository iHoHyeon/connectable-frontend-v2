import Image from 'next/image';
import toast from 'react-hot-toast';

import { useUserStore } from '~/stores/user';

import Button from '../Design/Button';

const ShareButton = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <Button
      color="white"
      fullWidth={false}
      onClick={() => {
        if (!isLoggedIn) {
          toast.error('로그인이 필요합니다.');
        } else {
          toast.success('준비중입니다.');
        }
      }}
    >
      <div className="flex items-center justify-center">
        <Image src="/icons/icon_share_32.svg" alt="share" layout="fixed" width={32} height={32} />
      </div>
    </Button>
  );
};

export default ShareButton;
