import React, { useEffect, useState } from 'react'


import styles from './Form.module.css'

const Form = () => {

    //to save the input data
    const data={
        name:'',
        email:'',
        password:''
    }

    // for this we need use state
    const [inputData,setInputData]=useState(data);

    // use effect is used when we want our component to re-render
    // we need to rerender the component when we want to show some extra info i.e a message
    const [flag,setFlag]=useState(false)
    // useEffect(()=>{
    //     console.log('Registered Successfully')
    // },[flag])


    function handleChange(e) {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));

        console.log(inputData);
    }

    function submit(e){
        if(!inputData.name || !inputData.email || !inputData.password){
            alert('All fields are Mandatory!!!')
        }
        else{
            e.preventDefault();
            setFlag(true) 
            
        }
        
    }
    

    return <>
        <div className={styles.formContainer}>
        {flag && <h2>Welcome {inputData.name}, You have been Registered!!</h2>}

            <h1>Registration Form</h1>
            <form action="" onSubmit={submit}>
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder='Name' 
                    name='name'
                    value={inputData.name}
                    
                    onChange={handleChange}
                />

                <label >Email</label>
                <input 
                    type="email" 
                    placeholder='Email' 
                    name='email'
                    value={inputData.email} 
                    onChange={handleChange}
                />

                <label >Password</label>
                <input 
                    type="password" 
                    placeholder='Password' 
                    name='password'
                    value={inputData.password}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
    </>
}

export default Form 