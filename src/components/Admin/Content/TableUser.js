const TableUser = (props) =>{
    //const {lisUsers} = props.lisUsers;
    const {listUsers} = props; 
    
    return(
        <>
            <table className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&
                
                    listUsers.map((item, index) => {
                        return(
                            <tr key={`table-users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary" 
                                        onClick={() => props.handleShowViewUser(item)}>view</button>
                                    <button 
                                        className="btn btn-warning mx-3" 
                                        onClick={() => props.handleClickBtnUpdateUser(item)}>update</button>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => props.handleClickBtnDeleteUser(item)}>delete</button>
                                </td>
                            </tr>
                        ) 
                    })
                }
                {listUsers && listUsers.length === 0 && 
                    <tr>
                        <td colSpan={4}> 
                            Not found data
                        </td>
                    </tr>
                }
                
            </tbody>
            </table>
        </>
    )
}

export default TableUser;