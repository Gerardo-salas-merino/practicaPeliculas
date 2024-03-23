import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLogged }) => {

   const navigate =  useNavigate()

    const hanldeSubmit = (e) => {
        e.preventDefault()
        //Extraemos los valores de los inputs
        const email = e.target.email.value
        const password = e.target.password.value

        if(email === 'test@test.com' && password === 'asd'){
            //Login exitoso
            setIsLogged(true)
            navigate('/');
        }else{
            //Credenciales invalidas
            alert("Credenciales Invalidas")
        }
    }
  return (
    <main className='w-full h-screen bg-blue-600 flex items-center justify-center'>

        <div className='w-full h-full lg:h-[70%] lg:max-w-md bg-white lg:rounded-lg shadow-xl grid items-center'>
            <form onSubmit={hanldeSubmit} className='p-8'>
                <h2 className='text-3xl text-center mb-8'>Sign in</h2>

                <div className='grid gap-5 mb-10'>
                    <div className='mb-6'>
                        <label htmlFor='email' className='block mb-2'>Email</label>
                        <input id='email' name='email' type='email' className='w-full px-3 py-2 bg-blue-200 rounded-md focus:outline-none focus:bg-white' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='password' className='block mb-2'>Password</label>
                        <input id='password' name='password' type='password' className='w-full px-3 py-2 bg-blue-200 rounded-md focus:outline-none focus:bg-white' />
                    </div>
                </div>
                

                <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300'>Login</button>
            </form>
        </div>
    </main>
    
  )
}

export default Login;