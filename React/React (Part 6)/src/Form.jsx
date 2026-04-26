import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    let handleInputChange = (event) => {
        setFormData((prevData) => {
            return { ...prevData, [event.target.name]: event.target.value };
        });
    } 

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="enter full name"
                value={formData.fullName} onChange={handleInputChange} />
            <br />
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="enter username"
                value={formData.username} onChange={handleInputChange} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="enter password"
                value={formData.password} onChange={handleInputChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}