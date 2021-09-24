import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function App (props) {
  const uuid = props;

  return (
    <Image
        src={"https://crafatar.com/renders/body/" + uuid.uuid}
        width={110}
        height={250}
    />
  )
}

export default App;