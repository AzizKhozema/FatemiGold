import {useState} from 'react'
import TodoList from './TodoList'
import AddTask from './AddTask'

const MainScreen = ({ transtasks }) => {
  const [show, setShow] = useState(false);

  const toggleContent = () => {
    setShow(prev => !prev);
  };

  return (
    <>
    <main className=' z-0 m-1 p-2  flex-5 rounded-2xl bg-red-300'>
        <TodoList transtasks={transtasks} show={() => toggleContent()} />
        




    </main>
    {show && <AddTask onHide={() => toggleContent()}/>}
    </>
  )
}

export default MainScreen