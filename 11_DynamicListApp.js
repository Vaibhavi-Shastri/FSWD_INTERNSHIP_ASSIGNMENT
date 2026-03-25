import React, { useState } from "react";

function TaskList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTasks([newTask, ...tasks]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Task Manager</h2>

        {/* Input */}
        <div style={styles.inputBox}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        {/* Task List */}
        <ul style={styles.list}>
          {tasks.map((t) => (
            <li key={t.id} style={styles.item}>
              <span>{t.text}</span>
              <button onClick={() => deleteTask(t.id)} style={styles.deleteBtn}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: "400px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
  },

  heading: {
    marginBottom: "20px",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  addBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
    transition: "0.2s",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "8px 0",
    background: "#f7f7f7",
    borderRadius: "8px",
    transition: "0.2s",
  },

  deleteBtn: {
    background: "#ff4d4d",
    border: "none",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default TaskList;
