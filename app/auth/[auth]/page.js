

import SignInComponent from '@/components/auth/signin';
import SignUpComponent from '@/components/auth/signup'
import React from 'react'

export default function Auth({ params }) {
  const { auth } = params;
  
  return (
    <div>
    {auth==='signin' && <SignInComponent/>}
    {auth==='signup' && <SignUpComponent/>}
</div>
  )
}
