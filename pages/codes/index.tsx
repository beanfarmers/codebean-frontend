import React, { useState } from 'react';

import { SupportedLanguages } from 'react-code-blocks/src/types';

import CodeItem from '@src/components/codeblock/CodeItem';
import SideBar from '@src/components/codeblock/SideBar';
import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';

const CodePage = () => {
  const [codeItemList] = useState<
    {
      id: number;
      language: SupportedLanguages;
      code: string;
    }[]
  >([
    {
      id: 1,
      language: 'c',
      code: `#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`,
    },
    {
      id: 2,
      language: 'python',
      code: 'print("Hello Python!")',
    },
    {
      id: 3,
      language: 'java',
      code: `package com.litsynp.demo;
        
public class Main {
  
  public static void main(String[] args) {
      System.out.println("Hello Java!");
  }
}`,
    },
  ]);

  return (
    <div>
      <NavBar />
      <div className='h-screen bg-white flex text-gray-800'>
        <SideBar />
        <main className='h-full w-full bg-gray-100 p-8 space-y-5'>
          {codeItemList.map((item) => (
            <CodeItem key={item.id} language={item.language} code={item.code} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CodePage;
