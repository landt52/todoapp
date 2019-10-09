import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import unsubscribeFirebase from '../../firebase';
import Tasks from '../../components/Tasks/Tasks';

class Page extends Component {
    state = {
        lists: [],
        tasks: [],
        doneTasks: [],
        selectedList: '',
        selectedListName: '',
        listInput: '',
        taskInput: ''
    }

    componentDidMount(){
        this.getLists();
    }

    getLists = () => {
        unsubscribeFirebase('lists')
            .onSnapshot(snapShot => {
                const newLists = snapShot.docs.map(list => ({
                    docId: list.id,
                    ...list.data()
                }));

                this.setState({lists: newLists})
            })
    }

    getTasks = (listId) => {
        unsubscribeFirebase('tasks')
            .where('listId', '==', listId)
            .onSnapshot(snapShot => {
                const newTasks = snapShot.docs.map(task => ({
                    docId: task.id,
                    ...task.data()
            }));

            const tasks = newTasks.filter(task => task.done !== true);
            const doneTasks = newTasks.filter(task => task.done === true);

            this.setState({ tasks, doneTasks });
          }
        );
    }

    selectList = e => {
        this.setState({ 
            selectedList: e.target.getAttribute('value'),
            selectedListName: e.target.textContent
        }, () => {
            this.getTasks(this.state.selectedList)
        });
    }

    input = (value, type) => {
        if(type === 'list')
            this.setState({ listInput: value })
        if(type === 'task') 
            this.setState({ taskInput: value })
    }

    render() {
        return (
          <div className='page'>
            <Sidebar
              select={this.selectList}
              lists={this.state.lists}
              active={this.state.selectedList}
              changed={this.input}
              input={this.state.listInput}
            />
            <Tasks
              tasks={this.state.tasks}
              doneTasks={this.state.doneTasks}
              list={this.state.selectedList}
              listName={this.state.selectedListName}
              changed={this.input}
              input={this.state.taskInput}
            />
          </div>
        );
    }
}

export default Page;