import { useState } from 'react';
import './style.css';
export default function Navbar({isShow=true}) {
    const [menuToggle,setMenuToggle]=useState(false);
    function handleMenuToggle(){
        setMenuToggle(!menuToggle)
    }
    return (
        <nav>
            <div>
                <h4>MabaQu</h4>
            </div>
            {isShow ? <>
            <ul className={`${menuToggle? 'slide': ''}`}>
                <li><a href="">Info Resiskom</a></li>
                <li><a href="">Info Himpunan</a></li>
                <li><a href="">Info Kepanitiaan</a></li>
                <li><a href="">Info Akademik</a></li>
            </ul>

            <div className="menu-toggle" onClick={handleMenuToggle}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            </div></>:<div></div>}

        </nav>
    )
}