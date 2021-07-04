import React from 'react';

function Test() {
  return (
    <div>
      <div className="aa" name="bb" onClick={e => console.log(e.target.attributes.name)}>aa</div>
    </div>
  );
}

export default Test;