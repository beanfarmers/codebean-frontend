import React from 'react';

import { useRouter } from 'next/router';
import { SupportedLanguages } from 'react-code-blocks/src/types';

import CodeBlock from '@src/components/codeblock/CodeBlock';
import Divider from '@src/components/codeblock/Divider';
import TagItemList from '@src/components/tag/TagItemList';

function CodeItem({
  codeId,
  description = '',
  fileName = 'untitled.txt',
  language = 'text',
  code = '',
}: {
  codeId: number;
  description: string;
  fileName: string;
  language: SupportedLanguages;
  code: string;
}) {
  const router = useRouter();
  const onClickCodeItem = () => {
    router.push(`/codes/${codeId}`);
  };

  return (
    <div className='bg-white border rounded-xl p-5 space-y-3'>
      <div className='flex items-center justify-between space-x-2'>
        <button
          type='button'
          className='italic bg-blue-100 rounded-lg py-1 px-2 cursor-pointer hover:text-blue-500'
          onClick={onClickCodeItem}
        >
          {fileName}
        </button>
        <div className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
          <img
            className='w-8 rounded-full'
            src='/cat-40px.jpeg'
            alt='member profile'
          />
          <div className='font-bold text-lg'>
            <span>litsynp</span>
          </div>
        </div>
      </div>
      <Divider />
      <CodeBlock language={language} code={code} />
      <div className='leading-relaxed'>{description}</div>
      <div>
        <TagItemList tags={[language]} />
      </div>
    </div>
  );
}

export default CodeItem;
