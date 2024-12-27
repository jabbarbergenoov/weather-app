import classes from './calendar.module.css'

export default function CalendarSection() {
    return (
        <>
            <div className={classes.month}>
                <p className={classes.item}>Январь </p>
                <p className={classes.item}>февраль </p>
                <p className={classes.item}>март </p>
                <p className={classes.item}>апрель </p>
                <p className={classes.item}>май </p>
                <p className={classes.item}>июнь </p>
                <p className={classes.item}>июль </p>
                <p className={classes.item}>август </p>
                <p className={classes.item}>сентябь </p>
                <p className={classes.item}>октябрь </p>
                <p className={classes.item}>ноябрь </p>
                <p className={classes.item}>декабрь </p>
            </div>
        </>
    )
}