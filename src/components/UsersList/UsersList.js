import React, { useState, useEffect } from "react";
import "./UsersList.css";
import axios from "axios"; 
import ReactPaginate from "react-paginate";

function generateRandomColor() {
  let color = "rgba(";
  for (let i = 0; i < 3; i++) {
    color += `${Math.floor(Math.random() * 256)},`;
  }
  color += "0.4)";
  return color;
}

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          console.error("API request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user-card-list">
           
          <div key={user.id} className="user-card">
            <div
              className="user-card-upper"
              style={{ backgroundColor: generateRandomColor() }}
            >
              <div className="user-avatar">
                <img src={user.image} alt={user.username} />
              </div>
            </div>
            <div className="user-card-lower">
              <h2 className="user-name">
                {user.firstName} {user.lastName}
              </h2>
              <p className="user-email">{user.email}</p>
              <p className="user-phone">{user.phone}</p>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="user-card-list">
    {displayUsers}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default UsersList;
