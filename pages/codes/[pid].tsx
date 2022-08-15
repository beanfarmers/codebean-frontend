import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { github } from 'react-code-blocks';

import CodeBlock from '@src/components/codeblock/CodeBlock';
import TagItemList from '@src/components/tag/TagItemList';
import { api } from '@src/utils/ApiUtils';
import { CodeSnippetResponse } from '@src/utils/types';

const CodeDetailPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [codeSnippet, setCodeSnippet] = useState<CodeSnippetResponse>();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/code-snippets/${pid}`);
        setCodeSnippet(response.data);
      } catch (e) {}
    })();
  }, []);

  return (
    <div className='flex flex-col text-gray-800'>
      <div className='w-full px-5 py-5 bg-gray-100 border-b'>
        <div className='flex space-x-2 items-center'>
          <img
            className='w-10 rounded-full'
            src='/cat-40px.jpeg'
            alt='member profile'
          />
          <span className='text-xl font-bold cursor-pointer text-blue-500 hover:underline'>
            litsynp
          </span>
          <span className='text-xl'>{' / '}</span>
          <span className='text-xl font-bold cursor-pointer text-blue-500 hover:underline'>
            {codeSnippet?.fileName}
          </span>
        </div>
        <div>
          <TagItemList tags={[codeSnippet?.languageCodeName!]} />
        </div>
      </div>
      <main className='min-h-screen w-full white py-10'>
        <div className='mx-5 md:mx-auto max-w-[61.25rem]'>
          <div className='w-full h-full py-3 px-2 border rounded-t bg-gray-50 justify-between'>
            <button
              type='button'
              className='cursor-pointer text-blue-500 font-bold hover:underline'
            >
              {codeSnippet?.fileName}
            </button>
          </div>
          <div className='border-x px-4'>
            <CodeBlock
              language={codeSnippet?.languageCodeName}
              code={codeSnippet?.code}
              theme={github}
            />
          </div>
          <div className='border-x border-b rounded-b py-3 px-2 bg-gray-50'>
            <div className='leading-relaxed'>{codeSnippet?.description}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodeDetailPage;
