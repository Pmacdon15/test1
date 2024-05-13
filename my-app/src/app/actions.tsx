//@/app/actions.tsx
'use server'
import { z } from 'zod'
 
const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  })

export async function createUser(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
      })
     
      // Return early if the form data is invalid
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
  return {
    message: 'Please enter a valid email',
  }
}