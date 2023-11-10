'use client'
import {forgotPasswordWithCredentials, resetPasswordWithCredentials} from '@/actions/authActions'
import Link from 'next/link'
import Button from "../Global/Button"
import Form from "../Global/Form"

const ForgetPasswordComponent = () => {
  
  async function handleFotgotPassword(formData) {
    const email = formData.get("email");
    
    const res = await forgotPasswordWithCredentials({ email });
    if (res?.msg) alert(res?.msg);
  }
  
  return (
    <>
      <header className="text-header pl-9 pt-[34px] text-2xl font-semibold">Coflow</header>
      <div className="mt-10 flex flex-1 flex-col items-center justify-items-center px-10 px-10 md:mx-auto md:w-full lg:w-[773px] lg:flex-shrink-0 lg:rounded-[26px] lg:shadow-3xl">
        <h2 className="align mt-[37px] mt-[51px] flex flex-col items-center">
          Bienvenue sur ma page de
          <div>crowdfunding</div>
        </h2>
        <Form action={handleFotgotPassword}>
          <label className="label" htmlFor="emailInp">
            <h6 className="label-text text-sm sm:text-base">Adresse email</h6>
          </label>
          <input
            className="input input-bordered bg-lightgray sm:w-[256px] md:w-[500px] lg:w-[693px]"
            type="email"
            name="email"
            id="emailInp"
            placeholder="Email"
            required
          />
          <Button
            btnClass="w-full mt-[30px] mb-[51px] text-white mb-[20px] font-semibold bg-primary hover:bg-primary-focus"
            value="Réinitialiser le mot de passe"
          />
        </Form>
      </div>
    </>
  )
}

export default ForgetPasswordComponent
