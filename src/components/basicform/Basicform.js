import React, { useState } from 'react'
import './Basicform.css';
const Basicform = () => {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    const [allEntry, setAllEntry] = useState([])

    const submiform = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return (
        <div className='form'>
            <form action="" onSubmit={submiform} >
                <div className='main'>
                    <div className='heading'>LOGIN FORM</div>
                    <div >
                        <label className='email'>Email : </label>
                        <input type='text' name='email' id='email' autoComplete='off'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='password'>
                        <label>Password : </label>
                        <input type='password' name='password' id='password' autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='login'> Login</button>
                </div>
            </form>

            <div>
                {

                    allEntry.map((all) => {
                        return (
                            <div className='output'>

                                <div>username:{all.email}</div>

                                <div>password:{all.password}  </div>

                            </div>
                        )

                    })

                }
            </div>
        </div>
    )
}
export default Basicform