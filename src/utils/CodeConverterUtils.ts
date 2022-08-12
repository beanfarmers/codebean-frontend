import { SupportedLanguages } from 'react-code-blocks/src/types';

export const fileNameToLanguage: (fileName: string) => SupportedLanguages = (
  fileName: string,
) => {
  // TODO: read file name and convert it to SupportedLanguages type
  console.log(fileName);
  return 'c';
};
