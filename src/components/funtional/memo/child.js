import React from 'react'

function ChildMemo() {
    console.log("child re-render")
  return (
    <div>ChildMemo</div>
  )
}

export default React.memo(ChildMemo)