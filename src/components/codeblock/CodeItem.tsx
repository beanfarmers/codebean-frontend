import React, { useEffect, useState } from 'react';

import { SupportedLanguages } from 'react-code-blocks/src/types';

import CodeBlock from '@src/components/codeblock/CodeBlock';
import Divider from '@src/components/codeblock/Divider';
import { fileNameToLanguage } from '@src/utils/CodeConverterUtils';

function CodeItem({
  description = '',
  fileName = 'untitled.txt',
  code = '',
}: {
  description: string;
  fileName: string;
  code: string;
}) {
  const [language, setLanguage] = useState<SupportedLanguages>(
    fileNameToLanguage(fileName),
  );

  useEffect(() => {
    setLanguage(fileNameToLanguage(fileName));
  }, []);

  return (
    <div className='bg-white border rounded-xl p-5 space-y-3'>
      <div className='font-bold text-lg w-full flex items-center space-x-2'>
        <img
          className='w-8 rounded-full'
          src='/cat-40px.jpeg'
          alt='member profile'
        />
        <div>
          <span>litsynp</span>
        </div>
      </div>
      <Divider />
      <div className='leading-relaxed'>{description}</div>
      <CodeBlock language={language} code={code} />
    </div>
  );
}

export default CodeItem;
