'use client'
import { signOut } from 'next-auth/react'

const SignOut = () => {
  return (
    <button onClick={signOut} className="btn text-white font-semibold bg-primary hover:bg-primary-focus">Se connecter</button>
    // <button onClick={signOut}>Sign Out</button>
  )
}

export default SignOut
