import React from 'react'

const FormLogin = ({ onSubmit }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1>Регистация и вход</h1>
      <form
        onSubmit={onSubmit}
        className=' px-6 py-4 flex flex-col bg-slate-100 max-w-[500px]'
      >
        <label>
          Login: <input name='userName' />
        </label>
        <label>
          Password: <input name='userPassword' />
        </label>
        <button type='submit'>Войти</button>
      </form>
    </div>
  )
}

export default FormLogin