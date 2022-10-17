import React from 'react';

import Button from '../../components/Button';

export default function Home() {
  const text = '버튼';
  return (
    <div>
      여기는 home
      <Button text={text} />
    </div>
  );
}
