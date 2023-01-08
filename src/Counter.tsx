import React from 'react';
import counter from './store/counter'
import {observer} from "mobx-react-lite";


const stylesS = {width: 50, height: 50, background: "#525151"}

export const Counter = observer(() => {
  return (
    <div>
      {/*{'counter = ' + counter.count}*/}
      {counter.total}

      <button style={stylesS} onClick={() => counter.increment()}>+</button>
      <button style={stylesS} onClick={() => counter.decrement()}>-</button>
    </div>
  );
})

