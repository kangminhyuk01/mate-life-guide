
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PasswordResetModal from "@/components/PasswordResetModal";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim() !== "" && password.trim() !== "") {
      navigate("/home-logged-in");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="flex w-full bg-slate-50 min-h-16"></header>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col justify-center py-12 w-full">
        <section className="flex flex-col items-center px-20 pt-7 pb-20 bg-slate-50 max-md:px-5">
          <div className="flex flex-col ml-2.5 max-w-full w-[671px]">
            {/* Logo Section */}
            <div className="flex gap-10 self-center max-w-full text-2xl font-bold tracking-tighter leading-none text-sky-600 w-[275px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/7ad75d1d73d4958ecec40de27e94e931e8ba7e32?placeholderIfAbsent=true"
                className="object-contain shrink-0 aspect-square rounded-[90px] w-[61px]"
                alt="Campus Mate Logo"
              />
              <h2 className="grow shrink my-auto w-[150px]">
                Campus Mate
              </h2>
            </div>

            {/* Login Form */}
            <div className="flex flex-col justify-center items-center px-16 py-9 mt-8 text-base bg-white border border-solid border-zinc-400 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[402px]">
                <h3 className="self-center text-3xl font-semibold tracking-tighter leading-8 text-center text-neutral-800">
                  로그인<br />
                </h3>

                <form onSubmit={handleLogin}>
                  {/* ID Input */}
                  <label htmlFor="user-id" className="sr-only">ID</label>
                  <input
                    type="text"
                    id="user-id"
                    placeholder="ID"
                    className="w-full px-3 py-2 mt-14 tracking-normal leading-none text-gray-900 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:mt-10 max-md:mr-0.5"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />

                  {/* Password Input */}
                  <label htmlFor="user-password" className="sr-only">비밀번호</label>
                  <input
                    type="password"
                    id="user-password"
                    placeholder="비밀번호"
                    className="w-full px-3 py-2 mt-7 tracking-normal leading-none text-gray-900 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-400 max-md:pr-5 max-md:mr-0.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full px-10 py-3 mt-7 font-medium leading-5 text-black whitespace-nowrap bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors max-md:px-5 max-md:mr-0.5"
                  >
                    로그인<br />
                  </button>

                  {/* Remember ID and Forgot Password */}
                  <div className="flex gap-5 justify-between mt-4 w-full text-base font-bold max-md:ml-1">
                    <div className="flex gap-2.5 text-zinc-400">
                      <label htmlFor="remember-id" className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          id="remember-id"
                          className="sr-only"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <span className={`flex shrink-0 bg-white rounded border border-black border-solid h-[23px] w-[23px] ${
                          rememberMe ? 'flex justify-center items-center' : ''
                        }`}>
                          {rememberMe && '✓'}
                        </span>
                        <span className="ml-2.5 font-normal">아이디 저장</span>
                      </label>
                    </div>
                    <button 
                      type="button" 
                      className="text-sky-500 hover:underline"
                      onClick={() => setIsPasswordModalOpen(true)}
                    >
                      비밀번호를 잊어버리셨나요 ?
                    </button>
                  </div>

                  {/* Social Login Options */}
                  <button
                    type="button"
                    className="flex gap-5 justify-between items-center w-full px-3 py-2 mt-7 tracking-normal leading-none text-black bg-white rounded-lg border-2 border-solid border-zinc-400 hover:bg-gray-50 transition-colors max-md:mr-0.5"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/96310c2538adc8b2ec65b7d3a2856c9919e773a2?placeholderIfAbsent=true"
                      className="object-contain shrink-0 aspect-[1.05] w-[21px]"
                      alt="Google logo"
                    />
                    <span className="flex-grow text-center">Google 로그인</span>
                  </button>

                  <button
                    type="button"
                    className="flex gap-5 justify-between items-center w-full px-2.5 py-1.5 mt-4 tracking-normal leading-none text-black bg-white rounded-lg border-2 border-solid border-zinc-400 hover:bg-gray-50 transition-colors max-md:mr-0.5"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/e54d2759bda84710a4d50e71ff6939bd/2e60b67a4f9e82849795fe212d687e5b0a7b5983?placeholderIfAbsent=true"
                      className="object-contain shrink-0 aspect-square w-[26px]"
                      alt="Naver logo"
                    />
                    <span className="flex-grow text-center my-auto">Naver 로그인</span>
                  </button>
                </form>

                {/* Sign Up Prompt */}
                <div className="flex gap-2.5 self-center mt-4 max-w-full text-base font-bold w-[299px]">
                  <p className="grow text-zinc-400">
                    Campus Mate가 처음이신가요?
                  </p>
                  <Link to="/signup" className="text-sky-500 hover:underline">가입하기</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full bg-slate-50 min-h-12"></footer>

      {/* Password Reset Modal */}
      <PasswordResetModal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)} 
      />
    </div>
  );
};

export default Login;
