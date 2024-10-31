import './Recipe'

import tomato from './assets/tomato.png';
import carrot from './assets/carrot.png';
import lettuce from './assets/lettuce.png';
import pepper from './assets/bell-pepper.png';
import chilli from './assets/red-chili-pepper.png';
import tea from './assets/herbal-tea.png';
export default function NavBanner() {
    return (
        <div id='recipe-main'>
        <img src={tomato} alt="tomato" class="falling-ingredient ingredient1" width="50" height="50"></img>
        <img src={carrot} alt="carrot" class="falling-ingredient ingredient2" width="50" height="50"></img>
        <img src={lettuce} alt="lettuce" class="falling-ingredient ingredient3" width="50" height="50"></img>
        <img src={pepper} alt="pepper" class="falling-ingredient ingredient4" width="50" height="50"></img>
        <img src={chilli} alt="chilli" class="falling-ingredient ingredient5" width="50" height="50"></img>
        <img src={tea} alt="tea" class="falling-ingredient ingredient6" width="50" height="50"></img>
        <div class='box'>
      <nav>
      <ul>
        <li><a href="#beverages">Beverages</a></li>
        <li>Cakes</li>
        <li>Flour</li>
      </ul>
    </nav>
        <h1 className='recipes'>Recipe Book</h1>
         <div class='wave -one'></div>
         <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
    </div>
    )
}