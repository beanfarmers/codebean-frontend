import React, { useEffect, useState } from 'react';

import CodeItem from '@src/components/codeblock/CodeItem';
import SideBar from '@src/components/codeblock/SideBar';
import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';
import { api } from '@src/utils/ApiUtils';
import { fileNameToLanguage } from '@src/utils/CodeConverterUtils';

interface CodeSnippetResponse {
  id: number;
  description: string;
  fileName: string;
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
    <div>
      <NavBar />
      <div className='min-h-screen bg-white flex text-gray-800'>
        <SideBar />
        <main className='min-h-screen w-full bg-gray-100 p-8 space-y-5'>
          {codeItemList.map((item) => (
            <CodeItem
              key={item.id}
              description={fileNameToLanguage(item.fileName)}
              fileName={item.fileName}
              code={item.code}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CodePage;
