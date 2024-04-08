function CurrentTime(){
    
    const date=new Date();
    const currentDate=date.toDateString();
    const currentTime=date.toLocaleTimeString();

    return <>
        <h3>Date : {currentDate}</h3>
        <h3>Time : {currentTime}</h3>
    </>
}

export default CurrentTime;