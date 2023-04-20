

const Row = ({client}) => {
  return (
    <tr>
      <th scope="row">{client.id}</th>
      <td>{`${client.firstName} ${client.lastName}`}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
    </tr>
  );
}

export default Row