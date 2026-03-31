import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Password validation (min 6 chars, 1 number, 1 special char)
  const validatePassword = (password) => {
    return /^(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validatePassword(form.password)) {
      newErrors.password =
        "Password must be 6+ chars, include number & special character";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Signup successful!");
    } else {
      setSuccess("");
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .form-box {
          background: white;
          padding: 30px;
          border-radius: 15px;
          width: 320px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: 0.3s;
        }

        input:focus {
          border-color: #667eea;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 10px;
          transition: 0.3s;
        }

        button:hover {
          background: #5a67d8;
        }

        .error {
          color: red;
          font-size: 13px;
          text-align: left;
        }

        .success {
          color: green;
          margin-top: 10px;
        }
      `}</style>

      <div className="container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Signup</h2>

          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Sign Up</button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </>
  );
}

export default SignupForm;
