
import './App.css';
import CounterExample from './components/CounterExample';
import ProfileList from './components/ProfileList';
import PropsExample from './components/PropsExample';
import UserComponent from './components/UserComponent';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Redux Toolkit Crash Course Demo</h1>
      <section style={{ marginBottom: 16 }}>
        <CounterExample />
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2>OpenSea Profiles (from store)</h2>
        <ProfileList />
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2>Props example</h2>
        <PropsExample title="Hello from Props" count={3} />
      </section>

      <section>
        <h2>Original UserComponent</h2>
        <UserComponent />
      </section>
      
      <section style={{ marginTop: 24 }}>
        <h2>Todo List (Redux-backed)</h2>
        <div style={{ maxWidth: 720, background: '#f8fafc', padding: 12, borderRadius: 8 }}>
          <div style={{ marginBottom: 12 }}>
            {/* Todo input and list components */}
            <TodoInput />
          </div>
          <TodoList />
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Book Inventory</h2>
        <div style={{ maxWidth: 720, background: '#fefefe', padding: 12, borderRadius: 8 }}>
          <div style={{ marginBottom: 12 }}>
            <BookForm />
          </div>
          <BookList />
        </div>
      </section>
    </div>
  );
}

export default App;
