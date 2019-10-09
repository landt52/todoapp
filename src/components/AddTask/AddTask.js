import React, {useState} from 'react';
import unsubscribeFirebase from '../../firebase';
import {FaPlus} from 'react-icons/fa';

function AddTask({list, changed, input}) {
    const [showAdd, setShowAdd] = useState(false);

    const addTask = (task) => {
        if(list){
            unsubscribeFirebase('tasks')
              .add({
                done: false,
                listId: list,
                task
              })
              .then(() => {
                changed('', 'task');
                setShowAdd(false);
              });
        }
    }

    return (
      <div className='addTask'>
        {showAdd && (
          <div className='addTask__content'>
            <input
              value={input}
              onChange={e => changed(e.target.value, 'task')}
              className='addTask__input'
              type='text'
              placeholder='Enter new Task'
            />
            <button className='addTask__button' onClick={() => addTask(input)}>
              Add
            </button>
            <span className='addTask__cancel' onClick={() => setShowAdd(false)}>
              Cancel
            </span>
          </div>
        )}
        <span className='addTask__icon'><FaPlus /></span>
        <span className='addTask__text' onClick={() => setShowAdd(!showAdd)}>
          Add new Task!
        </span>
      </div>
    );
}

export default AddTask
