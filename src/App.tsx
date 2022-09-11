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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      {/* <SimpleInput /> */}
      <ReusableTable data={userData}
        tableKeys={[
          { name: "id", path: ["id"], extraClasses: "bold" },
          { name: "name", path: ["name"] },
          { name: "email", path: ["email"] },
          { name: "status", path: ["status", "name"] },
        ]} />
    </div>
  );
}

export default App;
