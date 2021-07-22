import React, { useState } from 'react';
import UseMemo from './UseMemo';

function MemoContainer() {
  const [title, setTitle] = useState('truong memo')

  return (
    <div>
      <h3>memo hook</h3>
      <UseMemo title={title} releaseData="123" />
      <button type="button" onClick={() => setTitle(`truong_${Date.now()}`)}>try to change title</button>
    </div>
  )
}

export default MemoContainer
