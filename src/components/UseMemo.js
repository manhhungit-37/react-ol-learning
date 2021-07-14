import React, { memo }  from 'react'

function UseMemo({ title, releaseData, count, handleTitle }) {
  console.log('=========re-render use memo')

  return (
    <div>
      this is use memo: {title} {releaseData} {count}
      <button type="button" onClick={handleTitle}> test callback title</button>
    </div>
  )
}

export default memo(UseMemo)

// export default memo(UseMemo, areEquality)
// function areEquality(prevProps, nextProps) {
//   return prevProps.count === nextProps.count
// }
