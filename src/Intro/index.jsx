import axios from "axios";
import { useEffect, useState } from "react"
import rectangle from './../assets/img/rectangle.svg'

export default function Intro() {

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        const endpoint = window.location.pathname.substring(1, window.location.pathname.length);
        axios.get(`https://api.github.com/users/${endpoint}`).then(({ data }) => {
            const { name, bio } = data;
            setName(name);
            setBio(bio)
            document.title = name;
        })
    }, [])

    return (
        <div className="bg-intro-bg h-[200px] bg-contain bg-left bg-no-repeat p-2.5" style={{backgroundImage:`url(${rectangle})`}}>
            {name !== ''
                ?
                <div>
                    <h4 className="font-sans font-bold">Olá! Eu sou</h4>
                    <h1>{name}</h1>
                    <h4>{bio}</h4>
                </div>
                :
                <h1>Usuário não encontrado</h1>
            }
        </div>
    )
}