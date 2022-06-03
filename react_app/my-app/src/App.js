import logo from './logo.svg';
import './App.css';

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
      <div class="min-h-screen overflow-hidden font-sans">

        {/* <!-- Main Parent Section  --> */}

        <main class="bg-primary">

          {/* <!-- Hero Section --> */}

          <div
            class="bg-hero bg-cover bg-center flex flex-col justify-end min-h-screen tab:min-h-[65vh] lap:h-[900px] text-white py-0 px-5 tab:px-16 lap:px-20 desk:px-96">

            <svg class="w-20 mb-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve"
              viewBox="0 0 27.555 27.555" x="0px" y="0px">
              <g>
                <path
                  d="M13.777,0C7.108,0,1.701,5.407,1.701,12.076c0,3.45,1.454,6.553,3.773,8.752L5.07,27.555l5.736-3.787   c0.952,0.241,1.944,0.383,2.971,0.383c6.67,0,12.076-5.406,12.076-12.076C25.854,5.407,20.447,0,13.777,0z M12.61,11.342   c0,1.24-0.258,2.219-0.774,2.936s-1.4,1.352-2.654,1.9l-0.945-1.789c0.771-0.361,1.304-0.722,1.598-1.08   c0.295-0.36,0.459-0.784,0.493-1.273H8.237V7.974h4.373V11.342z M19.317,11.342c0,1.24-0.258,2.219-0.774,2.936   c-0.516,0.719-1.4,1.352-2.654,1.9l-0.944-1.789c0.771-0.361,1.304-0.722,1.599-1.08c0.295-0.36,0.459-0.784,0.493-1.273h-2.091   V7.974h4.373L19.317,11.342L19.317,11.342z">
                </path>
              </g>
            </svg>

            <p class="mb-6 text-base max-w-lg">
              Lectus quam id leo in. Proin fermentum leo vel orci porta non pulvinar. Eget sit amet tellus cras
              adipiscing enim. Volutpat odio facilisis mauris sit amet massa vitae. Adipiscing enim eu turpis
              egestas pretium.
            </p>

            <h3 class="text-base font-bold mb-20 lap:mb-40"> -Joe Smith SEO</h3>


          </div>

          {/* <!-- Section 1 --> */}

          <div class="sec1 py-20 px-5 tab:px-16 lap:px-20 desk:px-96">

            <svg class="text-secondary fill-current w-64 mb-10" viewBox="0 0 160 100" x="0px" y="0px"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path
                d="M133,27.2c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,22.4
            c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0
            l-3.8,4.8C146.9,20.6,142.3,20.6,133,27.2z M133,11c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0
            C19.2,4.5,13,4.5,3.8,11L0,6.2c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0
            c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8C146.9,4.4,142.3,4.4,133,11z M32.2,38.8c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0
            c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8c-9.3-6.6-13.9-6.6-23.3,0c-13.9,9.9-25.8,9.9-39.8,0
            c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,38.8C11.2,30.8,20.6,30.5,32.2,38.8z M133,76.2
            c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,71.4
            c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0
            l-3.8,4.8C146.9,69.6,142.3,69.6,133,76.2z M133,60c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0
            c-9.2-6.5-15.4-6.5-24.6,0L0,55.2c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0
            c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8C146.9,53.4,142.3,53.4,133,60z M32.2,87.8c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0
            c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8c-9.3-6.6-13.9-6.6-23.3,0c-13.9,9.9-25.8,9.9-39.8,0
            c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,87.8C11.2,79.8,20.6,79.5,32.2,87.8z">
              </path>
            </svg>

            <p
              class="text-3xl tab:text-5xl font-serif text-white font-light max-w-3xl mb-10 tracking-[2px] tab:leading-[52.8px]">
              We have framework agreements with many large and medium-sized players
            </p>

            <button
              class="bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
              LEARN MORE
            </button>

          </div>

          {/* <!-- Section 2 --> */}

          <div class="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 sec2 text-left">

            <h1 class="p-2 tab:p-6 text-white font-serif text-3xl tab:text-5xl font-bold tab:leading-[67.2px]">
              We dwelling elegance do shutters apetite yourself diverted.
            </h1>

            <div class="flex flex-col tab:flex-row items-center tab:justify-around ">

              <div class="p-6 ">

                <h2 class="text-lg font-bold tracking-button text-secondary mb-5">SAMPLE HEADLINNE</h2>

                <p class="text-base text-[#999999] lap:w-10/12">
                  While we were not the first home cleaning company in the UK, we take pride in being market
                  leaders in introducing an instant online booking system plus the facility for our customers
                  to login and control their cleaning service 24/7, 365 days a year putting you in complete
                  control. This development is yet again another example of the innovative approach Daily
                  Poppins takes to addressing its customer needs.
                </p>

              </div>

              <div class="p-6  flex items-center justify-center">

                <div class="flex items-center w-72 lap:w-80 h-72 lap:h-80 overflow-hidden rounded-full ">
                  <img src="./Assets/pexels-photo-6730458.jpeg" alt=""></img>
                </div>

              </div>

              <div class="p-6">

                <h2 class="text-lg font-bold tracking-button text-secondary mb-5">SAMPLE HEADLINNE</h2>

                <p class="text-base text-[#999999] mb-4 lap:w-[115%]">
                  As a result of our philosophy to be the most forward thinking home cleaning company and our
                  focus on understanding customer needs, we have and will continue to expand across the UK
                  with franchises in the southwest of England to the north east of Scotland with over 50
                  territories nationwide.
                </p>

                <button
                  class="font-sans bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
                  Learn More
                </button>

              </div>

            </div>

          </div>

          {/* <!-- Section 3 (TEAM) --> */}

          <div class="bg-secondary pr-5 tab:pr-16 lap:pr-20 desk:pr-96 ">

            <div class="py-20 pl-5 tab:pl-16 lap:pl-20 desk:pl-96 bg-primary">

              <div class="grid grid-col-1 lap:grid-cols-2 lap:grid-rows-2 items-center justify-center">

                <div class="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img class="w-64 h-64 rounded-full mb-10 tab:mb-0" src="./Assets/1.jpeg" alt=""></img>

                    <div class="text-center text-white tab:pl-6">

                      <h2 class="font-serif text-xl font-normal mb-2">Jeffery Brown</h2>
                      <h3 class="mb-4 text-base font-bold text-secondary">CREATIVE LEADER</h3>
                      <p class="mb-4 text-sm leading-btn italic">
                        Sample text. Click to select the text box. Click again or double click to start
                        editing the text.
                      </p>

                      <div class="flex fill-current justify-evenly">

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                        </svg>

                      </div>


                    </div>

                </div>

                <div class="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img class="w-64 h-64 rounded-full mb-10 tab:mb-0" src="./Assets/3.jpeg" alt=""></img>

                    <div class="text-center text-white tab:pl-6">

                      <h2 class="font-serif text-xl font-normal mb-2">Ann Richmond</h2>
                      <h3 class="mb-4 text-base font-bold text-secondary">MANAGER</h3>
                      <p class="mb-4 text-sm leading-btn italic">
                        Sample text. Click to select the text box. Click again or double click to start
                        editing the text.
                      </p>

                      <div class="flex fill-current justify-evenly">

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                        </svg>

                      </div>


                    </div>

                </div>

                <div class="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img class="w-64 h-64 rounded-full mb-10 tab:mb-0" src="./Assets/2.jpeg" alt=""></img>

                    <div class="text-center text-white tab:pl-6">

                      <h2 class="font-serif text-xl font-normal mb-2">Alex Grinfield</h2>
                      <h3 class="mb-4 text-base font-bold text-secondary">PROGRAMMING GURU</h3>
                      <p class="mb-4 text-sm leading-btn italic">
                        Sample text. Click to select the text box. Click again or double click to start
                        editing the text.
                      </p>

                      <div class="flex fill-current justify-evenly">

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                        </svg>

                      </div>


                    </div>


                </div>

                <div class="flex flex-col tab:flex-row items-center justify-center p-8">

                  <img class="w-64 h-64 rounded-full mb-10 tab:mb-0" src="./Assets/4.jpeg" alt=""></img>

                    <div class="text-center text-white tab:pl-6">

                      <h2 class="font-serif text-xl font-normal mb-2">Roxie Swanson</h2>
                      <h3 class="mb-4 text-base font-bold text-secondary">SALES MANAGER</h3>
                      <p class="mb-4 text-sm leading-btn italic">
                        Sample text. Click to select the text box. Click again or double click to start
                        editing the text.
                      </p>

                      <div class="flex fill-current justify-evenly">

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>

                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                        </svg>

                      </div>


                    </div>

                </div>

              </div>

              <div class="text-left text-white">

                <h1 class="text-3xl tab:text-5xl font-bold font-serif p-5 ">Our Perfect Team</h1>

                <p class="p-5 text-base tab:w-5/12">
                  Sample text. Click to select the text box. Click again or double click to start editing
                  the text.
                </p>

                <button
                  class="bg-secondary text-primary border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn ml-5">
                  CALL NOW
                </button>
              </div>

            </div>

          </div>

          {/* <!-- Section 4 (FEATURES) --> */}

          <div class="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 class="text-3xl tab:text-5xl font-normal font-serif p-7">
              Hosting is even better with all these <b>FREE</b> features
            </h1>

            <div class="grid grid-col-1 tab:grid-cols-2 lap:grid-cols-3 tab:grid-rows-3 lap:grid-rows-2">

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M21 9.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5zm-18 5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3zm9-2.5c-4.97 0-9-2.015-9-4.5S7.03 3 12 3s9 2.015 9 4.5-4.03 4.5-9 4.5z" />
                </svg>


                <h2 class="text-xl text-secondary font-normal tracking-wider mb-6 font-sans-m">UNLIMITED STORAGE
                </h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>

              </div>

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z" />
                </svg>


                <h2 class="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">UNLIMITED
                  BANDWIDTH</h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>

              </div>

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z" />
                </svg>


                <h2 class="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">DOMAIN
                  REGISTRATIONS</h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>

              </div>

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z" />
                </svg>

                <h2 class="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">SSL CERTIFICATE
                </h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>

              </div>

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" />
                </svg>

                <h2 class="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">ONE-CLICK
                  INSTALLS</h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>
              </div>

              <div class="p-7">

                <svg class="mb-8 w-20 h-20 bg-secondary fill-primary p-3 rounded-xl"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z" />
                </svg>

                <h2 class="font-sans-m text-xl text-secondary font-normal tracking-wider mb-6">APPLICATION
                  INSTALLS</h2>

                <P class="text-lg font-light leading-9 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
                  ultrices.
                </P>

              </div>

            </div>

          </div>

          {/* <!-- Section 5 (TESTIMONIALS) --> */}

          <div class="bg-secondary px-5 lap:pl-0 lap:pr-20 desk:pr-96 text-white">

            <div class="py-20 bg-primary flex flex-col lap:flex-row items-center ">

              <div>

                <div class="flex flex-col tab:flex-row lap:items-center justify-center">

                  <div class="p-7">
                    <img class="w-36 h-36 object-cover rounded-full" src="/Assets/pexels-photo-6139560.jpeg"
                      alt=""></img>
                  </div>

                  <div class="p-7 tab:w-3/5">

                    <h2 class="font-sans-m text-lg font-bold leading-[21.6px] mb-5">LINDA HUDSON</h2>

                    <P class="leading-[25.6px]">
                      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur,
                      mauris
                      in auctor euismod, quam elit ultrices urna"
                    </P>
                  </div>
                </div>

                <div class="flex flex-col tab:flex-row lap:items-center justify-center">

                  <div class="p-7">
                    <img class="w-36 h-36 object-cover rounded-full" src="/Assets/pexels-photo-5944321.jpeg"
                      alt=""></img>
                  </div>

                  <div class="p-7 tab:w-3/5">

                    <h2 class="font-sans-m text-lg font-bold leading-[21.6px] mb-5">PAUL LARSON</h2>

                    <p class="leading-[25.6px">"Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                      justo. Mauris efficitur,
                      mauris
                      in auctor euismod, quam elit ultrices urna"
                    </p>

                  </div>
                </div>

              </div>

              <div class="p-7 tab:w-full desk:w-2/5 ">
                <h1 class="font-serif font-bold text-3xl tab:text-5xl leading-[52.8px]">
                  Testimonials
                </h1>
              </div>

            </div>

          </div>

          {/* <!-- Section 6 (COUNTERS) --> */}

          <div class="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 class="font-serif text-3xl tab:text-5xl font-bold leading-[52.8px] mb-5">About Us & Our Work</h1>

            <p class="mb-16 text-base leading-[25.6px] tab:w-6/12">We provide expert Business Coaching to both
              individuals and businesses. With over 30
              years of experience we’ll ensure that you’re always getting the best guidance from the top people in
              the entire industry.
            </p>

            <div
              class="grid grid-col-1 tab:grid-cols-2 lap:grid-cols-4 items-center justify-center justify-items-center gap-8">

              <div class="text-center">
                <div class="bg-secondary h-4 mb-10 "></div>
                <div class="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="236">0
                </div>
                <h2 class="text-base font-semibold tracking-wider leading-[25.6px] mb-5">CUPS OF COFFE</h2>
                <P class="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </P>
              </div>

              <div class="text-center">
                <div class="bg-secondary h-4 mb-10"></div>
                <div class="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="17">0
                </div>
                <h2 class="text-base font-semibold tracking-wider leading-[25.6px] mb-5">AWARDS WON</h2>
                <P class="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </P>
              </div>

              <div class="text-center">
                <div class="bg-secondary h-4 mb-10"></div>
                <div class="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="108">0
                </div>
                <h2 class="text-base font-semibold tracking-wider leading-[25.6px] mb-5">HAPPY CLIENTS</h2>
                <P class="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </P>
              </div>

              <div class="text-center">
                <div class="bg-secondary h-4 mb-10"></div>
                <div class="counter font-sans-m text-7xl font-bold leading-[86.4px] mb-5" data-target="150">0
                </div>
                <h2 class="text-base font-semibold tracking-wider leading-[25.6px] mb-5">PROJECTS FINISHED</h2>
                <P class="text-base leading-[25.6px]">
                  Sample text. Click to select the text box. Click again or double click to start editing the
                  text.
                </P>
              </div>

            </div>

          </div>

          {/* <!-- Section 7 (FORM) --> */}

          <div class="py-20 px-5 tab:px-16 lap:px-20 desk:px-96 text-white">

            <h1 class="font-serif mb-5 tab:leading-[52.8px] font-bold text-3xl tab:text-5xl">
              Doing The Right Thing, At The Right Time
            </h1>

            <h3 class="text-base font-normal leading-[25.6px] font-medium mb-12">
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </h3>

            <div class="formparent">

              <form action="">

                <div class="tab:w-2/3 flex flex-col tab:flex-row items-center mb-10">

                  <div class="flex flex-col">
                    <label class="font-normal text-base leading-[25.6px]" for="">Name</label>
                    <input
                      class="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Name" type="text"></input>
                  </div>

                  <div class="flex flex-col">
                    <label class="font-normal text-base leading-[25.6px]" for="">Adress</label>
                    <input
                      class="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Adress" type="text"></input>
                  </div>

                  <div class="flex flex-col">
                    <label class="font-normal text-base leading-[25.6px]" for="">Email</label>
                    <input
                      class="mb-5 tab:mb-0 border-b-4 border-secondary bg-primary tab:mr-5 h-14 w-80 tab:w-56 text-base font-normal leading-[25.6px]"
                      placeholder="Enter Your Email" type="text"></input>
                  </div>

                </div>

                <div class="lap:w-2/3 mb-10">
                  <div class="flex flex-col mb-5">
                    <label class="font-normal text-base leading-[25.6px]" for="">Message</label>
                    <textarea
                      class=" h-40 p-5 border-b-4 border-secondary bg-primary tab:mr-5 text-base font-normal leading-[25.6px]"
                      name="comment" form="usrform" placeholder="Enter Your Message"></textarea>
                  </div>

                  <div class="mb-10">
                    <input type="radio">
                      <label class="font-normal text-base leading-[25.6px]" for="">I accept the <a
                        class="text-link" href="">Terms of Service</a></label></input>
                  </div>

                  <button
                    class="bg-secondary text-white font-bold border-none py-3.5 px-8 cursor-pointer text-sm tracking-button leading-btn">
                    SUBMIT
                  </button>

                </div>

              </form>
            </div>


          </div>

        </main>

      </div>

      {/* <!-- FOOTER --> */}

      <footer class="text-white py-10 md:py-20 px-5 md:px-10 text-center bg-footer">
        <p class="text-sm leading-btn p-2">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>

        <br></br>

        <p class="text-sm leading-btn p-2">
            Website Templates created with Website Builder Software.
        </p>
      </footer>
    </div>
  );
}

export default App;
