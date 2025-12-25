import Alert from '@/components/ui/Alert'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className='mb-10'>
        <h2 className='mb-2'>Welcome back!</h2>
        <p className='font-semibold heading-text'>
          Please enter your credentials to sign in!
        </p>
      </div>
      <Alert showIcon className='mb-4' type='danger'>
        <span className='break-all'>fnlnfgjksndgkjnsdk</span>
      </Alert>
    </>
  )
}

export default SignIn
