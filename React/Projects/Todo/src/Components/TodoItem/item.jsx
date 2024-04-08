import styles from './item.module.css'

function Item(props){
    return <>
        <div className={styles.container}>
            <h5 className={styles.text}>{props.text}</h5>
            <h5 className={styles.date}>{props.date}</h5>
            <button>Delete</button>   
        </div>     
    </>
}

export default Item;