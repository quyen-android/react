import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const TableUserPaginate = (props) =>{
    
    const {listUsers,pageCount} = props; 

    const handlePageClick = (event) => {
        console.log(
        `User requested page number ${event.selected}, which is offset`
        );
        props.fetchListUsersWithPaginate(event.selected+1);
        props.setCurrentPage(event.selected+1)
    }

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
                        <td colSpan={5}> 
                            Not found data
                        </td>
                    </tr>
                }
                
            </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                nextClassName='page-item'
                nextLinkClassName='page-link'

                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />
        </>
    )
}

export default TableUserPaginate;