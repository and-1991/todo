import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {Button, Input, Table, Space, Tag, Modal} from 'antd';
import {
    Wrapper,
    AddTodo,
    TodosTable
} from './style';
import {
    addTodo,
    deleteTodo,
    editTodo,
    markTodo
} from '../../../redux/Todos/todos.actions';

const defaultTodo = {
    id: null,
    todo: null,
    status: null
}

const Todos = ({ todos, add, del, mark, edit }) => {
    const [todo, setTodo] = useState(null)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [editTodo, setEditTodo] = useState(defaultTodo)

    const handleOk = () => {
        const newArr = data.map(el => {
            if(el.id === editTodo.id) {
                return {
                    ...el,
                    todo: editTodo.todo
                }
            }
            return {
                ...el
            }
        })
        edit(newArr)
        setEditTodo(defaultTodo)
        setOpen(false);
    };

    const handleCancel = () => {
        setEditTodo(defaultTodo)
        setOpen(false);
    };

    const editValue = e => {
        setEditTodo({
            ...editTodo,
            todo: e.target.value
        })
    }

    const editData = todo => {
        setEditTodo(todo)
        setOpen(true)
    }

    const addTodo = useCallback(() => {
        if(todo !== '' && todo !== null) {
            add({id: data.length + 1, text: todo});
            setTodo('')
        }}, [add, data.length, todo]);


    const deleteTodo = id => {
        const newArr = data.filter(el => el.id !== id)
        del(newArr)
    };

    const markTodo = (id, status) => {
        const statusTodo = status === 'done'? 'process': 'done'
        const newArr = data.map(el => {
            if(el.id === id) {
                return {
                    ...el,
                    status: statusTodo
                }
            }
            return {
                ...el
            }
        })
        mark(newArr)
    };


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center'
        },
        {
            title: 'Todo',
            align: 'center',
            dataIndex: 'todo',
            width: 500
        },
        {
            title: 'Status',
            align: 'center',
            width: 150,
            render: todo => {
                const color = todo.status === 'done'? '#f50' : '#2db7f5'
                return (
                        <div>
                            <Tag color={color}>{todo.status}</Tag>
                        </div>
                )
            }
        },
        {
            title: 'Action',
            align: 'center',
            render: todo => {
                return (
                     <Space size="middle">
                         <Button onClick={() => editData(todo)}>Edit</Button>
                         <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                         <Button onClick={() => markTodo(todo.id, todo.status)}>Mark {todo.status === 'process' ? 'done' : 'process'}</Button>
                     </Space>
                )
            }
        },
    ];

    useEffect(() => {
        setData(todos)
    }, [todos]);

    return (
            <>
            <Wrapper>
                <AddTodo>
                    <Input
                            placeholder="add todo"
                            allowClear
                            size="large"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            onPressEnter={addTodo}
                    />
                    <Button
                            size="large"
                            onClick={addTodo}
                    >
                        Add todo
                    </Button>
                </AddTodo>
                <TodosTable>
                    <Table columns={columns} dataSource={data} />
                </TodosTable>
            </Wrapper>
                <Modal
                        closable={false}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        visible={open}
                >
                    <Input value={editTodo.todo} onChange={editValue}/>

                </Modal>
                </>
    )
}

const stateRedux = state => (
        {
            todos: state.todos.list
        }
)

const dispatchRedux = dispatch => (
    {
        add: (data) => dispatch(addTodo(data)),
        del: (data) => dispatch(deleteTodo(data)),
        mark: (data) => dispatch(markTodo(data)),
        edit: (data) => dispatch(editTodo(data))
    }
)

export default connect(stateRedux, dispatchRedux)(Todos)
