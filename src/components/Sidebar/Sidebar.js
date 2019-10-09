import React, {useState} from 'react';
import {FaChevronCircleDown} from 'react-icons/fa';
import List from '../List/List';
import AddList from '../AddList/AddList';

export default function Sidebar({select, lists, active, changed, input}) {
    const [show, setShow] = useState(true);
    
    return (
      <div className='sidebar'>
        <div className='sidebar__list-dropdown' onClick={() => setShow(!show)}>
          <span>
            <FaChevronCircleDown className={!show && 'hide-lists'}/>
          </span>
          <h2>Lists</h2>
        </div>
        {
          show && <ul className='sidebar__lists' onClick={select}>
          {lists.map(list => (
            <li
              key={list.docId}
              value={list.docId}
              className={
                active && active.toString() === list.docId
                  ? 'active sidebar__list'
                  : 'sidebar__list'
              }
            >
              {list.listName}
              <List id={list.docId} />
            </li>
          ))}
        </ul>
        }
        <AddList changed={changed} input={input} />
      </div>
    );
}
