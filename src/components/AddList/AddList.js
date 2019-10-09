import React, {useState} from 'react';
import unsubscribeFirebase from '../../firebase';
import {FaPlus} from 'react-icons/fa';

function AddList({changed, input}) {
    const [showAdd, setShowAdd] = useState(false);

    const addList = (listName) => { 
        if(input){
          unsubscribeFirebase('lists')
            .add({ listName })
            .then(() => {
              changed('', 'list')
              setShowAdd(false);
            })
        } 
    }

    return (
      <div className='addList'>
        {showAdd && (
          <div className='addList__content'>
            <input
              value={input}
              onChange={e => changed(e.target.value, 'list')}
              className='addList__input'
              type='text'
              placeholder='Enter new list name'
            />
            <button className='addList__button' onClick={() => addList(input)}>
              Add
            </button>
            <span className='addList__cancel' onClick={() => setShowAdd(false)}>
              Cancel
            </span>
          </div>
        )}
        <span className='addList__icon'><FaPlus /></span>
        <span
          className='addList__text'
          onClick={() => setShowAdd(!showAdd)}
        >Add new List!</span>
      </div>
    );
}

export default AddList
