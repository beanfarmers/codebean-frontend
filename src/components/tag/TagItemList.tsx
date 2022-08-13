import React from 'react';

import TagItem from '@src/components/tag/TagItem';

const TagItemList = ({ tags }: { tags: string[] }) => (
  <div className='mt-6 text-sm text-blue-500 font-bold space-x-1'>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </div>
);

export default TagItemList;
