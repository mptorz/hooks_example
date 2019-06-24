import React, { useState, useEffect, useContext, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

const ExampleState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      </header>
    </div>
  );
}

export default ExampleState;




const ExampleEffect = () => {
  const [count, setCount] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(true)

  useEffect(() => {
    console.log('component did mount')
    return () => console.log('component will unmount')
  }, [])

  useEffect(() => {
    console.log('component did update or mount')
  })

  useEffect(() => {
    console.log('counter changed')
  }, [count])
  
  
  return (
    <div className="App">
      <header className="App-header">
        {displayLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <div style={{height: 20}}/>
      <button onClick={() => setDisplayLogo(!displayLogo)}>
        Toggle logo
      </button>
      </header>
    </div>
  );
}

// export default ExampleEffect;



const SomeContext = createContext("default value")

const ExampleGrandGrandParent = () => (
  <SomeContext.Provider value="some data here">
    <ReallyDeepTree/>
  </SomeContext.Provider>
)

const ReallyDeepTree = () => (
  <ExampleGrandParent />
)

const ExampleGrandParent = () => (
  <ExampleParent />
)

const ExampleParent = () => (
  <ExampleChild />
)

const ExampleChild = () => {
  const data = useContext(SomeContext)
  return (
    <div>
      {data}
    </div>
  )
}

// export default ExampleGrandGrandParent
