import "./App.scss";
import { GoTriangleRight } from "react-icons/go";

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="logo-header">
          <img src={require("./assets/images/logo/Group 1.png")} alt="logo" />
          <img src={require("./assets/images/logo/Locus.png")} alt="logo" />
        </div>
        <nav aria-label="Primary">
          <ul role="navigation">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <button>Sign Up</button>
      </header>

      <main>
        <section className="main">
          <div className="container">
            <div className="even-columns">
              <div className="main__title">
                <h1>Get the inspiration of interior design here</h1>
                <p>
                  architecture not only about engineering, it even lands to art
                  and aesthetics. With us, you will get a residentical design
                  with an extraordinary touch of art.
                </p>
                <button>Let’s go</button>
              </div>
              <div>
                <img src={require("./assets/images/main.png")} alt="flowers" />
              </div>
            </div>
          </div>
        </section>

        <section className="section__2">
          <div className="container">
            <h1>How it works</h1>
            <p>Spice up your space even simpler than you think</p>

            <div className="even-columns">
              <div>
                <img src={require("./assets/images/video.png")} alt="video" />
              </div>
              <div>
                <div className="big-btn">
                  <div className="small-btn">
                    <div>
                      <img
                        src={require("./assets/images/play.png")}
                        alt="video"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  <GoTriangleRight />
                  We provide design and build for commercial building, interior
                  and furniture to improve the better life.{" "}
                </p>
                <p>see video</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__3">
          <div className="container">
            <div className="even-columns">
              <div>
                <img src={require("./assets/images/sofa.png")} alt="sofa" />
              </div>
              <div>
                <h1>
                  Our mission is to
                  <br />
                  deliver aesthetic visual
                  <br />
                  for your home
                </h1>
                <p>
                  By applying bacis psychology principles, we are going to
                  explain how perception works and how we can use this
                  understanding to maximise the space that we occupy in our
                  homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__4">
          <div className="container">
            <h1>Our project </h1>
            <p>Introducing our first official project</p>
            <div className="line"></div>
            <div className="line"></div>
            <div className="even-columns">
              <div>
                <h1>Project Livingroom</h1>
                <p>
                  A simple guide to create the perfect livingro- om for . Night
                  Watc works beautifully in a wi- de gamut of arrangements.
                </p>
                <img
                  src={require("./assets/images/prog_1.png")}
                  alt="project"
                />
              </div>
              <div>
                <img
                  src={require("./assets/images/proj_2.png")}
                  alt="project"
                />
                <h1>Project workspace</h1>
                <p>
                  A simple guide to create the perfect livingro- om for . Night
                  Watc works beautifully in a wi- de gamut of arrangements.
                </p>
              </div>
              <div>
                <h1>Library</h1>
                <p>
                  A simple guide to create the perfect livingro- om for . Night
                  Watc works beautifully in a wi- de gamut of arrangements.
                </p>
                <img
                  src={require("./assets/images/proj_3.png")}
                  alt="project"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section__5">
          <div className="container">
            <h1>Testimonial</h1>
            <div className="brands">
              <img
                src={require("./assets/images/brands/image 4.png")}
                alt="brands"
              />

              <img
                src={require("./assets/images/brands/image 3.png")}
                alt="brands"
              />
              <img
                src={require("./assets/images/brands/image 2.png")}
                alt="brands"
              />
              <img
                src={require("./assets/images/brands/image 5.png")}
                alt="brands"
              />
            </div>
          </div>
        </section>

        <section className="section__6">
          <div className="container">
            <div className="even-columns">
              <div>
                <img src={require("./assets/images/worker.png")} alt="worker" />
              </div>
              <div>
                <div className="numbers">
                  <div>
                    <span>105</span>
                    <span>project</span>
                    <span>done</span>
                  </div>
                  <div>
                    <span>12</span>
                    <span>years of</span>
                    <span>experience</span>
                  </div>
                  <div>
                    <span>10+</span>
                    <span>big company</span>
                    <span>partnership</span>
                  </div>
                  {/* <img
                    src={require("./assets/images/105 project done (1).png")}
                    alt="static"
                  />
                  <img
                    src={require("./assets/images/12 years of experience.png")}
                    alt="static"
                  />
                  <img
                    src={require("./assets/images/10+ big company partnership.png")}
                    alt="static"
                  /> */}
                </div>
                <p>
                  "Not able to tell you how happy I am with interior design.
                  Interior design has completely surpassed our expectations.
                  Interior design saved my business. Interior design is worth
                  much more than I paid."
                </p>
                <p>- Roscoe</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__7">
          <div className="container">
            <div className="even-columns">
              <div>
                <h1>Contact Us</h1>
                <p>Have any questions? Want help before getting started?</p>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div>
                <form>
                  <input type="text" placeholder="Full name" />
                  <input type="email" placeholder="Email address" />
                  <input type="text" placeholder="Description" />
                  <button>Send now</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <footer>
            <p>ikova.ua@gmail.com</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
