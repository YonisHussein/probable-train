import { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [erroMessage, setErrorMessage] = useState('');
    
    const { name, email, message } = formState;
}