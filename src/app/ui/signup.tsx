//@/app/ui/signup.tsx   
'use client'


import { createUser} from '@/app/actions'
import { useFormStatus, useFormState } from 'react-dom'

const initialState = {
  message: '',
}

export default function signup() {
  const [state, formAction] = useFormState(createUser, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <button>Sign up</button>
    </form>
  )
}

