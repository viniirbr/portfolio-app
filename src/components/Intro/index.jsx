import axios from "axios";
import { useEffect, useState } from "react"

export default function Intro() {

    const [name, setName] = useState('');

    useEffect(() => {
        const endpoint = window.location.pathname.substring(1,window.location.pathname.length);
        axios.get(`https://api.github.com/users/${endpoint}`).then(({ data }) => {
            setName(data.name)
        })
    }, [])

    return (
        <div>
            <h1>{name!=='' && `Olá eu sou ${name}`}</h1>
        </div>
    )
}
