import Link from 'next/link'
import './styles/Navbar.style.css'
export default function Navbar(){
   return( 
   <nav className="navbar">
        <div>
            <h1>PokeApi</h1>
        </div>
        <ul>
            <li className="linkItems">
                <Link href="/">Home</Link>
            </li>
        </ul>
    </nav>
   )
}