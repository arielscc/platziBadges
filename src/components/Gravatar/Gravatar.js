import React from 'react';

export default function Gravatar({ className, avatar }) {
  return <img className={className} src={avatar} alt="Avatar" />;
}
