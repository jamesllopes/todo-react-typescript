import { useState } from 'react'
import './App.css'

interface itemTask {
  id: number,
  nameTask: string
}

function App() {
  const [formTask, setFormTask] = useState<string>("")
  const [listTask, setListTask] = useState<itemTask[]>([])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const id_aleatorio: number = (Math.random() * 10)
    setListTask([...listTask, { id: id_aleatorio, nameTask: formTask }])
    console.log(id_aleatorio)
    setFormTask('')
  }

  const createList = () => {
    if (!listTask) {
      return
    }

    return (
      listTask.map((item) => (
        <li key={item.id}>{item.nameTask}</li>
      )
      ))
  }

  return (
    <div className="container">
      <div className='box'>
        <form className='form'
          onSubmit={handleSubmit}>
          <input
            className='input__tasks'
            type='text'
            placeholder='Digite sua Tarefa'
            value={formTask}
            onChange={(e) => setFormTask(e.target.value)}
          />
          <button className='btn__submit' type='submit'>Enviar</button>
        </form>

        <div className='list'>
          <ul>
            {createList()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
