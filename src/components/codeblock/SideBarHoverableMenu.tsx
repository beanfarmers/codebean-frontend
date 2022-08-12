import React from 'react';

const SideBarHoverableMenu = ({
  text,
  className = 'hover:underline cursor-pointer',
}: {
  text: string;
  className?: string;
}) => <li className={className}>{text}</li>;

export default SideBarHoverableMenu;
