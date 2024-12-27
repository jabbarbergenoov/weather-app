import { useState } from 'react';
import calendar from '/calendar-solid (1).svg';
import search from '/magnifying-glass-solid (2).svg';
import add from '/plus-solid (2).svg';
import classes from './navigator.module.css';
import SearchSection from '../search/search';
import CalendarSection from '../calendar/calendar';

export default function NavigatorSection() {
    const [currentView, setCurrentView] = useState<string>('search');

    function handleClick(view: string) {
        setCurrentView(view);
    }
    return (
        <>
            <div className={classes.nav}>
                <div onClick={() => handleClick('search')} className={classes.item}>
                    <img className={classes.img} src={search} alt="Search" />
                </div>
                <div onClick={() => handleClick('calendar')} className={classes.item}>
                    <img className={classes.img} src={calendar} alt="Calendar" />
                </div>
                <div onClick={() => handleClick('add')} className={classes.item}>
                    <img className={classes.img} src={add} alt="Add" />
                </div>
            </div>

            <div className={classes.content}>
                {currentView === 'search' && <SearchSection />}
                {currentView === 'calendar' && <CalendarSection />}
                {currentView === 'add' && <p>Показывается добавление</p>}
            </div>
        </>
    );
}
