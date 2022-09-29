import Image from 'next/image';
import { ReactNode } from 'react';

interface NFTCollectionInfoSectionProps {
  contractAddress: string;
  openseaUrl: string;
  ownedBy?: string;
  tokenId?: number;
}

const NFTCollectionInfoSection = ({ contractAddress, openseaUrl, ownedBy, tokenId }: NFTCollectionInfoSectionProps) => {
  return (
    <section className="relative px-4 py-6 bg-black">
      <div>
        <h2 className="text-lg font-black text-white font-montserrat">
          <span className="text-point-neongreen">NFT</span> Collection Detail
        </h2>
        <div className="flex flex-col gap-2 mt-4 ">
          {ownedBy && <TextInfo term="Owned By" content={ownedBy} />}
          {tokenId && <TextInfo term="Token ID" content={tokenId} />}
          <TextInfo term="Contract Address" content={contractAddress} newTabLink={'https://scope.klaytn.com'} />
          <TextInfo term="Token Standard" content={'KIP-17'} />
          <TextInfo term="BlockChain" content={'Klaytn'} />
          <TextInfo term="OpenSea" content={'오픈씨에서 확인하기'} newTabLink={openseaUrl} />
        </div>
      </div>
    </section>
  );
};

interface TextInfoProps {
  term: string;
  content: ReactNode;
  newTabLink?: string;
}

const TextInfo = ({ term, content, newTabLink }: TextInfoProps) => {
  return (
    <div className="relative flex w-full">
      <h3 className="w-[40%] text-sm font-bold text-gray4">{term}</h3>
      <div className="relative max-w-[50%] w-max text-sm text-brand-pink overflow-hidden text-ellipsis whitespace-nowrap">
        {content}
      </div>
      {newTabLink && (
        <button className="ml-2">
          <Image src={'/icons/icon_open_in_new_18.svg'} alt="open_new" width={18} height={18} />
        </button>
      )}
    </div>
  );
};

export default NFTCollectionInfoSection;
