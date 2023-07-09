'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'
import { useSession, useSupabaseClient} from '@supabase/auth-helpers-react';

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  

  // const session = useSession();

  return (
    <div > 
      {/* {!session? ( */}
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={['google', 'facebook', 'twitter']}
      redirectTo="http://localhost:3000/auth/callback"
      />
      {/* ):(
        <p>Account page will go here</p>
      )} */}
      </div>
  )
}