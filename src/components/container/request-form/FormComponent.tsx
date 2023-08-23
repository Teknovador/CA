import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

const FormComponent = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [itrAmount, setItrAmount] = useState('ITR Amount:- 1999 RS');
    const [message, setMessage] = useState('');
    const [carddetail, setCarddetail] = useState(false);
    const [password, setPassword] = useState('');
    const [stripeCardPayment, setStripeCardPayment] = useState(false);
    const [enquiryUserPresentCard, setEnquiryUserPresentCard] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [highlightEmptyFields, setHighlightEmptyFields] = useState(false);

    const makePayment = async () => {
        try {
            const response = await fetch('http://[::1]:5000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.status === 'succeeded') {
                alert('Payment successful!');
                setStripeCardPayment(false);
            } else {
                alert('Payment failed!');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('Payment failed!');
            setStripeCardPayment(false);
        }
    };

    const handleDone = () => {
        setCarddetail(false);
        setEnquiryUserPresentCard(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            setStripeCardPayment(true);
        } else {
            setHighlightEmptyFields(true);
        }
    };

    const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
    const validateForm = () => {
        return name.trim() !== '' && PHONE_REGEX.test(phone)  && /\S+@\S+\.\S+/.test(email);
      };

    const handleEnquiryNow = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            if (cookies.userData.name !== name || cookies.userData.phone !== phone || cookies.userData.email !== email) {
                const defaultPassword = name.trim().substring(0, 4) + phone.substring(0, 3);
                setPassword(defaultPassword);
                setEnquiryUserPresentCard(false);
                setCarddetail(true)
                setCookie('userData', { name, phone, email, message })

            }
            else {
                setEnquiryUserPresentCard(true)
                setCarddetail(false);
            }
        } else {
            setHighlightEmptyFields(true);
        }
    };

    return (
        <>
            {
                (carddetail === false && stripeCardPayment === false && enquiryUserPresentCard === false &&
                    <div className="pay-now">
                        <h3 className="mb-xl-5 mb-4">Get This Service</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={`single-input-inner ${name.trim() === '' ? 'highlight-empty' : ''}`}>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={`single-input-inner ${phone.trim() === '' ? 'highlight-empty' : ''}`}>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Phone"
                                    value={phone}
                                    className="form-control"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className={`single-input-inner ${email.trim() === '' || !/\S+@\S+\.\S+/.test(email) ? 'highlight-empty' : ''}`}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="single-input-inner">
                                <input
                                    type="text"
                                    id="itrAmount"
                                    placeholder="ITR Amount:- 1999 RS"
                                    value={itrAmount}
                                    readOnly
                                />
                            </div>
                            <div className="single-input-inner">
                                <textarea
                                    id="message"
                                    placeholder="Write Your Message...."
                                    value={message}
                                    className="form-control"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="btn-wrap">
                                <button
                                    type="submit"
                                    className="btn btn-black border-radius"
                                    id="payNow"
                                >
                                    Pay Now
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-black border-radius"
                                    style={{ marginLeft: '20px' }}
                                    onClick={handleEnquiryNow}
                                >
                                    Enquiry
                                </button>
                            </div>
                        </form>
                    </div>

                )
            }
            {
                carddetail === true && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Card Details</h5>
                            <div className="card-text">
                                <p><strong>Dashboard URL:</strong> http://localhost:3000/</p>
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Default-Pass:</strong>{password}</p>
                                <p><strong>Message:</strong> {message}</p>
                                <h6><strong>Save  details for futher use!!</strong></h6>
                            </div>
                            <button
                                type="button"
                                className="btn btn-black border-radius"
                                style={{ marginLeft: '20px' }}
                                onClick={handleDone}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )
            }

            {
                stripeCardPayment && (
                    <StripeCheckout
                        stripeKey="pk_test_51NfJ0hSFuUy0dv5y8U4JXfcwSjUaxT7UMOCoRtIhVscL4zKK3TDldxNWOmyeEk3ceb9a00doOh7iUwQkyvFZ1rf500MyOZRfle"
                        token={makePayment}
                        name="ITR Billing"
                        amount={10000}
                        shippingAddress
                        billingAddress // Close modal on cancel
                    />
                )}
            {
                enquiryUserPresentCard &&
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Card Details</h5>
                        <div className="card-text">
                            <p><strong>Dashboard URL:</strong> We have the enquiry from same numberwe will contact you within 24Hrs</p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-black border-radius"
                            style={{ marginLeft: '20px' }}
                            onClick={handleDone}
                        >
                            Done
                        </button>
                    </div>
                </div>

            }
        </>
    );


};

export default FormComponent;
