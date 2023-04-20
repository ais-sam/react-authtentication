
import Row from './Row';

const Table = ({list}) => {
    const clients = list.filter(el=>el.role === "client")
    
  return (
    <div>
        <table className="table  mt-5 mx-auto border border-2">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Full name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            </tr>
        </thead>
        <tbody>
            {clients.map(client=> <Row key={client.id} client={client}/>)}
        </tbody>
        </table>
    </div>
  );
}

export default Table