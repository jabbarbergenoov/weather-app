import sun from '/sun-solid (1).svg';
import classes from './prognosis.module.css';
import TimeSection from '../time/time';

interface PrognosisSectionProps {
    city: string;
}

export default function PrognosisSection({ city }: PrognosisSectionProps) {
    return (
        <>
            <div className={classes.information}>
                <h3 className={classes.prognos}>{city ? `Погода в:  ${city}` : 'Выберите город'}</h3>
                <div className={classes.info}>
                    <h3 className={classes.h3}>+25*</h3>
                    <div className={classes.sun}>
                        <img src={sun} className={classes.image} alt="" />
                        <p className={classes.h3}>Sunny</p>
                    </div>
                </div>
            </div>
            <div className={classes.timeSection}>
            <TimeSection />
            <TimeSection />
            <TimeSection />
            <TimeSection />
            </div>
        </>
    );
}
