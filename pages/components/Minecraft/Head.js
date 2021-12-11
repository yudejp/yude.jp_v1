import React, { useState, useEffect } from 'react';

function App (props) {
  const uuid = props;

  return (
    <img
        src={"https://crafatar.com/renders/body/" + uuid.uuid}
        width={110}
        height={250}
    />
  )
}

export default App;