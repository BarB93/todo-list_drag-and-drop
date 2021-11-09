import React from 'react'
import TodoItemCard from '../TodoItemCard'
import {motion} from 'framer-motion'
import {TodoItem} from '../../types/todoTypes'

const spring = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
    duration: 0.25,
};

interface Props {
    item: TodoItem
}

const DoneTodo:React.FC<Props> = ({item}) => {
    return (
        <motion.li key={item.id} transition={spring} layout={true}
                   style={{margin: "24px 0"}}
        >
            <TodoItemCard item={item} />
        </motion.li >
    )
}

export default DoneTodo