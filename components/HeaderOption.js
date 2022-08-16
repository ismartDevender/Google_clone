import React from 'react';

import {
  PlayCircleFilledOutlined,
  SearchOffOutlined,
  SearchOutlined,
} from '@mui/icons-material';

function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent  hover:text-blue-500 hover:border-b-4 hover:border-blue-500 pb-3 cursor-pointer ${
        selected && 'text-blue-500 border-blue-500'
      } `}
    >
      <div className="">
        <Icon />
      </div>
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
