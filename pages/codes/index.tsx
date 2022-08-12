import React, { useState } from 'react';

import { SupportedLanguages } from 'react-code-blocks/src/types';

import CodeBlock from '@src/components/codeblock/CodeBlock';
import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';

const HoverableMenu = ({
  text,
  className = 'hover:underline cursor-pointer',
}: {
  text: string;
  className?: string;
}) => <li className={className}>{text}</li>;

const Divider = () => <div className='w-full border' />;

function SideBar() {
  return (
    <div className='basis-1/3 min-w-[16rem] max-w-[20rem] h-full border-r space-y-8 py-8 px-8 text-neutral-800'>
      <div className='space-y-3'>
        <div className='font-bold text-lg w-full flex items-center space-x-2'>
          <img
            className='w-8 rounded-full'
            src='/cat-40px.jpeg'
            alt='member profile'
          />
          <span>litsynp</span>
        </div>
        <Divider />
        <ul className='space-y-2'>
          <HoverableMenu text='Dashboard' />
          <HoverableMenu text='My Codes' />
          <HoverableMenu text='Recent Codes' />
          <HoverableMenu text='Favorites' />
        </ul>
      </div>
      <div className='space-y-3'>
        <div className='font-bold text-lg'>Popular Languages</div>
        <Divider />
        <ul className='space-y-2'>
          <HoverableMenu text='Python' />
          <HoverableMenu text='Java' />
          <HoverableMenu text='Kotlin' />
          <HoverableMenu text='Swift' />
          <HoverableMenu text='Go' />
          <HoverableMenu text='C' />
          <HoverableMenu text='C++' />
        </ul>
        <div>
          <span className='hover:text-blue-600 cursor-pointer text-xs text-gray-500'>
            Show more
          </span>
        </div>
      </div>
    </div>
  );
}

function CodeItem({
  language = 'text',
  code = '',
}: {
  language: SupportedLanguages;
  code: string;
}) {
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
      <CodeBlock language={language} code={code} />
    </div>
  );
}

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
