import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    // Observe changes in the Todo model and update state
    const subscription = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, []);

  function createTodo() {
    const content = window.prompt("Enter a new todo:");
    if (content) {
      client.models.Todo.create({ content });
    }
  }

  return (
    <div className="app-content">
      {/* Neighbors Page */}
      <div className="neighbors-page">
        <h2>Neighbors</h2>
        <p>Connect with people in your neighborhood!</p>
      </div>

      {/* Posts Page */}
      <div className="posts-page">
        <h2>Posts</h2>
        <p>See what's happening nearby!</p>
      </div>

      {/* Favorites Page */}
      <div className="favorites-page">
        <h2>Favorites</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <button onClick={createTodo}>+ New Favorite</button>
      </div>

      {/* Messages Page */}
      <div className="messages-page">
        <h2>Messages</h2>
        <p>Your opened conversations will appear here.</p>
      </div>

      {/* Test Deploy Message */}
      <div className="test-deploy">
        <p>Microgreens test deploy</p>
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next steps of this tutorial
        </a>
      </div>
    </div>
  );
}

export default App;
