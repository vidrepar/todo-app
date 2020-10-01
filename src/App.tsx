import React, { useState } from 'react';
import './App.css';
import { useCreateTodoMutation, useGetGroupsSubscription, useGetTodosSubscription } from './generated/graphql';

function App() {
  const [groupId, setGroupId] = useState<string>('89ed2071-e5a2-42b7-8ebe-0bb6ec7cca7a');
  const [todo, setTodo] = useState<TodoInterface>({ title: '', description: '', group_id: '' });
  const { data, loading } = useGetTodosSubscription({
    variables: {
      group_id: groupId,
    }
  });
  const getGroups = useGetGroupsSubscription();
  const [createTodoFn] = useCreateTodoMutation({
    onError: (err) => {
      console.error(err);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <br/>
      <input
        placeholder="Title"
        onChange={e => setTodo({ ...todo, title: e.target.value })}
        type="text"
      />

      <input
        placeholder="Description"
        onChange={e => setTodo({ ...todo, description: e.target.value })}
        type="text"
      />

      <button
        onClick={() => createTodoFn({
          variables: {
            title: todo.title || '',
            description: todo.description || '',
            group_id: groupId,
          },
        })}
      >
        + Add
      </button>

      <br/>
      <br/>
      <hr/>
      <br/>

      <div>{
        loading
          ? '...loading users'
          : <div>
              {data?.todos.map((todo, key) => (
                <div key={key}>
                  <div>{todo.title}</div>
                  <small>By: </small>
                  <small>
                    <b>
                      {(todo.group.group_users.map(((user, key) => (
                        <span key={key}>
                          {user.user.email}
                        </span>
                      ))))}
                    </b>
                  </small>
                </div>
              ))}
            </div>
      }</div>

      <br/>
      <hr/>
      <br/>

      <div>{
        getGroups.loading
          ? '...loading groups'
          : <div>{getGroups.data?.groups.map((group, key) => (
              <div key={key}>
                <small>Name: {group.name}</small>
                <br/>
                <small>Id: <b>{group.id}</b></small>
                <br/>
                <small>{(group.todos_aggregate.aggregate?.count || 0) > 0
                  ? `${group.todos_aggregate.aggregate?.count} Todos`
                  : 'No Todos Yet'
                }</small>
                <br/>
                <button
                  onClick={() => setGroupId(group.id)}
                >
                  Change Group
                </button>
                <br/>
                <br/>
              </div>
          ))}</div>
      }</div>
    </>
  );
}

export default App;

interface TodoInterface {
  title?: string;
  description?: string;
  group_id: string
}
