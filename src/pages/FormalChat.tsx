
import { Link } from "react-router-dom";

const FormalChat = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-14 pb-32 bg-white max-md:pb-24">
      <div className="flex z-10 self-center w-full max-w-[1362px] max-md:max-w-full">
        {/* Side Panel Menu */}
        <aside className="overflow-hidden self-start py-6 mt-28 text-base font-medium leading-none whitespace-nowrap bg-white text-neutral-800 max-md:mt-10">
          <nav>
            <button className="px-4 py-2 bg-white rounded-lg">Dashboard</button>
            <button className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Messages</button>
            <button className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Settings</button>
            <button className="px-4 py-2 bg-white rounded-lg max-md:pr-5">Help</button>
          </nav>
        </aside>

        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          {/* Header */}
          <header className="flex flex-col justify-center items-center px-20 py-7 text-base font-medium leading-none bg-white max-md:px-5 max-md:max-w-full">
            <div className="overflow-hidden px-0.5 max-w-full rounded-2xl bg-cyan-700 bg-opacity-20 shadow-[0px_4px_24px_rgba(0,0,0,0.16)] w-[886px]">
              <div className="flex flex-wrap gap-5 justify-between py-4 pr-3.5 pl-8 w-full bg-orange-400 bg-blend-normal max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-10 my-auto text-neutral-800">
                  <h1 className="my-auto text-2xl font-extrabold tracking-tighter leading-none basis-auto">Campus Mate</h1>
                  <nav className="flex gap-10">
                    <Link to="/home-logged-in" className="my-auto">Home</Link>
                    <a href="#" className="my-auto">Features</a>
                  </nav>
                </div>
                <div className="flex gap-3">
                  <Link to="/" className="px-2.5 py-2 rounded-lg border-2 border-solid border-neutral-800 text-neutral-800">Log out</Link>
                  <button className="px-4 py-2 text-black bg-sky-100 rounded-lg border border-black border-solid">Try it free</button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Chat Area */}
          <main className="flex z-10 flex-wrap gap-10 self-end -mt-4 mr-7 w-full max-w-[1172px] max-md:mr-2.5 max-md:max-w-full">
            <section className="overflow-hidden grow shrink-0 px-20 pb-5 bg-white basis-0 rounded-[30px] w-fit max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-start pt-12 pb-7 w-full bg-white rounded-2xl max-md:max-w-full">
                {/* Chat Messages */}
                <div className="flex gap-3.5 ml-5 max-md:ml-2.5">
                  <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ba9228467889a5c4b8eb820f798a7329ba956025?placeholderIfAbsent=true" alt="AI Assistant" className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[45px]" />
                  <div>
                    <p className="px-6 py-4 text-xs text-black bg-gray-100 rounded-3xl max-md:px-5">
                      안녕하세요! 무슨 고민이 있으신가요?
                    </p>
                    <div className="flex flex-col pl-1.5 mt-3 w-full">
                      {/* Quick Reply Options */}
                      <button className="flex gap-5 justify-between items-start px-5 pt-3.5 pb-1.5 text-xs text-black whitespace-nowrap bg-orange-100 rounded-xl">
                        <span>학사안내</span>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/8fe4d81f2ed03ff3edce7302efe3022b2e93ae21?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                      </button>
                      <button className="flex gap-5 justify-between items-start px-5 pt-3.5 pb-2 mt-3 text-xs text-black whitespace-nowrap bg-orange-100 rounded-xl">
                        <span>강의안내</span>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/580833e53abf4766c1a4147d69c831de0007e036?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                      </button>
                      <button className="flex gap-5 justify-between items-start px-5 pt-3.5 pb-2 mt-3 text-xs text-black whitespace-nowrap bg-orange-100 rounded-xl">
                        <span>국제교류</span>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/4e1d5a2ab12e4ca028edf1811284a799e320fd5f?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-5 aspect-[1.05]" />
                      </button>
                      <button className="flex gap-5 justify-between items-start px-5 pt-3.5 pb-1.5 mt-3 text-xs text-black whitespace-nowrap bg-orange-100 rounded-xl">
                        <span>교내문의</span>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/68094d1618900dd20d0ff12f837b23ece2c2d03a?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                      </button>

                      {/* Action Icons */}
                      <div className="flex gap-4 self-start mt-5">
                        <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/acfef5a3f2e547f57763a1d1d7d0cb71eae6bf69?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-4 aspect-square" /></button>
                        <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/c68460d4dcbd2af7d140472ba2d3beb0f7956dcd?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-4 aspect-square" /></button>
                        <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/ee60d28949bfbde443907a2c4a0076f64ac3b1f3?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-4 aspect-square" /></button>
                        <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/df37983b6f44b7533db8ed2bca748cc90f60521c?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-4 aspect-square" /></button>
                        <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/cc4d76aa6301564d7603ee8f9fdc2f0b31990c7a?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-4 aspect-square" /></button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input Field */}
                <div className="flex overflow-hidden flex-col justify-center px-16 py-4 mt-64 mr-0 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-wrap gap-5 justify-between py-0.5 pr-0.5 pl-2 w-full rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:max-w-full">
                    <div className="flex gap-2 my-auto text-base leading-none text-gray-800">
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/94713650efb2b00fec2a444e763b1724eeeddd85?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                      <label htmlFor="message-input" className="sr-only">Type your message</label>
                      <input id="message-input" type="text" placeholder="Type your message..." className="my-auto basis-auto bg-transparent border-none focus:outline-none" />
                    </div>
                    <div className="flex gap-2">
                      <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/695030f406df7986e70c34a8c1b98227897a7288?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 my-auto w-6 aspect-square" /></button>
                      <button><img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a6c2400a34b73a8b17b274c0a1eb691e50108a10?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 w-8 rounded-2xl aspect-square" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mode Toggle Button */}
            <Link to="/friendly-chat" className="flex gap-2 self-end text-base font-bold text-sky-500 whitespace-nowrap mt-[599px] max-md:mt-10">
              <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/be24feca349b831dcc29c74056abcd789b39f289?placeholderIfAbsent=true" alt="" className="object-contain shrink-0 aspect-square rounded-[90px] w-[45px]" />
              <span className="my-auto">반말모드하기<br /></span>
            </Link>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col pt-24 pb-8 w-full text-base font-medium leading-none text-gray-800 bg-white max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/72736308ef58234350c9db67fdcac42557a7e0ba?placeholderIfAbsent=true" alt="" className="object-contain w-full aspect-[1000] max-md:max-w-full" />
        <div className="flex gap-5 justify-between self-center mt-10 w-full max-w-[1218px] max-md:max-w-full">
          <div className="self-start mt-2 text-2xl font-extrabold tracking-tighter leading-none text-cyan-800">
            <h2>Campus Mate</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/737595f120a8f9e6edc2a45562435d7a13ca300b?placeholderIfAbsent=true" alt="Logo" className="object-contain mt-14 w-24 aspect-[4] max-md:mt-10" />
          </div>

          <nav className="flex flex-col">
            <h3 className="text-neutral-800">Company</h3>
            <a href="#" className="mt-2 max-md:mr-1.5">About Us</a>
            <a href="#" className="self-start mt-2">Careers</a>
            <a href="#" className="self-start mt-2">Press</a>
          </nav>

          <nav className="flex flex-col items-start">
            <h3 className="text-neutral-800">Support</h3>
            <a href="#" className="mt-2">Help Center</a>
            <a href="#" className="mt-2">Contact Us</a>
            <a href="#" className="self-stretch mt-2">Privacy Policy</a>
          </nav>

          <nav className="flex flex-col items-start self-start">
            <h3 className="text-neutral-800">Legal</h3>
            <a href="#" className="self-stretch mt-2">Terms of Service</a>
            <a href="#" className="mt-2">Cookie Policy</a>
          </nav>

          <nav className="flex flex-col items-start whitespace-nowrap">
            <h3 className="text-neutral-800">Social</h3>
            <a href="#" className="self-stretch mt-2">Facebook</a>
            <a href="#" className="mt-2">Twitter</a>
            <a href="#" className="mt-2">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default FormalChat;
