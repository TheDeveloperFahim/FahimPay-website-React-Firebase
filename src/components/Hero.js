export default function Hero() {
  return (
    <>
      <section className="main-hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 hero-content d-flex justify-content-center flex-column align-item-center">
              <h1 className="display-2">
                online payment made <br /> easy for you.
              </h1>
              <p className="main-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="rounded-pill w-75 me-3 form-control-text p-2"
                />
                <div className="input-group-text">get it now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 hero-images">
              <img
                src="./images/hero1.jpg"
                alt="heroImg"
                className="hero-img-bor"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroImg2"
                className="hero-img-bor2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
