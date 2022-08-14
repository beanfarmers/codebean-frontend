import Prism from 'prismjs';

/**
 * Set the correct grammar parameter based on the language parameter.
 *
 * @see https://github.com/PrismJS/prism/issues/1881
 */
export const highlight = (code: string, language: string) => {
  if (Prism.languages[language]) {
    return Prism.highlight(code, Prism.languages[language], language);
  } else {
    return Prism.util.encode(code);
  }
};

interface SupportedLanguage {
  languageName: string;
  fileExtensions: string[];
}

/**
 * SupportedLanguage type for Prism.js associated by file extension
 *
 * @see https://prismjs.com/
 */
export const supportedLanguages: Record<string, SupportedLanguage> = {
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
  C_PP: {
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
  LUA: {
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
  MARKDOWN: {
    languageName: 'md',
    fileExtensions: ['md'],
  },
  NOT_SUPPORTED: {
    languageName: 'text',
    fileExtensions: [],
  },
};

export const fileExtensionToLanguage = (fileExtension: string) => {
  const reverseMap: Record<string, string> = {};
  for (const supportedLanguage in supportedLanguages) {
    supportedLanguages[supportedLanguage].fileExtensions.forEach(
      (extension) => {
        reverseMap[extension] =
          supportedLanguages[supportedLanguage].languageName;
      },
    );
  }
  return reverseMap[fileExtension];
};
