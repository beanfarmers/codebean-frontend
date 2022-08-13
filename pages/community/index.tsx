import React, { useState } from 'react';

import PostItem from '@src/components/community/PostItem';
import SideBar from '@src/components/community/SideBar';
import { Post } from '@src/utils/types';

const Community = () => {
  const [postList] = useState<Post[]>([
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
    <div className='flex text-gray-800'>
      <SideBar />
      <main className='min-h-screen w-full bg-gray-100 p-8 space-y-5'>
        {postList.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default Community;
