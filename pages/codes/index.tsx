import React, { useEffect, useState } from 'react';

import { SupportedLanguages } from 'react-code-blocks/src/types';

import CodeItem from '@src/components/codeblock/CodeItem';
import SideBar from '@src/components/codeblock/SideBar';
import { api } from '@src/utils/ApiUtils';

interface CodeSnippetResponse {
  id: number;
  description: string;
  fileName: string;
  languageCodeName: SupportedLanguages;
  code: string;
}

const CodePage = () => {
  const [codeItemList, setCodeItemList] = useState<CodeSnippetResponse[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/code-snippets');
        setCodeItemList(response.data);
      } catch (e) {
        setCodeItemList([]);
      }
    })();
  }, []);

  return (
    <div className='flex text-gray-800'>
      <SideBar />
      <main className='min-h-screen w-full bg-gray-100 p-8 space-y-5'>
        {codeItemList.map((item) => (
          <CodeItem
            key={item.id}
            description={item.description}
            language={item.languageCodeName}
            fileName={item.fileName}
            code={item.code}
          />
        ))}
      </main>
    </div>
  );
};

export default CodePage;
