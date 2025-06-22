import React, { createContext, useContext, useState, useEffect } from 'react';
import Realm from 'realm';
import realmInstance, { TaskSchema } from '../db/realm';
import { Task } from '../types/Task';

type Filter = 'All' | 'Completed' | 'Pending';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTaskStatus: (id: Realm.BSON.ObjectId) => void;
  deleteTask: (id: Realm.BSON.ObjectId) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const useTask = () => useContext(TaskContext);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('All');

  const loadTasks = () => {
    const allTasks = realmInstance.objects<Task>('Task');
    let filtered = allTasks;

    if (filter !== 'All') {
      filtered = allTasks.filtered(`status = "${filter}"`);
    }

    setTasks([...filtered]);
  };

  useEffect(() => {
    loadTasks();
    realmInstance.addListener('change', loadTasks);
    return () => realmInstance.removeListener('change', loadTasks);
  }, [filter]);

  const addTask = (title: string) => {
    realmInstance.write(() => {
      realmInstance.create('Task', {
        _id: new Realm.BSON.ObjectId(),
        title,
        status: 'Pending',
      });
    });
  };

  const toggleTaskStatus = (id: Realm.BSON.ObjectId) => {
    const task = realmInstance.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      realmInstance.write(() => {
        task.status = task.status === 'Pending' ? 'Completed' : 'Pending';
      });
    }
  };

  const deleteTask = (id: Realm.BSON.ObjectId) => {
    const task = realmInstance.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      realmInstance.write(() => {
        realmInstance.delete(task);
      });
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};
