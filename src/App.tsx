import './App.css';
import ReusableTable from './components/ReusableTable';
import SimpleInput from './components/SimpleInput';

function App() {
  const userData = [
    {
      id: 23123,
      name: 'Jude abaga',
      email: 'jude.abaga@abaga.com',
      date: 1237682923189813,
      status: {
        name: "pending"
      }
    },
    {
      id: 23128,
      name: 'Dev abaga',
      email: 'devabaga@abaga.com',
      date: 111237682923189813,
      status: {
        name: "verified"
      }
    },
  ]
  return (
    <div className="App">
      {/* <SimpleInput /> */}
      <ReusableTable data={userData}
        tableKeys={[
          { name: "id", path: ["id"] },
          { name: "name", path: ["name"] },
          { name: "email", path: ["email"] },
          { name: "status", path: ["status", "name"] },
        ]} />
    </div>
  );
}

export default App;
