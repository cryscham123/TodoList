import './app.scss';
import React, {useState} from 'react';
import Header from "./components/header/header";
import Input from "./components/input/input";
import Habits from "./components/habits/habits";

const App = () => {
  const defaultHabit = [{
    id: 1,
    name: "Reading",
    count: 0
  }, {
    id: 2,
    name: "Running",
    count: 0
  }, {
    id: 3,
    name: "Coding",
    count: 0
  },
  ];
  const [habits, setHabit] = useState(defaultHabit);
  const handleIncre = (index) => {
    const items = [...habits];
    items[index].count++;
    setHabit(items)
  }
  const handleDecre = (index) => {
    const items = [...habits];
    const count = items[index].count -1
    items[index].count = count <= 0 ? 0 : count;
    setHabit(items);
  }
  const handleDelete = (index) => {
    setHabit([...habits.filter((habit,i) => i !== index)])
  }
  const handleAdd = (name) => {
    setHabit([...habits, {id : Date.now(), name, count:0}])
  }
  const handleReset = () => {
    const items = [...habits];
    items.map(habit => {
      habit.count = 0;
      return habit;
    })
    setHabit(items);
  }
  return (
    <div className="grid">
      <Header count={habits.filter(habit => habit.count >= 1).length}/>
      <Input onAdd={handleAdd}/>
      <Habits
        habits={habits}
        onIncre={handleIncre}
        onDecre={handleDecre}
        onDelete={handleDelete}
      />
      <button
        className="grid__reset"
        onClick={handleReset}
      >Reset All</button>
      </div>
  );
}

export default App;
