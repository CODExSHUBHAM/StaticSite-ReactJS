import React, { useState, useEffect, } from 'react'
import './App.css';
import quote from '../src/Images/quote.svg';
import waves from '../src/Images/waves.svg';
import elegance from '../src/Images/pexels-photo-6730458.jpeg';
import facebook from '../src/Images/facebook.svg';
import instgram from '../src/Images/instagram.svg';
import twitter from '../src/Images/twitter.svg';
import { supabase } from './supabaseClient';


function App() {

  const [team, setTeam] = useState([]);
  const [features, setFeatures] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [counter, setCounter] = useState([]);
  const [finalCounter, setFinalCounter] = useState([]);
  const initialValues = { name: "", adress: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    async function getTeam() {
      const { data, error } = await supabase
        .from('team')
        .select()
        .order('order', { ascending: true })
      console.log(error)
      setTeam(data)
    }
    getTeam()

    async function getFeatures() {
      const { data, error } = await supabase
        .from('features')
        .select()
        .order('order', { ascending: true })
      console.log(error)
      setFeatures(data)
    }
    getFeatures()

    async function getTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select()
        .order('order', { ascending: true })
      console.log(error)
      setTestimonials(data)
    }
    getTestimonials()

  }, [setTeam, setFeatures, setTestimonials]);

  useEffect(() => {
    async function getCounterData() {
      const { data, error } = await supabase
        .from('counter')
        .select()
        .order('order', { ascending: true })
      console.log(error)
      setCounter(data)
      const tempCounter = data.map(item => {
        return { ...item, value: 0 }
      })
      setFinalCounter(tempCounter)
    }
    getCounterData()

  }, [setCounter, setFinalCounter]);

  useEffect(()=>{

    const speed = 600;

    if (finalCounter[0] && (finalCounter[0].value !== finalCounter[0].target || finalCounter[1].value !== finalCounter[1].target || finalCounter[2].value !== finalCounter[2].target || finalCounter[3].value !== finalCounter[3].target)) {

      const tempCounter = finalCounter.map(item => {

        const target = item.target;
        const count = item.value;
        const inc = Math.ceil(target / speed)

        if (count < target) {
          item.value = count + inc;
        }
        else {
          item.value = item.target
        }

        return item

      })
      setFinalCounter(tempCounter)
    }

  }, [setFinalCounter, finalCounter]);

  const valueChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const checkBox = (e) => {

    if (checked === false) {
      setChecked(true)
    }
    else (
      setChecked(false)
    )
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues, checked));
    setSubmited(true);
  };

  const validation = (values, checked) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = " Name is required! "
    }
    if (!values.adress) {
      errors.adress = " Adress is required! "
    }
    if (!values.email) {
      errors.email = " Email is required! "
    }
    else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email adress"
    }
    if (!values.message) {
      errors.message = " Message is required! "
    }
    if (checked === false) {
      errors.checked = " Please accept the terms! "
    }

    return errors
  };

  useEffect(() => {

    async function sendData(formValues) {
      const { data, error } = await supabase
        .from('formData')
        .insert([formValues])
      console.log(data, error)
    };
    if (Object.keys(formErrors).length === 0 && submited) {
      sendData(formValues)
    };
    // eslint-disable-next-line
  }, [formErrors, submited]);

  return (
    <div className="App">

      {/* MAIN SITE CODE */}

      <div className="min-h-screen overflow-hidden font-sans">

        {/* <!-- Main Parent Section  --> */}

        <main className="bg-primary">

          {/* <!-- Hero Section --> */}

          <div
            className="bg-hero bg-cover bg-center flex flex-col justify-end min-h-screen tab:min-h-[65vh] lap:h-[900px] text-white py-0 px-5 tab:px-16 lap:px-20 desk:px-96">

            <img className="w-20 mb-6 fill-white text-white" src={quote} alt=""></img>

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

                {team.map((value, index) => {
                  return (<div key={index} className="flex flex-col tab:flex-row items-center justify-center p-8">

                    <img className="w-64 h-64 rounded-full mb-10 tab:mb-0" src={value.image} alt=""></img>

                    <div className="text-center text-white tab:pl-6">

                      <h2 className="font-serif text-xl font-normal mb-2">{value.name}</h2>
                      <h3 className="mb-4 text-base font-bold text-secondary uppercase">{value.designation}</h3>
                      <p className="mb-4 text-sm leading-btn italic">
                        {value.description}
                      </p>

                      <div className="flex fill-current justify-evenly">

                        <img className="w-8 h-8" src={facebook} alt=""></img>

                        <img className="w-8 h-8" src={instgram} alt=""></img>

                        <img className="w-8 h-8" src={twitter} alt=""></img>

                      </div>

                    </div>

                  </div>)
                })}

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

              {features.map((value, index) => {
                return (<div key={index} className="p-7">

                  <img className="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl" src={value.icon} alt=""></img>

                  <h2 className="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6 uppercase">
                    {value.title}
                  </h2>

                  <p className="text-lg font-light leading-9 w-11/12">
                    {value.description}
                  </p>

                </div>)
              })}

            </div>

          </div>

          {/* <!-- Section 5 (TESTIMONIALS) --> */}

          <div className="bg-secondary px-5 lap:pl-0 lap:pr-20 desk:pr-96 text-white">

            <div className="py-20 bg-primary flex flex-col lap:flex-row items-center ">

              <div>

                {testimonials.map((value, index) => {
                  return (<div key={index} className="flex flex-col tab:flex-row lap:items-center justify-center">

                    <div className="p-7">
                      <img className="w-36 h-36 object-cover rounded-full" src={value.image}
                        alt=""></img>
                    </div>

                    <div className="p-7 tab:w-3/5">

                      <h2 className="font-sans-m text-lg font-bold leading-[21.6px] mb-5 uppercase">{value.name}</h2>

                      <p className="leading-[25.6px]">
                        {value.description}
                      </p>
                    </div>
                  </div>)
                })}

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

              {finalCounter.map((value, index) => {
                return (
                  <div key={index} className="text-center">
                    <div className="bg-secondary h-4 mb-10 "></div>
                    <div className="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5">{value.value}</div>
                    <h2 className="text-base font-semibold tracking-wider leading-[25.6px] mb-5 uppercase">{value.title}</h2>
                    <p className="text-base leading-[25.6px]">{value.description}</p>
                  </div>
                )
              })}

            </div>

          </div>

          {/* <!-- Section 7 (FORM) --> */}

          <div className="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 className="font-serif mb-5 tab:leading-[52.8px] font-bold text-3xl tab:text-5xl">
              Doing The Right Thing, At The Right Time
            </h1>

            <h3 className="text-base leading-[25.6px] font-medium mb-12">
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h3>

            <div className="formparent">

              <form onSubmit={submitForm}>

                <div className="tab:w-2/3 flex flex-col tab:flex-row items-center mb-10">

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" htmlFor="">Name</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Name" name="name" type="text" value={formValues.name} onChange={valueChange} />
                    <p className="text-red-600 font-thin">{formErrors.name}</p>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" htmlFor="">Adress</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Adress" name="adress" type="text" value={formValues.adress} onChange={valueChange} />
                    <p className="text-red-600 font-thin">{formErrors.adress}</p>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-normal text-base leading-[25.6px]" htmlFor="">Email</label>
                    <input
                      className="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Email" name="email" type="text" value={formValues.email} onChange={valueChange} />
                    <p className="text-red-600 font-thin">{formErrors.email}</p>
                  </div>

                </div>

                <div className="lap:w-2/3 mb-10">
                  <div className="flex flex-col mb-5">
                    <label className="font-normal text-base leading-[25.6px]" htmlFor="">Message</label>
                    <textarea
                      className=" h-40 p-5 border-b-4 border-secondary bg-primary tab:mr-5 text-base font-normal leading-[25.6px]"
                      name="message" form="usrform" placeholder="Enter Your Message" value={formValues.message} onChange={valueChange} />
                    <p className="text-red-600 font-thin">{formErrors.message}</p>
                  </div>

                  <div className="mb-10">
                    <input name="terms" type="checkbox" checked={checked} onChange={checkBox} />
                    <label className="font-normal text-base leading-[25.6px]" htmlFor=""> I accept the <a
                      className="text-link" href="https://stackoverflow.com/questions/58477604/react-p-is-not-defined-no-undef-in-component-file">Terms of Service</a></label>
                    <p className="text-red-600 font-thin">{formErrors.checked}</p>
                  </div>

                  <div className="flex items-center">
                    <button
                      className="bg-secondary text-white font-bold border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
                      SUBMIT
                    </button>
                    {Object.keys(formErrors).length === 0 && submited ? (<p className="mx-5 text-base text-green-500">We got your response, we'll get back to you shortly !!</p>) : (<p></p>)}
                  </div>


                </div>

              </form>
            </div>


          </div>

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