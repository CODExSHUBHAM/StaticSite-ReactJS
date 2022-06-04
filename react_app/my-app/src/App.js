import './App.css';
import quote from '../src/quote.svg';
import waves from '../src/waves.svg';
import elegance from '../src/pexels-photo-6730458.jpeg';
import jeffery from '../src/1.jpeg';
import ann from '../src/3.jpeg';
import alex from '../src/2.jpeg';
import roxie from '../src/4.jpeg';
import testimonial1 from '../src/pexels-photo-6139560.jpeg';
import testimonial2 from '../src/pexels-photo-5944321.jpeg';
import facebook from '../src/facebook.svg';
import instgram from '../src/instagram.svg';
import twitter from '../src/twitter.svg';
import app from '../src/app.svg';
import cloud from '../src/cloud.svg';
import globe from '../src/globe.svg';
import data from '../src/data.svg';
import infinity from '../src/infinity.svg';
import server from '../src/server.svg';

function App() {

  const counters = document.querySelectorAll('.counter');
  const speed = 500;


  counters.forEach(counter => {
      const updatecount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const inc = target / speed;

          if(count < target){
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updatecount,1);
          } else{
              count.innerText = target;
          }
      }
       
      updatecount();
  });

  return (
    <div className="App">

      <div className="min-h-screen overflow-hidden font-sans">

        {/* <!-- Main Parent Section  --> */}

        <main className="bg-primary">

          {/* <!-- Hero Section --> */}

          <div
            className="bg-hero bg-cover bg-center flex flex-col justify-end min-h-screen tab:min-h-[65vh] lap:h-[900px] text-white py-0 px-5 tab:px-16 lap:px-20 desk:px-96">

            <img className="w-20 mb-6 fill-current text-white" src={quote} alt=""></img>

            <p className="mb-6 text-base max-w-lg">
              Lectus quam id leo in. Proin fermentum leo vel orci porta non pulvinar. Eget sit amet tellus cras
              adipiscing enim. Volutpat odio facilisis mauris sit amet massa vitae. Adipiscing enim eu turpis
              egestas pretium.
            </p>

            <h3 className="text-base font-bold mb-20 lap:mb-40"> -Joe Smith SEO</h3>


          </div>

          {/* <!-- Section 1 --> */}

          <div className="sec1 py-20 px-5 tab:px-16 lap:px-20 desk:px-96">

            <img className="ext-secondary fill-current w-64 mb-10" src={waves} alt=""></img>

            <p
              className="text-3xl tab:text-5xl font-serif text-white font-light max-w-3xl mb-10 tracking-[2px] tab:leading-[52.8px]">
              We have framework agreements with many large and medium-sized players
            </p>

            <button
              className="bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
              LEARN MORE
            </button>

          </div>

          {/* <!-- Section 2 --> */}

          <div className="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 sec2 text-left">

            <h1 className="p-2 tab:p-6 text-white font-serif text-3xl tab:text-5xl font-bold tab:leading-[67.2px]">
              We dwelling elegance do shutters apetite yourself diverted.
            </h1>

            <div className="flex flex-col tab:flex-row items-center tab:justify-around ">

              <div className="p-6 ">

                <h2 className="text-lg font-bold tracking-button text-secondary mb-5">SAMPLE HEADLINNE</h2>

                <p className="text-base text-[#999999] lap:w-10/12">
                  While we were not the first home cleaning company in the UK, we take pride in being market
                  leaders in introducing an instant online booking system plus the facility for our customers
                  to login and control their cleaning service 24/7, 365 days a year putting you in complete
                  control. This development is yet again another example of the innovative approach Daily
                  Poppins takes to addressing its customer needs.
                </p>

              </div>

              <div className="p-6  flex items-center justify-center">

                <div className="flex items-center w-72 lap:w-80 h-72 lap:h-80 overflow-hidden rounded-full ">
                  <img src={elegance} alt=""></img>
                </div>

              </div>

              <div className="p-6">

                <h2 className="text-lg font-bold tracking-button text-secondary mb-5">SAMPLE HEADLINNE</h2>

                <p className="text-base text-[#999999] mb-4 lap:w-[115%]">
                  As a result of our philosophy to be the most forward thinking home cleaning company and our
                  focus on understanding customer needs, we have and will continue to expand across the UK
                  with franchises in the southwest of England to the north east of Scotland with over 50
                  territories nationwide.
                </p>

                <button
                  className="font-sans bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
                  Learn More
                </button>

              </div>

            </div>

          </div>

          {/* <!-- Section 3 (TEAM) --> */}

          <div className="bg-secondary pr-5 tab:pr-16 lap:pr-20 desk:pr-96 ">

            <div className="py-20 pl-5 tab:pl-16 lap:pl-20 desk:pl-96 bg-primary">

              <div className="grid grid-col-1 lap:grid-cols-2 lap:grid-rows-2 items-center justify-center">

                <div className="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img className="w-64 h-64 rounded-full mb-10 tab:mb-0" src={jeffery} alt=""></img>

                  <div className="text-center text-white tab:pl-6">

                    <h2 className="font-serif text-xl font-normal mb-2">Jeffery Brown</h2>
                    <h3 className="mb-4 text-base font-bold text-secondary">CREATIVE LEADER</h3>
                    <p className="mb-4 text-sm leading-btn italic">
                      Sample text. Click to select the text box. Click again or double click to start
                      editing the text.
                    </p>

                    <div className="flex fill-current justify-evenly">

                      <img className="w-8 h-8" src={facebook} alt=""></img>

                      <img className="w-8 h-8" src={instgram} alt=""></img>

                      <img className="w-8 h-8" src={twitter} alt=""></img>

                    </div>


                  </div>

                </div>

                <div className="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img className="w-64 h-64 rounded-full mb-10 tab:mb-0" src={ann} alt=""></img>

                  <div className="text-center text-white tab:pl-6">

                    <h2 className="font-serif text-xl font-normal mb-2">Ann Richmond</h2>
                    <h3 className="mb-4 text-base font-bold text-secondary">MANAGER</h3>
                    <p className="mb-4 text-sm leading-btn italic">
                      Sample text. Click to select the text box. Click again or double click to start
                      editing the text.
                    </p>

                    <div className="flex fill-current justify-evenly">

                      <img className="w-8 h-8" src={facebook} alt=""></img>

                      <img className="w-8 h-8" src={instgram} alt=""></img>

                      <img className="w-8 h-8" src={twitter} alt=""></img>

                    </div>


                  </div>

                </div>

                <div className="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img className="w-64 h-64 rounded-full mb-10 tab:mb-0" src={alex} alt=""></img>

                  <div className="text-center text-white tab:pl-6">

                    <h2 className="font-serif text-xl font-normal mb-2">Alex Grinfield</h2>
                    <h3 className="mb-4 text-base font-bold text-secondary">PROGRAMMING GURU</h3>
                    <p className="mb-4 text-sm leading-btn italic">
                      Sample text. Click to select the text box. Click again or double click to start
                      editing the text.
                    </p>

                    <div className="flex fill-current justify-evenly">

                    <img className="w-8 h-8" src={facebook} alt=""></img>

                    <img className="w-8 h-8" src={instgram} alt=""></img>

                    <img className="w-8 h-8" src={twitter} alt=""></img>

                    </div>


                  </div>


                </div>

                <div className="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img className="w-64 h-64 rounded-full mb-10 tab:mb-0" src={roxie} alt=""></img>

                  <div className="text-center text-white tab:pl-6">

                    <h2 className="font-serif text-xl font-normal mb-2">Roxie Swanson</h2>
                    <h3 className="mb-4 text-base font-bold text-secondary">SALES MANAGER</h3>
                    <p className="mb-4 text-sm leading-btn italic">
                      Sample text. Click to select the text box. Click again or double click to start
                      editing the text.
                    </p>

                    <div className="flex fill-current justify-evenly">

                    <img className="w-8 h-8" src={facebook} alt=""></img>

                    <img className="w-8 h-8" src={instgram} alt=""></img>

                    <img className="w-8 h-8" src={twitter} alt=""></img>

                    </div>


                  </div>

                </div>

              </div>

              <div className="text-left text-white">

                <h1 className="text-3xl tab:text-5xl font-bold font-serif p-5 ">Our Perfect Team</h1>

                <p className="p-5 text-base tab:w-5/12">
                  Sample text. Click to select the text box. Click again or double click to start editing
                  the text.
                </p>

                <button
                  className="bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn ml-5">
                  CALL NOW
                </button>
              </div>

            </div>

          </div>

          {/* <!-- Section 4 (FEATURES) --> */}

          <div className="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 className="text-3xl tab:text-5xl font-normal font-serif p-7">
              Hosting is even better with all these <b>FREE</b> features
            </h1>

            <div className="grid grid-col-1 tab:grid-cols-2 lap:grid-cols-3 tab:grid-rows-3 lap:grid-rows-2">

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={data} alt=""></img>

                <h2 className="text-xl text-secondary font-normal tracking-wider mb-6 font-sans-m">UNLIMITED STORAGE</h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>

              </div>

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={infinity} alt=""></img>


                <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">UNLIMITED
                  BANDWIDTH
                </h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>

              </div>

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={globe} alt=""></img>


                <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">DOMAIN
                  REGISTRATIONS
                </h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>

              </div>

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={cloud} alt=""></img>

                <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">SSL CERTIFICATE
                </h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>

              </div>

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={server} alt=""></img>

                <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">ONE-CLICK
                  INSTALLS
                </h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>
              </div>

              <div className="p-7">

                <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={app} alt=""></img>

                <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">APPLICATION
                  INSTALLS
                </h2>

                <p className="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </p>

              </div>

            </div>

          </div>

          {/* <!-- Section 5 (TESTIMONIALS) --> */}

          <div className="bg-secondary px-5 lap:pl-0 lap:pr-20 desk:pr-96 text-white">

            <div className="py-20 bg-primary flex flex-col lap:flex-row items-center ">

              <div>

                <div className="flex flex-col tab:flex-row lap:items-center justify-center">

                  <div className="p-7">
                    <img className="w-36 h-36 object-cover rounded-full" src={testimonial1}
                      alt=""></img>
                  </div>

                  <div className="p-7 tab:w-3/5">

                    <h2 className="font-sans-m text-lg font-bold leading-[21.6px] mb-5">LINDA HUDSON</h2>

                    <p className="leading-[25.6px]">
                      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur,
                      mauris
                      in auctor euismod, quam elit ultrices urna"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col tab:flex-row lap:items-center justify-center">

                  <div className="p-7">
                    <img className="w-36 h-36 object-cover rounded-full" src={testimonial2}
                      alt=""></img>
                  </div>

                  <div className="p-7 tab:w-3/5">

                    <h2 className="font-sans-m text-lg font-bold leading-[21.6px] mb-5">PAUL LARSON</h2>

                    <p className="leading-[25.6px">"Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                      justo. Mauris efficitur,
                      mauris
                      in auctor euismod, quam elit ultrices urna"
                    </p>

                  </div>
                </div>

              </div>

              <div className="p-7 tab:w-full desk:w-2/5 ">
                <h1 className="font-serif font-bold text-3xl tab:text-5xl leading-[52.8px]">
                  Testimonials
                </h1>
              </div>

            </div>

          </div>

          {/* <!-- Section 6 (COUNTERS) --> */}

          <div className="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 className="font-serif text-3xl tab:text-5xl font-bold leading-[52.8px] mb-5">About Us & Our Work</h1>

            <p className="mb-16 text-base leading-[25.6px] tab:w-6/12">We provide expert Business Coaching to both
              individuals and businesses. With over 30
              years of experience we’ll ensure that you’re always getting the best guidance from the top people in
              the entire industry.
            </p>

            <div
              className="grid grid-col-1 tab:grid-cols-2 lap:grid-cols-4 items-center justify-center justify-items-center gap-8">

              <div className="text-center">
                <div className="bg-secondary h-4 mb-10 "></div>
                <div className="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="236">0
                </div>
                <h2 className="text-base font-semibold tracking-wider leading-[25.6px] mb-5">CUPS OF COFFE</h2>
                <p className="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary h-4 mb-10"></div>
                <div className="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="17">0
                </div>
                <h2 className="text-base font-semibold tracking-wider leading-[25.6px] mb-5">AWARDS WON</h2>
                <p className="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary h-4 mb-10"></div>
                <div className="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="108">0
                </div>
                <h2 className="text-base font-semibold tracking-wider leading-[25.6px] mb-5">HAPPY CLIENTS</h2>
                <p className="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary h-4 mb-10"></div>
                <div className="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="150">0
                </div>
                <h2 className="text-base font-semibold tracking-wider leading-[25.6px] mb-5">PROJECTS FINISHED</h2>
                <p className="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </p>
              </div>

            </div>

          </div>

          {/* <!-- Section 7 (FORM) --> */}

          {/* <div className="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 className="font-serif mb-5 tab:leading-[52.8px] font-bold text-3xl tab:text-5xl">
              Doing The Right Thing, At The Right Time
            </h1>

            <h3 className="text-base font-normal leading-[25.6px] font-medium mb-12">
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h3>

            <div className="formparent">

              <form action="">

                <div className="tab:w-2/3 flex flex-col tab:flex-row items-center mb-10">

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" for="">Name</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Name" type="text"></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" for="">Adress</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Adress" type="text"></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" for="">Email</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Email" type="text"></input>
                  </div>

                </div>

                <div className="lap:w-2/3 mb-10">
                  <div className="flex flex-col mb-5">
                    <label className="font-normal text-base leading-[25.6px]" for="">Message</label>
                    <textarea
                      className=" h-40 p-5 border-b-4 border-secondary bg-primary tab:mr-5 text-base font-normal leading-[25.6px]"
                      name="comment" form="usrform" placeholder="Enter Your Message"></textarea>
                  </div>

                  <div className="mb-10">
                    <input type="radio">
                      <label className="font-normal text-base leading-[25.6px]" for="">I accept the <a
                        className="text-link" href="https://stackoverflow.com/questions/58477604/react-p-is-not-defined-no-undef-in-component-file">Terms of Service</a></label></input>
                  </div>

                  <button
                    className="bg-secondary text-white font-bold border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
                    SUBMIT
                  </button>

                </div>

              </form>
            </div>


          </div> */}

        </main>

      </div>

      {/* <!-- FOOTER --> */}

      <footer className="text-white py-10 md:py-20 px-5 md:px-10 text-center bg-footer">
        <p className="text-sm leading-btn p-2">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>

        <br></br>

        <p className="text-sm leading-btn p-2">
          Website Templates created with Website Builder Software.
        </p>
      </footer>
    </div>
  );
}

export default App;
