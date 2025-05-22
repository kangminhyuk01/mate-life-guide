import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };
  return <main className="overflow-hidden pt-9 pb-24 bg-slate-50">
      {/* Header Section */}
      <header className="flex flex-col pt-4 w-full text-base font-medium leading-none bg-slate-50 text-neutral-800 max-md:max-w-full">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="pb-24 mt-36 w-full bg-slate-50 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex z-10 flex-col mb-0 ml-3 w-full max-w-[1159px] max-md:mb-2.5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* Left Column - Text Content */}
                <div className="w-4/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-wrap gap-2.5 text-9xl tracking-tighter leading-none text-center text-neutral-800 max-md:text-4xl">
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/01767757719eef5d052aeb1a221f393e2ab6a1af?placeholderIfAbsent=true" alt="Campus Mate Logo" className="object-contain shrink-0 self-start mt-4 max-w-full aspect-square rounded-[90px] w-[106px]" />
                      <h2 className="flex-auto w-[742px] max-md:max-w-full max-md:text-4xl">
                        Campus Mate
                      </h2>
                    </div>
                    <div className="flex flex-col items-start self-center mt-20 max-w-full text-xl font-bold leading-tight w-[467px] max-md:mt-10">
                      <p className="text-sky-500">Campus mate AI 출시 !</p>
                      <div className="shrink-0 mt-1 h-0.5 border-2 border-sky-500 border-solid w-[110px]"></div>
                      <p className="self-stretch mt-10 text-2xl leading-6 text-black max-md:mt-10 max-md:max-w-full px-[2px]">
                        단순 FAQ 응대가 아닌,
                        <br />
                        여러분들의 대학생활을 책임지는 똑똑한 상담사!
                      </p>
                      <button className="px-8 py-3 mt-8 whitespace-nowrap bg-blue-100 text-neutral-800 hover:bg-blue-200 transition-colors max-md:px-5" onClick={handleGetStarted}>
                        시작하기
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Phone Mockup */}
                <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col py-3 mx-auto w-full bg-white border-black border-solid border-[5px] rounded-[44px] max-md:mt-10">
                    {/* Phone Top Notch */}
                    <div className="flex flex-col pr-4 pl-11 w-full text-xs text-black max-md:pl-5">
                      <div className="flex shrink-0 self-center bg-black h-[17px] rounded-[50px] w-[77px]"></div>
                      <div className="flex gap-1.5 self-end mt-5">
                        <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
                          캠퍼스 메이트는 어떤 서비스야?
                        </div>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/faed20df335e0e339570fc9ce4e3afe19abf36f2?placeholderIfAbsent=true" alt="User Icon" className="object-contain shrink-0 self-start aspect-square w-[26px]" />
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex flex-col px-2.5 mt-3.5 w-full text-xs text-black">
                      <div className="flex gap-1">
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/b27d8203ce31f13bf8f0fe8143c4cfdda9b5c164?placeholderIfAbsent=true" alt="Bot Icon" className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]" />
                        <div className="px-3.5 pt-3.5 pb-6 bg-gray-100 rounded-3xl">
                          캠퍼스 메이트는 국민대학교 학생들의 학교 생활 전반의 도움을 주는 챗봇이에요.
                        </div>
                      </div>
                      <div className="flex gap-1.5 self-end mt-5 max-md:mr-1.5">
                        <div className="px-4 py-1.5 bg-white border border-sky-600 border-solid rounded-[30px]">
                          캠퍼스 메이트의 특징은 뭐야?
                        </div>
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/d5df01bb2a7dd09d708447bc876ef4208578e754?placeholderIfAbsent=true" alt="User Icon" className="object-contain shrink-0 self-start aspect-square w-[26px]" />
                      </div>
                    </div>

                    <div className="flex gap-1 mt-4 mr-2.5 text-xs text-black max-md:ml-2.5">
                      <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/11b4e3b612d8937de3a4065c154b64e43e787d59?placeholderIfAbsent=true" alt="Bot Icon" className="object-contain shrink-0 self-start aspect-square rounded-[90px] w-[38px]" />
                      <div className="px-3.5 pt-2 pb-4 bg-gray-100 rounded-3xl">
                        캠퍼스 메이트는 친숙한 느낌을 주는 반말모드와 진중한 느낌을 주는 존댓말모드 중 선택해서 이용할 수 있어.
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="flex gap-5 justify-between items-start py-1 pr-2.5 pl-1 mt-12 mr-3.5 ml-3 rounded-3xl border-2 border-solid bg-slate-600 bg-opacity-10 border-black border-opacity-0 max-md:mx-2.5 max-md:mt-10">
                      <div className="flex gap-1.5 text-xs leading-3 text-gray-800">
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/9208a4822e71032737c4105e7c4d76c5065759cd?placeholderIfAbsent=true" alt="Input Icon" className="object-contain shrink-0 aspect-[1.06] w-[17px]" />
                        <p>Type your message...</p>
                      </div>
                      <div className="flex gap-1.5">
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/35055ae13a60984ceaaabfd7fe173ca5a106e22c?placeholderIfAbsent=true" alt="Mic Icon" className="object-contain shrink-0 w-2.5 aspect-[0.71]" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/1804053a69e97c795ce7c8849cd2f5ed8450a8ba?placeholderIfAbsent=true" alt="Send Icon" className="object-contain shrink-0 self-start aspect-square w-[11px]" />
                      </div>
                    </div>

                    {/* Phone Bottom Bar */}
                    <div className="flex shrink-0 self-center mt-5 bg-black h-[7px] rounded-[50px] w-[77px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/a48df6a4a3cbb6c5268aaf09bd426e03e54a68fd?placeholderIfAbsent=true" alt="Feature Overview" className="object-contain self-center mt-7 ml-5 w-full aspect-[1.6] max-w-[1011px] max-md:max-w-full" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>;
};
export default Home;