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
          <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 ">
            <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 custom-card">
              <div className="card border-0 shadow">
                <img src={user.image} alt={user.username} />
                <div className="card-sub p-1-9 p-xl-5 text-center">
                  <div className="mb-4">
                    <h3 className="h1 mb-0 text-center">
                      {user.firstName} {user.lastName}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <p className="mb-0" style={{ fontSize: "20px" }}>
                      {user.company.title}
                    </p>
                  </div>
                  <p className="mb-0" style={{ fontSize: "20px" }}>
                    {user.company.name}
                  </p>
                  <p className="mb-0" style={{ fontSize: "20px" }}>
                    Department of {user.company.department}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 pl-7">
            <div className="ps-lg-1-6 ps-xl-5">
              <div className="section section__one">
                <div className="mb-5">
                  <div className="row">
                    <div className="text-start mb-1-6">
                      <h2 className="h3 mb-5 text-primary">Bio Details</h2>
                    </div>
                    <table className="bio-details">
                      <tr>
                        <th>Full Nmae</th>
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
                </div>
                <div className="mb-5">
                  <div className="row"></div>
                </div>
              </div>

              <div className="section section__two">
                <div className="mb-5" style={{ marginTop: "40px" }}>
                  <div className="row">
                    <div className="col-sm-6 col-xl-4 mt-4 ">
                      <div className="card text-center border-0">
                        <div className="card-sub">
                          <i className="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                          <h3 className="h5 mb-3">Education</h3>
                          <p className="mb-0">
                            <p> {user.university}</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 mt-4">
                      <div className="card text-center border-0">
                        <div className="card-sub">
                          <i className="ti-user icon-box medium rounded-3 mb-4"></i>
                          <h3 className="h5 mb-3">Contact</h3>
                          <p>
                            {" "}
                            {user.email}
                            {user.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 mt-4">
                      <div className="card text-center border-0">
                        <div className="card-sub">
                          <i className="ti-pin-alt icon-box medium rounded-3 mb-4"></i>
                          <h3 className="h5 mb-3">Residence</h3>
                          <ul className="list-unstyled mb-4">
                            <p>
                              {user.address.address}, {user.address.city},
                              {user.address.state}
                            </p>
                          </ul>
                        </div>
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
