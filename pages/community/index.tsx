import React, { useState } from 'react';

import {
  ChatBubbleOutline,
  FavoriteBorder,
  StarBorder,
} from '@mui/icons-material';

import Divider from '@src/components/codeblock/Divider';
import SideBar from '@src/components/community/SideBar';
import Footer from '@src/components/footer/Footer';
import NavBar from '@src/components/nav-bar/NavBar';

const Community = () => {
  const [postList] = useState<
    {
      id: number;
      title: string;
      content: string;
      tags: string[];
    }[]
  >([
    {
      id: 1,
      title: 'Looking for some help',
      content: "I'm new here. Can anyone help me?",
      tags: ['java', 'noob'],
    },
    {
      id: 2,
      title: "We're hiring at Litsynp Corp!",
      content:
        'We are Litsynp coporation in Korea, and we are looking for some young and enthusiastic developers.',
      tags: ['hiring', 'recruit'],
    },
    {
      id: 3,
      title: 'Lorem ipsum!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus nibh in enim ullamcorper, vitae varius nulla fermentum. Pellentesque risus diam, malesuada eu tellus sit amet, fringilla porttitor lorem. Cras diam sem, imperdiet at vestibulum vitae, tincidunt vel dui. Cras pretium mollis diam sed scelerisque. Nunc pretium vehicula enim, ac gravida nisl vestibulum non. Cras massa elit, porta a nibh non, iaculis ullamcorper diam. Vestibulum congue maximus dolor. Duis dictum interdum nibh, ut vehicula magna pulvinar vitae. Ut eros quam, luctus eu aliquam non, sollicitudin a libero. Nulla facilisi. Ut libero lorem, molestie sed leo ac, luctus pellentesque leo. Maecenas malesuada scelerisque eros eu commodo. Sed nisi justo, gravida non blandit et, ultrices eget nibh. Ut et facilisis sapien.',
      tags: ['lorem', 'ipsum'],
    },
  ]);

  return (
    <div>
      <NavBar />
      <div className='h-screen bg-white flex text-gray-800'>
        <SideBar />
        <main className='h-full w-full bg-gray-100 p-8 space-y-5'>
          {postList.map((item) => (
            <div
              key={item.id}
              className='bg-white border rounded-xl p-5 space-y-3'
            >
              <div className='w-full flex items-center space-x-2'>
                <img
                  className='w-8 rounded-full'
                  src='/cat-40px.jpeg'
                  alt='member profile'
                />
                <div className='flex space-x-2'>
                  <span className='text-gray-500'>litsynp</span>
                  <span className='font-bold text-gray-700'>{item.title}</span>
                </div>
              </div>
              <Divider />
              <div className='text-gray-600 leading-loose'>{item.content}</div>
              <div>
                <div className='mt-6 text-sm text-blue-500 font-bold space-x-1'>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className='py-1 px-3 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='mt-5 space-x-3'>
                  <StarBorder style={{ color: '#737373' }} />
                  <FavoriteBorder style={{ color: '#737373' }} />
                  <ChatBubbleOutline style={{ color: '#737373' }} />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
