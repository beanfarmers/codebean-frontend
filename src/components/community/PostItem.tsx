import React from 'react';

import {
  ChatBubbleOutline,
  FavoriteBorder,
  StarBorder,
} from '@mui/icons-material';

import Divider from '@src/components/codeblock/Divider';
import TagItemList from '@src/components/tag/TagItemList';
import { Post } from '@src/utils/types';

const PostItem = ({ item }: { item: Post }) => (
  <div className='bg-white border rounded-xl p-5 space-y-3'>
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
      <TagItemList tags={item.tags} />
    </div>
    <div>
      <div className='mt-5 space-x-3'>
        <StarBorder style={{ color: '#737373' }} />
        <FavoriteBorder style={{ color: '#737373' }} />
        <ChatBubbleOutline style={{ color: '#737373' }} />
      </div>
    </div>
  </div>
);

export default PostItem;
