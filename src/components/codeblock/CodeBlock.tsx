import React from 'react';

import { atomOneLight, CopyBlock } from 'react-code-blocks';
import {
  CodeBlockTheme,
  SupportedLanguages,
} from 'react-code-blocks/src/types';

const CodeBlock = ({
  language = 'text',
  code = '',
  theme = atomOneLight,
}: {
  language?: SupportedLanguages;
  code?: string;
  theme?: CodeBlockTheme;
}) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers
      startingLineNumber={1}
      theme={theme}
      codeBlock
    />
  );
};

export default CodeBlock;
