import React from 'react';
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../store/RootStateContext";


const stylesS = {width: 50, height: 50, background: "#525151"}

export const Counter = observer(() => {
  const {counter} = useRootStore()

  return (
    <div>
      {/*{'counter = ' + counter.count}*/}
      {counter.total}

      <button style={stylesS} onClick={() => counter.increment()}>+</button>
      <button style={stylesS} onClick={() => counter.decrement()}>-</button>
    </div>
  );
})

