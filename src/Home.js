import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {

    return (
<>
<div className='solid' style={{'margin-top': '10rem'}}>
<h2 className='txt'>Inodigitalsig2020 SRL  </h2>
<h2 className='txt'>–</h2>
<h2 className='txt'>Repetiția este pentru roboți, iar creativitatea pentru oameni.</h2>
</div>
<div className='notSolid'>
        <h3 className='txt2'>Credem în viitorul afacerilor românești
și ne dorim să contribuim la sănătatea și sustenabilitatea acestora
prin digitalizarea proceselor profitabile

</h3>
</div>
<div className='solid'>
    <h4 className='txt'>Înființată în ian.2021, Inodigitalsig2020 își propune să contribuie la digitalizarea IMM-urilor printr-o abordare inversă:</h4>
        <ul className='list' >
            <li>
            </li>
        <li>
    •	Pleacă de la Identificarea proceselor care creează valoare
        </li>
         <li>
    •	Construiește soluțiilor tehnice pentru transformare digitală a acestora
        </li>
         <li>
   •	Implementează soluțiile alese și evaluează rezultatele prin impactul în finanțele firmei;
        </li>
        </ul>
</div>
<div className='notSolid'>
        <h3 className='txt2'>Nu ezita sa ne contactezi</h3>
        <button className='btn'>
        <Link to='/contact'>Contacteaza-ne</Link>
        </button>
</div>
<div className='solid'>
    <h4 className='txt'>Inodigitalsig2020 are competențe în domeniilor:</h4>
        <ul className='list'>
            <li>
            </li>
        <li>
    •	RPA (UiPath);
        </li>
         <li>
   •	Scripting (PowerShell și Python);
        </li>
         <li>
   •	OOP (C#, Java);
        </li>
        </ul>
</div>

</>
    );
}

export default Home;