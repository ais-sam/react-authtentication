

const Message = ({type,message}) => {
  return (
    <div className={`p-2 d-flex justify-content-center align-items-center ${type === "success" ? "success" : "failure"} mb-4`}>
        <p className={`${type === "success" ? "text-success" : "text-danger"} text-success fs-6 mb-0`}>{message}</p>
    </div>
  )
}

export default Message