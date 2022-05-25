import React from 'react'
import { HeaderNavItem } from './HeaderNavItem'

const navItems = ['Bio', 'Experiência', 'Projetos'] //esse array será obtido dinamicamente através do readme

export function Header() {
    return (
        <header className='bg-main w-full h-24 px-8 flex flex-col items-center justify-center'>
            <nav className='flex justify-between items-center w-full'>
                <ul className='flex justify-around gap-3'>
                    {navItems.map((item, id) => <HeaderNavItem key={id}>{item}</HeaderNavItem>)}
                </ul>
                <button>Github</button>
            </nav>
                <hr className='mx-10 text-orange border-solid'/>
        </header>
    )
}
