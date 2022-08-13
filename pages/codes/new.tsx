import React, { FormEvent, useEffect, useState } from 'react';

// import { highlight, languages } from 'prismjs/components/prism-core';
// import Editor from 'react-simple-code-editor';
import 'prismjs/themes/prism.css'; // Example style, you can use another
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Select from 'react-select';

import Divider from '@src/components/codeblock/Divider';

import { SupportedLanguages } from 'react-code-blocks/src/types';
import { CodeBlock, dracula } from 'react-code-blocks';

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

const supportedLanguages: {
  [language: string]: {
    languageName: SupportedLanguages;
    fileExtensions: string[];
  };
} = {
  ACTION_SCRIPT: {
    languageName: 'actionscript',
    fileExtensions: ['as'],
  },
  ADA: {
    languageName: 'ada',
    fileExtensions: ['ada'],
  },
  ARDUINO: {
    languageName: 'arduino',
    fileExtensions: ['ino'],
  },
  C: {
    languageName: 'c',
    fileExtensions: ['c'],
  },
  CLOJURE: {
    languageName: 'clojure',
    fileExtensions: ['clj'],
  },
  CPP: {
    languageName: 'cpp',
    fileExtensions: ['cpp'],
  },
  C_SHARP: {
    languageName: 'csharp',
    fileExtensions: ['csharp'],
  },
  CSS: {
    languageName: 'css',
    fileExtensions: ['css'],
  },
  DART: {
    languageName: 'dart',
    fileExtensions: ['dart'],
  },
  GO: {
    languageName: 'go',
    fileExtensions: ['go'],
  },
  GRAPH_QL: {
    languageName: 'graphql',
    fileExtensions: ['sdl'],
  },
  GROOVY: {
    languageName: 'groovy',
    fileExtensions: ['groovy', 'gvy', 'gy', 'gsh'],
  },
  HTML: {
    languageName: 'html',
    fileExtensions: ['html'],
  },
  JAVA: {
    languageName: 'java',
    fileExtensions: ['java'],
  },
  JAVASCRIPT: {
    languageName: 'javascript',
    fileExtensions: ['js'],
  },
  JSON: {
    languageName: 'json',
    fileExtensions: ['json'],
  },
  JAVASCRIPT_XML: {
    languageName: 'jsx',
    fileExtensions: ['jsx'],
  },
  KOTLIN: {
    languageName: 'kotlin',
    fileExtensions: ['kt', 'kts', 'ktm'],
  },
  LATEX: {
    languageName: 'latex',
    fileExtensions: ['tex'],
  },
  LISP: {
    languageName: 'lisp',
    fileExtensions: ['lisp'],
  },
  lua: {
    languageName: 'lua',
    fileExtensions: ['lua'],
  },
  MAKEFILE: {
    languageName: 'makefile',
    fileExtensions: ['makefile'],
  },
  MATLAB: {
    languageName: 'matlab',
    fileExtensions: ['m', 'mat'],
  },
  OBJECTIVE_C: {
    languageName: 'objectivec',
    fileExtensions: ['h', 'm'],
  },
  PHP: {
    languageName: 'php',
    fileExtensions: ['php'],
  },
  POWERSHELL: {
    languageName: 'powershell',
    fileExtensions: ['ps'],
  },
  PYTHON: {
    languageName: 'python',
    fileExtensions: ['py'],
  },
  R: {
    languageName: 'r',
    fileExtensions: ['r'],
  },
  RUBY: {
    languageName: 'ruby',
    fileExtensions: ['rb'],
  },
  RUST: {
    languageName: 'rust',
    fileExtensions: ['rs'],
  },
  SASS: {
    languageName: 'sass',
    fileExtensions: ['sass', 'scss'],
  },
  SCALA: {
    languageName: 'scala',
    fileExtensions: ['scala', 'sc'],
  },
  SHELL: {
    languageName: 'shell',
    fileExtensions: ['sh', 'csh', 'bash', 'zsh'],
  },
  SQL: {
    languageName: 'sql',
    fileExtensions: ['sql'],
  },
  SWIFT: {
    languageName: 'swift',
    fileExtensions: ['swift'],
  },
  TEXT: {
    languageName: 'text',
    fileExtensions: ['text', 'txt'],
  },
  TYPESCRIPT_XML: {
    languageName: 'tsx',
    fileExtensions: ['tsx'],
  },
  TYPESCRIPT: {
    languageName: 'typescript',
    fileExtensions: ['ts'],
  },
  YAML: {
    languageName: 'yaml',
    fileExtensions: ['yml', 'yaml'],
  },
  NOT_SUPPORTED: {
    languageName: 'text',
    fileExtensions: [],
  },
} as const;

// const customStyles = ;

const NewCodePage = () => {
  const [description, setDescription] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [fontSize, setFontSize] = useState<Option>(
    fontOptions.find((option) => option.value === 16) ?? fontOptions[0],
  );
  const [language, setLanguage] = useState<SupportedLanguages>('text');

  const handleSelectFontSize = (selectedOption: Option | null) => {
    setFontSize(selectedOption!);
  };

  const re = /(?:\.([^.]+))?$/;
  const fileExtensionToLanguage = (fileExtension: string) => {
    const reverseMap: any = {};
    for (const supportedLanguage in supportedLanguages) {
      supportedLanguages[supportedLanguage].fileExtensions.forEach(
        (extension) => {
          reverseMap[extension] =
            supportedLanguages[supportedLanguage].languageName;
        },
      );
    }
    const supportedLanguage = reverseMap[fileExtension];
    return supportedLanguage;
  };

  useEffect(() => {
    const foundPatterns = re.exec(fileName);
    if (foundPatterns && foundPatterns[0].length > 1) {
      const fileExtension = foundPatterns[0].substring(1);
      const inputLanguage = fileExtensionToLanguage(fileExtension);
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
          <textarea
            onInput={(e: FormEvent<HTMLTextAreaElement>) => {
              setCode((e.target as HTMLTextAreaElement).value);
            }}
            onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              (e.target as HTMLTextAreaElement).style.height = 'inherit';
              (e.target as HTMLTextAreaElement).style.height = `${
                (e.target as HTMLTextAreaElement).scrollHeight
              }px`;
            }}
            value={code}
          />
          <CodeBlock
            text={code}
            language={language}
            showLineNumbers
            theme={dracula}
          />
          {/* <Editor */}
          {/*   key={fontSize.value} */}
          {/*   className='border rounded-lg' */}
          {/*   value={code} */}
          {/*   onValueChange={(c) => setCode(c)} */}
          {/*   highlight={(c) => highlight(c, languages.js)} */}
          {/*   padding={10} */}
          {/*   style={{ */}
          {/*     fontFamily: 'Roboto, "Fira Mono", monospace', */}
          {/*     fontSize: fontSize.value, */}
          {/*   }} */}
          {/* /> */}
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
