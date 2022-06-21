import React from 'react'

const Form = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target

    props.change(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.submit()
  }

  return (
    <form onsubmit={handleSubmit}>
      <label>
        Name
        <input
          name='name'
          placeholder='name'
          value={props.values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          name='email'
          placeholder='email'
          value={props.values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Role
        <input
          name='role'
          placeholder='role'
          value={props.values.role}
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Create your own team!' />
    </form>
  )
}

export default Form
