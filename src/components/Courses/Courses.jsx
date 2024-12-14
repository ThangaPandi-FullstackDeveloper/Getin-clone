import '../Courses/Courses.css'
import c from '../../Media/11.webp'
import co from '../../Media/12.webp'
import cou from '../../Media/13.webp'
import cor from '../../Media/14.webp'
import cors from '../../Media/15.webp'
import corse from '../../Media/16.webp'
import coo from '../../Media/17.webp'
import con from '../../Media/18.webp'
import coe from '../../Media/19.webp'
import cot from '../../Media/20.webp'
import cow from '../../Media/21.webp'
import coh from '../../Media/22.webp'
import im from '../../Media/download.png'


function Courses(){
    return(
        <div>

            <p className='text7'>Top Software Courses with Placements in Getin Technologies</p>
            <p className='course'>
                <p className='cou'>
                    <img src={c} alt="" />
                    <p>Python Fullstack Training</p>
                    <button className='ct'>More Details</button>
                </p>
                <p className='cou'>
                    <img src={co} alt="" />
                    <p>Java Fullstack Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={cou} alt="" />
                    <p>Digital Marketing Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={cor} alt="" />
                    <p>WordPress Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={cors} alt="" />
                    <p>Digital Analytics Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={corse} alt="" />
                    <p>UI/UX Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={coo} alt="" />
                    <p>Data Analytics Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={con} alt="" />
                    <p>Flutter Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={coe} alt="" />
                    <p>AWS DevOps Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={cot} alt="" />
                    <p>Data Science Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={cow} alt="" />
                    <p>Selenium Training</p>
                    <button className='ct'>More Details</button>

                </p>
                <p className='cou'>
                    <img src={coh} alt="" />
                    <p>Oracle Training</p>
                    <button className='ct'>More Details</button>
                </p>
            </p>
            <p className='ton'>
                    <button className='but'>More Courses...</button>
            </p>
            <p className='sty'>
                    <img src={im} alt="" />

            </p>
        </div>
    )
}
export default Courses