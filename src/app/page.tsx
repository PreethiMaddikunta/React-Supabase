import AuthForm from './auth-form'

export default function Home() {
  return (
    <div  className="row container" style={{padding: "50px 0 100px 0"}}>
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}