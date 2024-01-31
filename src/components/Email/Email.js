import './email.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Email = () => {
    const [Loading, setLoading] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_0lwy0rp', 'template_n2489aw', form.current, '43AGi1ILerVz8_tsJ')
            .then((result) => {
                console.log(result.text);
                setLoading(false)
                alert('Your Email Has been Sent Successfully')
            }, (error) => {
                console.log(error.text);
            });
    };
    if (Loading) return <h1 className='loading'
    >LOADING ... </h1>
    return (
        <div className='email'>
            <h2>
                <span className='stroke'>READY TO</span>
                LEVEL UP
                YOUR BODY
                <span className='stroke'>WITH US</span>
            </h2>
            <form ref={form} onSubmit={sendEmail}>
                <input name='user-email' type="email" placeholder='Enter Email Here' />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Email