import styles from './Btn.module.css'

{/* Destructing the props Directly in the Arguments 'props' */}
function Btn({element,handleOnClick}){ 
    const btns=element;
    return <>
        <div className={styles.Btns}>
            {btns.map((item) => (
            <button key={item} onClick={handleOnClick} >{item}</button>
            ))}
        </div>
    </>
}

export default Btn;