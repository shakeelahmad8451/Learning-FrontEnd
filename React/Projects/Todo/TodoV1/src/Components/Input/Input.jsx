import styles from './Input.module.css'

function Input(){
    return <>
        <div className={styles.container}>
            <input className={styles.text} type="text" placeholder='Type Here '/>
            <input className={styles.date} type="date" placeholder='Click Icon to Pick Date'/>
            <button className={styles.add}>Add</button>      
        </div>  
    </>
}

export default Input;