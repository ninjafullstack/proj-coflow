"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Form from "../Global/Form";
import Button from "../Global/Button";

const SignIn = ({ callbackUrl }) => {
  async function handleCredentialsLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", { email, password, callbackUrl });
  }
  
  return (
    <>
      <header className="text-header pl-9 pt-[34px] text-2xl font-semibold">Coflow</header>
      <div className="md:mt-[134px]md:w-full flex flex-1 flex-col items-center justify-items-center px-10 md:mx-auto md:w-[773px] ms:w-[350px] ms:px-5 lg:flex-shrink-0 rounded-[26px] shadow-3xl">
        <h2 className="align mt-[37px] mt-[51px] flex flex-col items-center justify-center">
          Bienvenue sur ma page de
          <div>crowdfunding</div>
        </h2>

        {/* Google Login */}
        <button
          className="mb-[27px] mt-[25px] flex h-[64px] w-[301px] items-center justify-center gap-[10px] rounded-lg px-[19px] py-[17px] text-white shadow-md transition duration-300 ease-in-out hover:bg-gray-50"
          onClick={() => signIn("google", { callbackUrl })}
        >
          <img
            src="icons/theme-light.svg"
            alt="Google Icon"
            className="w-28px h-28px flex-shrink-0"
          />
          <span className="text-17px py-17px px-19px font-semibold text-headers">
            S’inscrire via Google
          </span>
        </button>
        <h6 className="mb-[37px] text-sm sm:text-base">OU</h6>

        {/* SignIn with credentials */}
        <Form action={handleCredentialsLogin}>
          <label className="label" htmlFor="emailInput">
            <h6 className="label-text text-sm sm:text-base">Adresse email</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray lg:w-[693px]"
            type="email"
            id="emailInput"
            name="email"
            placeholder="Email"
            required
          />
          <label className="label" htmlFor="passInp">
            <h6 className="label-text mt-10 text-sm sm:text-base">Mot de passe</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray lg:w-[693px]"
            type="password"
            id="passInp"
            name="password"
            placeholder="Password"
            required
          />
          <h6 className="label-text mt-[30px] text-center text-sm sm:text-base">
            <div>En creant votre compte vous acceptez les</div>
            <Link href="#">
              <span className="text-primary">termes et conditions</span>
            </Link>
            , et notre{" "}
            <Link href="#">
              <span className="text-primary">politique deconfidentialite</span>
            </Link>
          </h6>

          <Button
            btnClass="w-full mt-[30px] text-white mb-[20px] font-semibold bg-primary hover:bg-primary-focus"
            value="Credentials Login"
          />
          <h6 className="label-text mb-[60px] flex justify-between text-sm sm:text-base">
            <Link href="/forget_password">Mot de passe oublie?</Link>
            <Link href="/signup">
              Pas encore membre? <span className="text-primary">Inscris toi</span>
            </Link>
          </h6>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
