import React from "react";
import styles from "./calendar.module.css";

// Статические данные о погоде для дней месяца
const weatherData = [
  { day: 1, temp: "+6", icon: "☁️" },
  { day: 2, temp: "+4", icon: "🌧️" },
  { day: 3, temp: "+5", icon: "⛅" },
  { day: 4, temp: "+6", icon: "☀️" },
  { day: 5, temp: "+5", icon: "☀️" },
  { day: 6, temp: "+7", icon: "☀️" },
  // Продолжить добавлять данные для каждого дня месяца...
];

// Генерация сетки на основе дней месяца
const generateMonthDays = (daysInMonth: number) => {
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const weather = weatherData.find((w) => w.day === i) || {
      day: i,
      temp: "N/A",
      icon: "❓",
    };
    days.push(weather);
  }
  return days;
};

export default function MonthlyWeatherCalendar() {
  const daysInMonth = 31; // Задаём количество дней в месяце
  const days = generateMonthDays(daysInMonth);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h2>Январь 2024</h2>
      </div>
      <div className={styles.grid}>
        {days.map((day, index) => (
          <div key={index} className={styles.day}>
            <div className={styles.date}>
              <span>{day.day}</span>
            </div>
            <div className={styles.weather}>
              <span className={styles.icon}>{day.icon}</span>
              <span className={styles.temp}>{day.temp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
