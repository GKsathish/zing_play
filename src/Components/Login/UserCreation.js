import React, { useState, useEffect } from "react";

function CreateUserForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    full_name: "",
    email: "",
    role_id: "",
    inserted_user: "Bhushan",
  });
  const [roleOptions, setRoleOptions] = useState([]);
  const [error, setError] = useState("");
  const [usernameAvailability, setUsernameAvailability] = useState("");

  useEffect(() => {
    // Fetch user roles from the API
    fetch("http://172.22.9.85:8080/user-api/getUserRoles")
      .then((response) => response.json())
      .then((data) => {
        const rolesArray = Object.entries(data.data).map(([id, name]) => ({
          id,
          name,
        }));
        setRoleOptions(rolesArray);
      })
      .catch((error) => console.error("Error fetching user roles:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "username" && value.length >= 8) {
      fetch(`http://172.22.9.85:8080/user-api/checkUserAvailability/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setUsernameAvailability(data.status);
          setError(data.status === "FAILED" ? data.description : "");
        })
        .catch((error) => {
          console.error("Error checking username availability:", error);
          setError("Error checking username availability");
        });
    } else {
      setUsernameAvailability("");
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, full_name, email, role_id, inserted_user } =
      formData;

    if (usernameAvailability !== "FAILED") {
      fetch("http://172.22.9.85:8080/user-api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          full_name,
          email,
          role_id,
          inserted_user,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "SUCCESS") {
            window.location.reload();

            console.log("User created successfully:", data);
            // You can handle success, like showing a success message or redirecting
          } else {
            setError(data.description || "Error creating user");
          }
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          setError("Error creating user");
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row m-3">
        <div className="col p-5 d-flex flex-column  justify-content-center align-items-center">
          <h1>User Creation</h1>
          <form onSubmit={handleSubmit} className="card  m-5 shadow p-5 w-75">
            <label className="form-label ">
              Username:
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {error && <p className="text-danger">{error}</p>}
            </label>
            {usernameAvailability === "FAILED" && (
              <p className="text-danger">Username already exists</p>
            )}
            {usernameAvailability === "SUCCESS" && (
              <p className="text-success">Username available</p>
            )}
            <br />
            <label className="form-label ">
              Password:
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form-label m-1">
              Full Name:
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="form-control"
              />
            </label>
            <br />
            <label className="form-label m-1">
              Email:
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form-label">
              Role ID:
              <select
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Role</option>
                {roleOptions.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <button type="submit" className="btn btn-success text-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;
