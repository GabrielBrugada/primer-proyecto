import { useState } from 'react';
import './App.css';
import Testimonial from './components/Testimonial';

import Photo1 from './images/image-gabriel.jpg'
import Photo2 from './images/profile2.jpg'
import Photo3 from './images/profile3.jpg'
import Button from './components/Button';

function App() {

    const [theme, setTheme] = useState('light')

    function onClickFn() {
        if(theme== 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <div className={'main-container ' + theme}>
            <Button
                onClickFn = {onClickFn}
                value = {theme == 'dark' ? 'light' : 'dark'}
            />
            <Testimonial
                img={Photo1}
                name="Gabriel Brugada"
                stars="⭐⭐⭐⭐⭐"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam unde officiis possimus accusantium pudiandae xpedita tenetur error quas, velit,aut rerum neque assumenda, hic veniam ipsa facere accusamus ut rem?" />
            <Testimonial
                img={Photo2}
                name="Sonya Ruth"
                stars="⭐⭐⭐⭐"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam unde officiis possimus accusantium pudiandae xpedita tenetur error quas, velit,aut rerum neque assumenda, hic veniam ipsa facere accusamus ut rem?" />
            <Testimonial
                img={Photo3}
                name="Eva Boycka"
                stars="⭐⭐⭐"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam unde officiis possimus accusantium pudiandae xpedita tenetur error quas, velit,aut rerum neque assumenda, hic veniam ipsa facere accusamus ut rem?" />

        </div>
    )
}
export default App;