import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Marvin',
        email: 'marvin@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {

        const {name, value} = target
        setformState({
            ...formState,
            [name]: value //Propiedades computadas
        })
    }

    useEffect( () => {
        console.log('use Efecct')
    }, [])

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text" 
        className='form-control'
        placeholder='UserName'
        name='username'
        value={username}
        onChange={onInputChange}
        />
        <input type="email" 
        className='form-control mt-2'
        placeholder='marvinrivas076@google.com'
        name='email'
        value={email}
        onChange={onInputChange}
        />
    </>
  )
}
