import styles from './item.module.css'

function Item(props){
    return <>
        <div className={styles.container}>
            <h5>{props.text}</h5>
            <h5>{props.date}</h5>
            <button>Delete</button>   
        </div>     
    </>
}

export default Item;