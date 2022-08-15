import React, { useEffect, useState } from 'react';

import CodeItem from '@src/components/codeblock/CodeItem';
import Divider from '@src/components/codeblock/Divider';
import SideBar from '@src/components/codeblock/SideBar';
import { api } from '@src/utils/ApiUtils';
import { CodeSnippetResponse } from '@src/utils/types';

const CodePage = () => {
  const [codeItemList, setCodeItemList] = useState<CodeSnippetResponse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(5);
  const [isEndOfPage, setIsEndOfPage] = useState<boolean>(false);

  const fetchCodeItemList = ({
    page,
    size,
  }: {
    page: number;
    size: number;
  }) => {
    return api.get('/code-snippets', {
      params: {
        page,
        size,
      },
    });
  };

  const onClickLoadMore = () => {
    (async () => {
      try {
        const response = await fetchCodeItemList({
          page,
          size,
        });
        setCodeItemList([...codeItemList, ...response.data.content]);
        setIsEndOfPage(response.data.last);
        setPage((p) => p + 1);
      } catch (err) {}
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchCodeItemList({
          page: 0,
          size,
        });
        setCodeItemList([...response.data.content]);
        setIsEndOfPage(response.data.last);
      } catch (err) {
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
        {!isEndOfPage && (
          <>
            <Divider />
            <div className='flex justify-center'>
              <button
                type='button'
                className='text-center font-bold cursor-pointer w-[12rem] py-2 rounded border bg-white text-blue-500 hover:bg-gray-100'
                onClick={onClickLoadMore}
                disabled={isEndOfPage}
              >
                More
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CodePage;
