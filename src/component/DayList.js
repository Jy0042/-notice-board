import { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import uesFetch from "./hooks/useFetch";

export default function DayList() {
    const days = uesFetch("http://localhost:3001/days")
    
    if(days.length === 0){
        return <span>Loading... 기둘 ㄱㄷㄱㄷ</span>
    }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}