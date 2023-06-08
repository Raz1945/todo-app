import { createContext, useState } from 'react';
// Componentes
import { Header } from "./Header/Header"

import { todos } from "../todos.js"

// CSS
import '../Styles/App.css'
import { ToDoInput } from './ToDoInput/ToDoInput';
import { ToDoList } from './ToDoList/ToDoList';

// 
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light-mode');
  const [toDos, setToDos] = useState(todos)

  const toggleTheme = () => {
    setTheme(
      theme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  // Agrega una nueva tarea
  const addToDo = (content) => {
    const lastId = toDos.length > 0 ? toDos[toDos.length - 1].id : 1;
    const regex = /^\s*$/; // Expresión regular para verificar espacios en blanco

    if (regex.test(content)) {
      return; // Verifica que 'content' no este compuesto solamente de espacios en blanco
    };
    const newToDo = {
      id: lastId + 1,
      content,
      completed: false
    };

    const toDoList = [...toDos];
    toDoList.push(newToDo);
    setToDos(toDoList);
  };


  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='web-container' id={theme}>
          <Header theme={theme} setTheme={toggleTheme} />
          <main className='main-container'>
            <ToDoInput addToDo={addToDo} theme={theme} />
            <ToDoList tasks={toDos} theme={theme}/>
          </main>

        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App