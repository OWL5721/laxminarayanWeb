"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// export const metadata: Metadata = {
//     title: "Sign In | Laxminarayan",
//     description: "Access your account to view exclusive collections.",
// };

const SigninPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate luxury delay
    setTimeout(() => {
      // 🔐 Default Credentials
      if (email === "client@slne.com" && password === "SLNE1976") {
        document.cookie = "slne_auth=true; path=/";
        router.push("/");
      } else {
        alert("Verification failed. Please check your credentials.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-luxury-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container px-4">
        <div className="mx-auto max-w-[500px]">
          <div className="relative overflow-hidden rounded-xl bg-[#141414] px-8 py-12 shadow-2xl border border-luxury-gold/20 sm:p-[60px]">
            {/* Top Gold Bar */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>

            <div className="mb-10 text-center">
              <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl font-serif tracking-widest uppercase">
                Laxminarayan
              </h1>
              <div className="mx-auto mb-6 h-[1px] w-24 bg-luxury-gold/50"></div>
              <p className="text-base font-medium text-body-color-dark/70 tracking-tight">
                Enter your credentials to access the world of elegance.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-6">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-luxury-gold">
                  Identity
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-base text-white outline-none transition-all duration-300 focus:border-luxury-gold placeholder:text-white/20"
                />
              </div>

              {/* Password */}
              <div className="mb-8">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-luxury-gold">
                  Secret Key
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border-b border-white/10 bg-transparent py-3 text-base text-white outline-none transition-all duration-300 focus:border-luxury-gold placeholder:text-white/20"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="mb-10 flex flex-col justify-between text-sm sm:flex-row sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <label className="flex cursor-pointer select-none items-center text-body-color-dark/60 hover:text-white transition-colors">
                    <input type="checkbox" className="mr-2 accent-luxury-gold" />
                    Remember Identity
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-medium text-luxury-gold/80 hover:text-luxury-gold transition-colors underline-offset-4 hover:underline"
                  >
                    Inquire Access?
                  </a>
                </div>
              </div>

              {/* Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-sm bg-luxury-gold px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50"
                >
                  <span className="relative z-10">{loading ? "Verifying..." : "Authenticate"}</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                </button>
              </div>
            </form>

            <p className="text-center text-sm font-medium text-body-color-dark/50">
              New to our legacy?{" "}
              <Link
                href="/signup"
                className="text-luxury-gold hover:text-white transition-all font-semibold"
              >
                Apply for Entry
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;