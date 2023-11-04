import React from 'react'
import FileInput from './components/FileInput'
import InputFocus from './components/InputFocus'
import AnimatedButton from './components/AnimatedButton'
import Counter from './components/Counter'
import  TaskList  from './components/TaskList'
import SearchComponent from './components/SearchComponent'

const App = () => {
  return (
    <div>
      <FileInput/>
      <InputFocus/>
      {/* <AnimatedButton/> */}
      <Counter/>
      <TaskList/>
      <SearchComponent/>
    </div>
  )
}

export default App
