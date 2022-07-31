import { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <section class="justify-content-center" id="contact-section">
            <h1>Contact: Yonis Hussein</h1>
            <hr></hr>
            <form class="justify-content-center">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">message: </label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} row="7"></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
                
            </form>
        </section>
    )
}

export default Contact;
