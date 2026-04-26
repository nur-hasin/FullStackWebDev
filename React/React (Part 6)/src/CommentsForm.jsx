// import { useState } from "react";
import { useFormik } from 'formik';

export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required username';
        } else if (values.username.length > 15) {
            errors.username = 'Must be 15 characters or less';
        }

        if (!values.remarks) {
            errors.remarks = 'Required remarks';
        } else if (values.remarks.length > 200) {
            errors.remarks = 'Must be 200 characters or less';
        }

        return errors;
    }; 

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validate,
        onSubmit: values => {
            addNewComment(values);
        },
    });

    // let [isValid, setIsValid] = useState(true);

    // let handleInputChange = (event) => {
    //     setFormData((prevData) => {
    //         return { ...prevData, [event.target.name]: event.target.value };
    //     });
    // }

    // let handleSubmit = (event) => {
    //     event.preventDefault();
        // if (formData.username && formData.remarks) {
            // addNewComment(formData);
            // setFormData({
            //     username: "",
            //     remarks: "",
            //     rating: 5
            // });
        // } else {
        //     setIsValid(false);
        // }
    // }

    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="enter username"
                    value={formik.values.username} onChange={formik.handleChange} />
                {formik.errors.username ? <p style={{ color: "red" }}>{formik.errors.username}</p> : null}
                <br />
                <label htmlFor="remarks">Remarks:</label>
                <textarea id="remarks" name="remarks" placeholder="enter new remarks"
                    value={formik.values.remarks} onChange={formik.handleChange} />
                {formik.errors.remarks ? <p style={{ color: "red" }}>{formik.errors.remarks}</p> : null}
                <br />
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" name="rating" placeholder="enter rating"
                    min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
                <br />
                {/* {!isValid && <p style={{ color: "red" }}>Please fill in all fields.</p>} */}
                <button type="submit">Comment</button>
            </form>
        </div>
    );
}