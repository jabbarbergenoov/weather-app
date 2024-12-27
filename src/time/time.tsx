import sun from '/sun-solid (1).svg'
import classes from './time.module.css'


export default function TimeSection() {
    return (
        <>
            <div className={classes.time}>
                <h3 className="times">15:00</h3>
                <img className={classes.img} src={sun} alt="" />
                <h3 className="gradus">+12*</h3>
            </div>
        </>
    )
}