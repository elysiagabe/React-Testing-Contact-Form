import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title*</label>
          <select 
            id="title" 
            name="title" 
            ref={register({ required: true })}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="yourMajesty">Your Majesty</option>
          </select>
        </div>


        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input 
            id="email"
            name="email" 
            ref={register({ required: true })} 
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="subscribed">Subscribe to our mailing list?</label>
          <input 
            type="checkbox" 
            placeholder="subscribed" 
            name="subscribed" 
            id="subscribed" 
            value="yes" 
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message" 
            ref={register({ required: false })} 
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" role="button" />
      </form>
    </div>
  );
};

export default ContactForm;
