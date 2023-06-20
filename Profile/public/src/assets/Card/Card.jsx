
import './CardStyle.css'

export function Card(){
 return(<>
    <div className="CardStyle">
        <div className='ImgCard'>
          <div></div>
        </div>

        <div className='DisplayText'>
            <div className='ContainerText'>
                <h4 className='title is-4'>Marcos Gregorio</h4>
                <p className='subtitle'>São Paulo/Sp</p>
                <p>User interface designer and full-stack developer.</p>
           </div>

           <div className='ContainerBtn'>
            <div className='btn'><a href="https://www.linkedin.com/in/marcos-gregorio-vieira/">Message</a></div>
            <div className='btn'><a href="https://github.com/Marcos-Gregorio">Follow me</a></div>
           </div>

        </div>
        <div className="SkilCards">
            <h5 className='subtitle'>SKILLS</h5>
            <div>
                <span className='tag'>HTML/CSS</span>
                <span className='tag'>SASS</span>
                <span className='tag'>BootStrap</span>
                <span className='tag'>JavaScript</span>
                <span className='tag'>NODE.JS</span>
                <span className='tag'>React.JS</span>
                <span className='tag'>UI/UX</span>
                <span className='tag'>SQL</span>
            </div>
        </div>
    </div>
    </>)
}