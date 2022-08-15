import { SupportedLanguages } from 'react-code-blocks/src/types';

export interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export interface CodeSnippetResponse {
  id: number;
  description: string;
  fileName: string;
  languageCodeName: SupportedLanguages;
  code: string;
}
