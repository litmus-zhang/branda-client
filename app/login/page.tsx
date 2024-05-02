import { redirect } from 'next/navigation'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { emailLogin, signup } from './actions'
import { createClient } from '../../utils/supabase/server'
import { OAuthButtons } from './oauth-signin'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message?: string }
}) {
  const btnStyle = 'bg-primary hover:bg-blue-600 p-2 text-center w-full rounded text-white mt-2'
  const supabase = await createClient()
  const { data: {user} } = await supabase.auth.getUser()
  if(user){
    return redirect('/dashboard')
  }
  return (
    <div className=''>
      <Header/>

    <form className='flex flex-col gap-3 bg-white border p-8 items-start mx-auto justify-center w-[400px]'>
      <h1 className='text-3xl'>Login</h1>
      <p>
        Welcome back! Log in to your account
      </p>
      <label htmlFor="email">Email:</label>
      <input className='border px-3 py-1 rounded w-full' id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input className='border px-3 py-1 rounded w-full' id="password" name="password" type="password" required />
      {
        searchParams.message && <p className='text-red-500'>{searchParams.message}</p>
      }
      <button className={btnStyle} formAction={emailLogin}>Log in</button>
      <p>
        Don&apos;t have an account? <button className='text-primary underline' formAction={signup}>Sign up</button>
      </p>
      <OAuthButtons/>
    </form>
    <Footer/>
    </div>
  )
}