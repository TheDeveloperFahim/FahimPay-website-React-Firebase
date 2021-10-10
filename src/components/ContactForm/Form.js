export default function Form({ postUserData, getUserData, userData }) {
  return (
    <>
      <form onSubmit={postUserData} method="POST">
        {/* First name and Last name's input */}
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.fname}
            name="fname"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.lname}
            name="lname"
          />
        </div>
        {/* Phone number and Email address input */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Phone Number"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.phone}
            name="phone"
          />
          <input
            type="email"
            placeholder="Email Id"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.email}
            name="email"
          />
        </div>
        {/* user home adress input */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Add Address"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.address}
            name="address"
            className="user-address"
          />
        </div>
        {/* Enter your message textarea */}
        <div className="form-group">
          <textarea
            placeholder="Enter Your Message"
            required
            autoComplete="off"
            onChange={getUserData}
            value={userData.message}
            name="message"
          ></textarea>
        </div>
        {/* Are you agree with us */}
        <div className="tram-Condition">
          <div className="row">
            <div className="col-1 input-checkBox">
              <input type="checkbox" required />
            </div>
            <div className="col-10">
              <p className="main-para">
                I agree that the thapatechnicalpay may contact me at the email
                address or phone number above
              </p>
            </div>
          </div>
        </div>
        {/* Form submit button */}
        <button className="submit-btn">submit</button>
      </form>
    </>
  );
}
