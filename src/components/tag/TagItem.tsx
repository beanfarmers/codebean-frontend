import React from 'react';

const TagItem = ({ tag }: { tag: string }) => (
  <span
    key={tag}
    className='py-1 px-3 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-300'
  >
    {tag}
  </span>
);

export default TagItem;
