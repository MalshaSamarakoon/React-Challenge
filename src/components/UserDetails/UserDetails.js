import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetails.css";



function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${userId}`
        );
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error("API request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetail();
  }, [userId]);

  return (
    <div className="container">
      {user ? (
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card card border-0 shadow">
              <div className="card-sub p-1-9 p-xl-5 text-center">
                <div className="mb-4">
                  <h3 className="h1 mb-0" style={{ fontWeight: "bold" }}>
                    {user.firstName} {user.lastName}
                  </h3>
                </div>
                <div className="mb-5">
                <img src={user.image} alt={user.username} />
                </div>
                <div className="mb-4">
                  <p className="mb-0" style={{ fontSize: "26px" }}>
                    {user.company.title}
                  </p>
                </div>
                <p className="mb-0" >
                  {user.company.name}
                </p>
                <p className="mb-0" >
                  Department of {user.company.department}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 ">
            <div className="ps-lg-1-6 ps-xl-5">
              <div className="section section__one">
                <div className="mb-4 mt-5 bio-title ">
                  <h2 className="h3 mb-3 text-primary">Bio Details</h2>
                </div>
                <table className="bio-content" style={{ marginBottom: "40px" }}>
                  <tr>
                    <th>Full Name</th>
                    <td>
                      {user.firstName} {user.maidenName} {user.lastName}
                    </td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>{user.birthDate}</td>
                  </tr>
                  <tr>
                    <th>Blood Group</th>
                    <td>{user.bloodGroup}</td>
                    <th>Hair Color</th>
                    <td>{user.hair.color}</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>{user.height}</td>
                    <th>Weight</th>
                    <td>{user.weight}</td>
                  </tr>
                </table>
              </div>

              <div className="section section__two mt-5">
                <div className="row">
                  <div className="col-md-4 col-12 mb-4 mt-5">
                    <div className="card text-center border-0 mt-5">
                      <div className="card-sub  mt-5">
                        <i className="ti-pencil-alt icon-box medium rounded-3 mb-3"></i>
                        <h3 className="h5 mb-2">Education</h3>
                        <p className="mb-0">{user.university}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mb-4 mt-5 ">
                    <div className="card text-center border-0  mt-5">
                      <div className="card-sub  mt-5">
                        <i className="ti-user icon-box medium rounded-3 mb-3"></i>
                        <h3 className="h5 mb-2">Contact</h3>
                        <p>
                          {user.email}<br></br>
                          {user.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12 mb-4 mt-5">
                    <div className="card text-center border-0  mt-5">
                      <div className="card-sub  mt-5">
                        <i className="ti-pin-alt icon-box medium rounded-3 mb-3"></i>
                        <h3 className="h5 mb-2">Residence</h3>
                        <ul className="list-unstyled">
                          <li>
                            {user.address.address}, {user.address.city},
                            {user.address.state}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetails;
