import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
