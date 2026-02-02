import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
const TableUser = (props) =>{

    const [listUsers, setListUsers] = useState([]) 
    useEffect(() =>{
        fetchListUsers();
    },[]);

    const fetchListUsers = async() =>{
        let res = await getAllUser();
        console.log(res)
        if(res.EC === 0){
            setListUsers(res.DT)
        }
    }
    console.log('render view')
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
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">view</button>
                                    <button className="btn btn-warning mx-3">update</button>
                                    <button className="btn btn-danger">delete</button>
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