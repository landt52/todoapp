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
        namesList: [],
        listInput: '',
        taskInput: ''
    }

    componentDidMount(){
        this.getLists();
    }

    getLists = async () => {
        unsubscribeFirebase('lists')
            .onSnapshot(snapShot => {
                const lists = snapShot.docs.map(list => ({
                  docId: list.id,
                  ...list.data()
                }));

                const namesList = {};
                lists.forEach(list => {
                  namesList[list.docId] = list.listName;
                });

                this.setState({lists, namesList})
            })
    }

    getTasks = async listId => {
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
        e ? this.setState({ 
            selectedList: e.target.getAttribute('value')
        }, () => {
            this.getTasks(this.state.selectedList)
        }) : this.setState({
            selectedList: ''
        })
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
              namesList={this.state.namesList}
              list={this.state.selectedList}
              changed={this.input}
              input={this.state.taskInput}
            />
          </div>
        );
    }
}

export default Page;