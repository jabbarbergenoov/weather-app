import { useState } from "react";
import Button from "../Button/Button";
import classes from './search.module.css';
import PrognosisSection from "../prognosis/prognosisSection";

export default function SearchSection() {
    const [inValue, setInValue] = useState<string>('');
    const [infoCity, setInfoCity] = useState<string>(''); 

    const City = ['tashkent', 'nukus'];

    const filteredCities = City.filter((city) =>
        city.toLowerCase().includes(inValue.toLowerCase())
    );

    function handleClick(city: string) {
        setInfoCity(city);
        setInValue('')
    }

    return (
        <>
            <div className={classes.search}>
                <input
                    type="text"
                    className={classes.input}
                    value={inValue}
                    placeholder="Укажите Город"
                    onChange={(e) => setInValue(e.target.value)}
                />
                <Button>Search</Button>
            </div>
            {inValue && (
                <ul  className="result">
                    {filteredCities.length > 0 ? (
                        filteredCities.map((city, index) => (
                            <li key={index} onClick={() => handleClick(city)}>
                                {city}
                            </li>
                        ))
                    ) : (
                        <li>Город не найден</li>
                    )}
                </ul>
            )}
            {infoCity && <PrognosisSection city={infoCity} />}
        </>
    );
}
