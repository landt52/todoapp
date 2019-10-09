import React, {useState} from 'react';
import Checkbox from '../Checkbox/Checkbox';
import AddTask from '../AddTask/AddTask';
import unsubscribeFirebase from '../../firebase';

export default function Tasks({tasks, doneTasks, listName, list, changed, input}) {
    const [filter, setFilter] = useState('current');
    const [checkedTasks, setcheckedTasks] = useState([]);

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    const setClassesName = (className) => {
      return filter === className 
        ? `active tasks__filter-${className}`
        : `tasks__filter-${className}`
    }

    const selectTasks = (id) => {
        if(!checkedTasks.includes(id)){
            setcheckedTasks([...checkedTasks, id])
        }else{
            const filteredArray = checkedTasks.filter(idx => idx !== id)
            setcheckedTasks([...filteredArray]);
        }
    }

    const tasksHandler = (checkedTasks, func) => {
        const deleteTasks = checkedTasks.map(func)

        Promise.all(deleteTasks).then(() => {
          setcheckedTasks([]);
          setFilter('current');
        });
    };

    return (
      <div className='tasks'>
        <h2 className='list-name'>{listName}</h2>
        {list && (
          <div>
            <button
              className={setClassesName('current')}
              value='current'
              onClick={filterHandler}
            >
              Current
            </button>
            <button
              className={setClassesName('done')}
              value='done'
              onClick={filterHandler}
            >
              Done
            </button>
          </div>
        )}
        <ul className='tasks__list'>
          {filter === 'current'
            ? tasks.map(task => (
                <li key={task.docId}>
                  <Checkbox id={task.docId} filter={filter} />
                  <span>{task.task}</span>
                </li>
              ))
            : doneTasks.map(task => (
                <li key={task.docId}>
                  <Checkbox
                    id={task.docId}
                    filter={filter}
                    select={selectTasks}
                  />
                  <span className='tasks__list-done'>{task.task}</span>
                </li>
              ))}
        </ul>
        {list && filter === 'current' ? (
          <AddTask list={list} changed={changed} input={input} />
        ) : filter === 'done' && doneTasks.length !== 0 ? (
          <div>
            <button
              className='tasks__filter-restore'
              onClick={() =>
                tasksHandler(checkedTasks, task =>
                  unsubscribeFirebase('tasks')
                    .doc(task)
                    .update({ done: false })
                )
              }
            >
              Restore
            </button>
            <button
              className='tasks__filter-delete'
              onClick={() =>
                tasksHandler(checkedTasks, task =>
                  unsubscribeFirebase('tasks')
                    .doc(task)
                    .delete()
                )
              }
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
    );
}
