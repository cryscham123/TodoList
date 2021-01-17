import React from 'react';
import './habits.scss';
import Habit from '../habit/habit';

const Habits = ({ habits, onIncre, onDecre, onDelete }) => {
    const handleIncre = (i) => {
        onIncre(i)
    }
    const handleDecre = (i) => {
        onDecre(i);
      }
      const handleDelete = (i) => {
          onDelete(i);
      }
    return (
        <ul className="habits">
            {habits.map(habit => <Habit
                key={habit.id}
                habit={habit}
                habits={habits}
                onIncre={handleIncre}
                onDecre={handleDecre}
                onDelete={handleDelete}
            />)}
        </ul>
    );
};

export default Habits;