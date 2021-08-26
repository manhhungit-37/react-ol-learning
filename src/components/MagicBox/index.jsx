import React from 'react';
import useMagicBox from '../../hooks/useMagicBox';

function MagicBox() {
  const { color } = useMagicBox();

  return (
    <div className="magic-box" style={{backgroundColor: color}}></div>
  )
}

MagicBox.propTypes = {

}

export default MagicBox

