import React, { FormEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Select from 'react-select';
import Editor from 'react-simple-code-editor';

import Divider from '@src/components/codeblock/Divider';
import { api } from '@src/utils/ApiUtils';
import { fileExtensionToLanguage, prismHighlight } from '@src/utils/PrismUtils';

interface Option {
  value: number;
  label: string;
}

const fontOptions: Option[] = [
  {
    value: 10,
    label: '10pt',
  },
  {
    value: 12,
    label: '12pt',
  },
  {
    value: 14,
    label: '14pt',
  },
  {
    value: 16,
    label: '16pt',
  },
  {
    value: 18,
    label: '18pt',
  },
  {
    value: 20,
    label: '20pt',
  },
];

const NewCodePage = () => {
  const router = useRouter();
  const [description, setDescription] = useState<string>('');
  const [fileName, setFileName] = useState<string>('add.js');
  const [inputCode, setInputCode] = useState<string>(
    'function add(a, b) {\n  return a + b;\n}',
  );
  const [fontSize, setFontSize] = useState<Option>(
    fontOptions.find((option) => option.value === 16) ?? fontOptions[0],
  );
  const [language, setLanguage] = useState<string>('js');

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

  const onSelectFontSize = (selectedOption: Option | null) => {
    setFontSize(selectedOption!);
  };

  const onFileNameInput = (e: FormEvent<HTMLInputElement>) => {
    setFileName((e.target as HTMLInputElement).value);
  };

  const onCodeChange = (c: string) => setInputCode(c);
  const highlight = (c: string) => prismHighlight(c, language);

  const onTextAreaInput = (e: FormEvent<HTMLTextAreaElement>) => {
    setDescription((e.target as HTMLTextAreaElement).value);
  };

  const onTextAreaKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    (e.target as HTMLTextAreaElement).style.height = 'inherit';
    (e.target as HTMLTextAreaElement).style.height = `${
      (e.target as HTMLTextAreaElement).scrollHeight
    }px`;
  };

  const onClickCancel = () => {
    router.back();
  };

  const onClickUpload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const data = {
      description,
      fileName,
      code: inputCode,
    };

    (async () => {
      await api.post('/code-snippets', data);

      router.back();
    })();
  };

  return (
    <div className='min-h-screen p-5 bg-gray-100 flex-row'>
      <div className='flex flex-col bg-white p-5 space-y-5 border rounded-lg'>
        <div className='flex flex-row space-x-2'>
          <input
            id='filename'
            name='filename'
            type='text'
            placeholder='File name'
            className='w-full py-1 px-2 text-lg italic text-gray-700'
            onInput={onFileNameInput}
            value={fileName}
          />
          <div className='w-[10rem]'>
            <Select
              placeholder='Font Size'
              defaultValue={fontOptions[3]}
              onChange={onSelectFontSize}
              isSearchable
              options={fontOptions}
            />
          </div>
        </div>
        <Divider />
        <Editor
          value={inputCode}
          onValueChange={onCodeChange}
          className='line-numbers'
          preClassName='line-numbers'
          highlight={highlight}
          padding={10}
          style={{
            width: '100%',
            backgroundColor: 'white',
            fontFamily: '"Fira inputCode", "Fira Mono", monospace',
            fontSize: fontSize.value,
          }}
        />
        <textarea
          placeholder='Description'
          className='w-full py-1 px-2 border rounded bg-gray-100 border-gray-300'
          onInput={onTextAreaInput}
          onKeyUp={onTextAreaKeyUp}
          value={description}
        />
        <div className='flex justify-center space-x-10'>
          <button
            type='button'
            className='w-20 text-neutral-800 bg-gray-200 rounded-lg py-1 px-2 hover:text-blue-500 hover:bg-blue-100'
            onClick={onClickCancel}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='w-20 text-neutral-800 bg-blue-100 rounded-lg py-1 px-2 hover:text-blue-500 hover:bg-blue-200'
            onClick={onClickUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCodePage;
