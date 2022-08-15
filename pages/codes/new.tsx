import React, { FormEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Select from 'react-select';
import Editor from 'react-simple-code-editor';

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
    <div className='min-h-screen p-5 flex-row'>
      <div className='flex flex-col max-w-[64rem] mx-auto'>
        <div className='flex flex-row space-x-2 justify-between p-2 border rounded-x-lg rounded-t-lg bg-gray-50'>
          <input
            id='filename'
            name='filename'
            type='text'
            placeholder='File name including extension...'
            className='w-[20rem] py-1 px-2 text-gray-700 border rounded'
            onInput={onFileNameInput}
            value={fileName}
          />
          <div className='w-[10rem]'>
            <Select
              placeholder='Font Size'
              defaultValue={fontOptions[2]}
              onChange={onSelectFontSize}
              isSearchable
              options={fontOptions}
            />
          </div>
        </div>
        <div className='code-editor-container h-[25rem] overflow-y-scroll'>
          <Editor
            value={inputCode}
            onValueChange={onCodeChange}
            className='code-editor min-h-[25rem]'
            textareaId='code-area'
            highlight={highlight}
            padding={10}
            style={{
              backgroundColor: 'white',
              fontFamily: '"Fira inputCode", "Fira Mono", monospace',
              fontSize: fontSize.value,
            }}
          />
        </div>
        <textarea
          placeholder='Code snippet description...'
          className='w-full max-h-[15rem] py-2 px-4 border rounded-b-lg rounded-x-lg bg-gray-50 border-gray-300 resize-none'
          onInput={onTextAreaInput}
          onKeyUp={onTextAreaKeyUp}
          value={description}
        />
        <div className='flex justify-center space-x-10 mt-5 font-bold'>
          <button
            type='button'
            className='w-32 text-neutral-800 rounded-lg py-2 px-6 border border-gray-300 bg-gray-50 hover:bg-gray-100'
            onClick={onClickCancel}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='text-neutral-800 rounded-lg py-2 px-6 border border-gray-300 text-neutral-50 bg-green-600 hover:bg-green-700'
            onClick={onClickUpload}
          >
            Upload public code snippet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCodePage;
