import React, { FormEvent, useEffect, useState } from 'react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Select from 'react-select';
import Editor from 'react-simple-code-editor';

import Divider from '@src/components/codeblock/Divider';
import { fileExtensionToLanguage, highlight } from '@src/utils/PrismUtils';

interface Option {
  value: number;
  label: string;
}

const fontOptions: Option[] = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 14,
    label: '14',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 20,
    label: '20',
  },
];

const NewCodePage = () => {
  const [description, setDescription] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [inputCode, setInputCode] = useState<string>(
    'function add(a, b) {\n  return a + b;\n}',
  );
  const [fontSize, setFontSize] = useState<Option>(
    fontOptions.find((option) => option.value === 16) ?? fontOptions[0],
  );
  const [language, setLanguage] = useState<string>('js');

  const handleSelectFontSize = (selectedOption: Option | null) => {
    setFontSize(selectedOption!);
  };

  useEffect(() => {
    Prism.manual = true;
    Prism.highlightAll();

    // console.debug('languages: ', Prism.languages);

    const re = /(?:\.([^.]+))?$/;
    const foundPatterns = re.exec(fileName);
    if (foundPatterns && foundPatterns[0].length > 1) {
      const fileExtension = foundPatterns[0].substring(1);
      const inputLanguage = fileExtensionToLanguage(fileExtension);
      // console.debug(inputLanguage);
      setLanguage(inputLanguage);
    }
  }, [fileName]);

  return (
    <div className='min-h-screen p-5 bg-gray-100 flex-row'>
      <div>
        <div className='flex flex-col bg-white p-5 space-y-3 border rounded-lg'>
          <div className='flex flex-row space-x-2'>
            <input
              type='text'
              placeholder='File name'
              className='w-full py-1 px-2'
              onInput={(e: FormEvent<HTMLInputElement>) => {
                setFileName((e.target as HTMLInputElement).value);
              }}
              value={fileName}
            />
            <div className='w-[10rem]'>
              <Select
                placeholder='Font Size'
                defaultValue={fontOptions[3]}
                onChange={handleSelectFontSize}
                isSearchable
                options={fontOptions}
              />
            </div>
          </div>
          <Divider />
          <Editor
            value={inputCode}
            onValueChange={(c) => setInputCode(c)}
            className='line-numbers'
            preClassName='line-numbers'
            highlight={(c) => highlight(c, language)}
            padding={10}
            style={{
              width: '100%',
              backgroundColor: '#F5F2F0',
              fontFamily: '"Fira inputCode", "Fira Mono", monospace',
              fontSize: fontSize.value,
            }}
          />
          <textarea
            placeholder='Description'
            className='w-full py-1 px-2 border rounded bg-gray-200 border-gray-300'
            onInput={(e: FormEvent<HTMLTextAreaElement>) => {
              setDescription((e.target as HTMLTextAreaElement).value);
            }}
            onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              (e.target as HTMLTextAreaElement).style.height = 'inherit';
              (e.target as HTMLTextAreaElement).style.height = `${
                (e.target as HTMLTextAreaElement).scrollHeight
              }px`;
            }}
            value={description}
          />
          <div className='flex justify-center space-x-10'>
            <button
              type='button'
              className='w-20 text-neutral-800 bg-gray-200 rounded-lg py-1 px-2 hover:text-blue-500 hover:bg-blue-100'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='w-20 text-neutral-800 bg-blue-100 rounded-lg py-1 px-2 hover:text-blue-500 hover:bg-blue-200'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCodePage;
