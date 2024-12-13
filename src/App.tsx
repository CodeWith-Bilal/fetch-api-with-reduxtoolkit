
import './App.css';
import CounterExample from './components/CounterExample';
import ProfileList from './components/ProfileList';
import PropsExample from './components/PropsExample';
import UserComponent from './components/UserComponent';

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
    </div>
  );
}

export default App;
