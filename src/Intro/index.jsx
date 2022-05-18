import axios from "axios";
import { useEffect, useState } from "react"

export default function Intro() {

    const [name, setName] = useState('');

    useEffect(() => {
        const endpoint = window.location.pathname.substring(1, window.location.pathname.length);
        axios.get(`https://api.github.com/users/${endpoint}`).then(({ data }) => {
            const { name } = data;
            setName(name);
            document.title = name;
        })
    }, [])

    return (
        <div className="bg-intro-bg h-[200px]">
            {name !== '' &&
                <div>
                    <h4 className="font-sans font-bold">Olá! Eu sou</h4>
                    <h1>{name}</h1>
                    <h4>Desenvolvedor Front End</h4>
                </div>
            }
        </div>
    )
}