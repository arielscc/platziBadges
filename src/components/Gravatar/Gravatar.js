import React from 'react';
import md5 from 'md5';

export default function Gravatar({ className, email }) {
  // const hash = md5(email);
  // console.log(hash);
  return (
    <img
      className={className}
      src={`https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e
      ?d=wavatar`}
      alt="Avatar"
    />
  );
}
