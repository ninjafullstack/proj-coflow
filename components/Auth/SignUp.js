"use client";
import {signUpWithCredentials} from '@/actions/authActions'
import {signIn} from 'next-auth/react'
import Link from 'next/link'
import Button from '../Global/Button'
import Form from '../Global/Form'

const SignUp = ({ callbackUrl }) => {
  async function handleSignUpCredentials(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signUpWithCredentials({ name, email, password });
    if (res?.msg) alert(res?.msg);
  }

  return (
    <>
      <header className="text-header pl-9 pt-[34px] text-2xl font-semibold">Coflow</header>
      <div className="flex flex-1 flex-col items-center justify-items-center px-10 md:mx-auto md:w-full lg:w-[773px] lg:flex-shrink-0 lg:rounded-[26px] lg:shadow-3xl">
        <h2 className="align mt-[51px] flex flex-col items-center justify-center">
          Creez votre compte pour
          <div>poursuivre votre participation</div>
        </h2>
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
        <h6 className="mb-[37px] text-sm sm:text-base">Ou bien inscrivez-vous avec votre adresse email</h6>
        <Form action={handleSignUpCredentials}>
          <label className="label" htmlFor="nameInput">
            <h6 className="label-text text-sm sm:text-base">Nom d’utilisateur</h6>
          </label>
          <input
            className="input input-bordered mb-10 w-full bg-lightgray lg:w-[693px]"
            type="text"
            name="name"
            placeholder="Name"
            id="nameInput"
            required
          />
          <label className="label" htmlFor="emailInput">
            <h6 className="label-text text-sm sm:text-base">Adresse email</h6>
          </label>
          <input
            className="input input-bordered mb-10 w-full bg-lightgray lg:w-[693px]"
            type="email"
            id="emailInput"
            name="email"
            placeholder="Email"
            required
          />
          <label className="label" htmlFor="passInp">
            <h6 className="label-text text-sm sm:text-base">Mot de passe</h6>
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
            value="S’inscrire"
          />
        </Form>
        <h6 className="label-text mb-[52px] flex justify-between text-sm sm:text-base">
          <Link href="/signin">
            Deja inscrit? <span className="text-primary">Connecte toi</span>
          </Link>
        </h6>
      </div>
    </>
  );
};

export default SignUp;
