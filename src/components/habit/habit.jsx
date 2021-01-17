import React from 'react';
import './habit.scss';

const Habit = ({ habit, habits, onIncre, onDecre, onDelete }) => {
    const handleIncre = () => {
        onIncre(habits.indexOf(habit))
    };
    const handleDecre = () => {
        onDecre(habits.indexOf(habit))
    };
    const handleDelete = () => {
        onDelete(habits.indexOf(habit))
    };
    return (
        <li className="habit">
            <div className="habit__main">
                <h3 className="habit__main__title">{habit.name}</h3>
                <div className="habit__main__count">{habit.count}</div>
            </div>
            <div className="habit__control">
                <button
                    className="habit__control__plus"
                    onClick={handleIncre}>
                    <i className="fas fa-plus"></i>
                </button>
                <button
                    className="habit__control__minus"
                    onClick={handleDecre}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <button
                    className="habit__control__trash"
                    onClick={handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Habit;