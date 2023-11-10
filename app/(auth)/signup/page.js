import SignUp from '@/components/Auth/SignUp'
import React from 'react'

const SignUpPage =  ({ searchParams: { callbackUrl } }) => {
  return (
    <SignUp callbackUrl={callbackUrl || "/"} />
  )
}

export default SignUpPage;
