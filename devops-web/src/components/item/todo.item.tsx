import React from 'react';
import { MdDelete } from 'react-icons/md';

interface TodoItem {
    id: string;
    description: string;
    isChecked: boolean;
}

interface Props {
    todo: TodoItem;
    handleChecked: (id: string) => void;
    handleRemove: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, handleChecked, handleRemove }) => {
    let style = '';

    if (todo.isChecked)
        style = `line-through p-2 break-words text-slate-600 bg-slate-900`
    else
        style = `p-2 break-words text-slate-300`

    const onUpdate = async () => {
        await handleChecked(todo.id);
    }

    return (
        <div className=' flex w-64 justify-between items-center mt-4'>
            <div onClick={onUpdate} className='cursor-pointer bg-slate-800 h-auto max-w-lg w-10/12'>
                <p className={style}>{todo.description}</p>
            </div>
            <button onClick={() => handleRemove(todo.id)} className='w-6 h-6 ml-2 flex justify-center items-center'>
                <MdDelete style={{ color: '#DE6252', fontSize: 18 }} />
            </button>
        </div>
    )
}