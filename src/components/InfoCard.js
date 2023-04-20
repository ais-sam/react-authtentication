

const InfoCard = ({user}) => {
  const {firstName, lastName, email, phone} = user
  return (
    <div className="card mt-5">
      <ul className="list-group text-start p-3">
            <li className="list-group-item border-0 mb-2"><span className='fw-bold'>First name: </span><span>{firstName}</span></li>
            <li className="list-group-item border-0 mb-2"><span className='fw-bold'>Last name: </span><span>{lastName}</span></li>
            <li className="list-group-item border-0 mb-2"><span className='fw-bold'>Email: </span><span>{email}</span></li>
            <li className="list-group-item border-0 mb-2"><span className='fw-bold'>Phone number : </span><span>{phone}</span></li>
        </ul>
    </div>
  );
}

export default InfoCard