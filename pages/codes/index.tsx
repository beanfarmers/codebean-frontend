import React, { useEffect, useState } from 'react';

import CodeItem from '@src/components/codeblock/CodeItem';
import Divider from '@src/components/codeblock/Divider';
import SideBar from '@src/components/codeblock/SideBar';
import { api } from '@src/utils/ApiUtils';
import { CodeSnippetResponse } from '@src/utils/types';

const CodePage = () => {
  const [codeItemList, setCodeItemList] = useState<CodeSnippetResponse[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/code-snippets');
        setCodeItemList(response.data.content);
      } catch (e) {
        setCodeItemList([]);
      }
    })();
  }, []);

  return (
    <div className='flex text-gray-800'>
      <SideBar />
      <main className='min-h-screen w-full bg-gray-100 p-8 space-y-8'>
        <div className='space-y-8'>
          {codeItemList.map((item) => (
            <CodeItem
              key={item.id}
              codeId={item.id}
              description={item.description}
              language={item.languageCodeName}
              fileName={item.fileName}
              code={item.code}
            />
          ))}
        </div>
        <Divider />
        <div className='text-center font-bold cursor-pointer py-2 rounded bg-white text-blue-500 border hover:bg-gray-100'>
          More
        </div>
      </main>
    </div>
  );
};

export default CodePage;
