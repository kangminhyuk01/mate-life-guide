
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <header className="flex w-full bg-slate-50 min-h-16"></header>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col justify-center py-12 w-full">
        <section className="flex flex-col items-center px-20 pt-7 pb-20 bg-slate-50 max-md:px-5">
          <div className="flex flex-col ml-2.5 max-w-full w-[671px]">
            {/* Logo Section */}
            <div className="flex gap-10 self-center max-w-full text-2xl font-bold tracking-tighter leading-none text-sky-600 w-[276px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/7ad75d1d73d4958ecec40de27e94e931e8ba7e32?placeholderIfAbsent=true" className="object-contain shrink-0 aspect-square rounded-[90px] w-[61px]" alt="Campus Mate Logo" />
              <h2 className="grow shrink my-auto w-[150px]">Campus Mate</h2>
            </div>

            {/* Sign-up Form */}
            <form 
              className="flex flex-col items-center px-16 pt-9 pb-24 mt-8 text-base bg-white border border-solid border-zinc-400 max-md:px-5 max-md:max-w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col max-w-full w-[400px]">
                <h3 className="self-center text-3xl font-semibold tracking-tighter leading-none text-center text-neutral-800">
                  회원가입
                </h3>

                {/* Input Fields */}
                <div className="mt-5 tracking-normal leading-none text-gray-900 whitespace-nowrap">
                  <input 
                    type="text" 
                    placeholder="ID" 
                    className="px-3 py-2 w-full bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5" 
                    required 
                  />
                </div>

                <input 
                  type="password" 
                  placeholder="비밀번호" 
                  className="px-3 py-2 mt-4 tracking-normal leading-none text-gray-900 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5 w-full" 
                  required 
                />

                <input 
                  type="password" 
                  placeholder="비밀번호 확인" 
                  className="px-3 py-2 mt-5 tracking-normal leading-none text-gray-900 bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5 w-full" 
                  required 
                />

                <input 
                  type="text" 
                  placeholder="이름" 
                  className="px-3 py-2 mt-5 tracking-normal leading-none text-gray-900 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5 w-full" 
                  required 
                />

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="px-10 py-2 mt-8 font-medium leading-none text-black whitespace-nowrap bg-sky-500 rounded-lg max-md:px-5 w-full h-10 hover:bg-sky-600 transition-colors"
                >
                  가입하기
                </button>

                {/* Login Link */}
                <div className="flex gap-7 self-center mt-9 max-w-full text-base font-bold w-[271px]">
                  <p className="grow shrink text-zinc-400 w-[156px]">
                    이미 계정이 있으신가요 ?
                  </p>
                  <Link to="/login" className="text-sky-500 hover:underline">로그인하기</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full bg-slate-50 min-h-12"></footer>
    </div>
  );
};

export default Signup;
