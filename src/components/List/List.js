import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import unsubscribeFirebase from '../../firebase';

function List({id, select}) {
    const [modalConfirm, setModalConfirm] = useState(false); 

    const deleteList = async listId => {
      try {
        await unsubscribeFirebase('tasks')
          .where('listId', '==', listId)
          .get()
          .then(snapShot => {
            snapShot.forEach(doc => doc.ref.delete());
          });

        await unsubscribeFirebase('lists')
          .doc(listId)
          .delete();

        select();
      } catch (error) {
        console.log(error);
      }
    };

    const handleClick = (e) => {
      e.stopPropagation();
      setModalConfirm(!modalConfirm);
    }

    return (
      <div>
        <span
          className={
            modalConfirm
              ? 'active sidebar__list-delete'
              : 'sidebar__list-delete'
          }
          onClick={handleClick}
        >
          <FaTrashAlt />
        </span>
        {modalConfirm && (
          <div className='delete-modal' onClick={(e) => e.stopPropagation()}>
            <div className='delete-modal__content'>
              <p>Are you sure you want to delete this list?</p>
              <button onClick={() => deleteList(id)}>Delete</button>
              <span onClick={handleClick}>Cancel</span>
            </div>
          </div>
        )}
      </div>
    );
}

export default List
