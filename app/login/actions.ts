'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'
import { Provider } from '@supabase/supabase-js'
import { getURL } from '../../utils/helpers'

export async function emailLogin(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?message=Invalid credentials. Please try again.')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/login?message=Error signing up. Please try again.')
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

export async function OAuthSignin(provider: Provider) {
  if(!provider) {
    return redirect('/login?message=Error signing in with OAuth provider')
  }
  const supabase = await createClient()
  const redirectUrl = getURL('/auth/callback')
  const { data, error } = await supabase.auth.signInWithOAuth({ provider, options: {
    redirectTo: redirectUrl
  }  })
  if(error) {
    return redirect('/login?message=Error signing in with OAuth provider')
  }
  return redirect(data.url)

}