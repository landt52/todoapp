import React, {useState} from 'react';
import unsubscribeFirebase from '../../firebase';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

export default function Checkbox({id, filter, select}) {
    const [checked, setChecked] = useState(false)

    const doneTask = () => {
        unsubscribeFirebase('tasks').doc(id).update({ done: true });
    }

    const selectTask = () => {
        select(id);
        setChecked(!checked);
    }

    return (
      <div className='checkbox-div'>
        {filter === 'current' ? (
          <span className='checkbox' onClick={doneTask}>
            <FaRegCircle />
          </span>
        ) : (
          <span className='checkbox' onClick={selectTask}>
            {checked ? <FaRegCheckCircle /> : <FaRegCircle />}
          </span>
        )}
      </div>
    );
}
