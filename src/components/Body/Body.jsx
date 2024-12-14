import '../Body/Body.css'
import home from '../../Media/Getinhome.webp'
import growth from '../../Media/growth.webp'
import r from '../../Media/review1.webp'
import re from '../../Media/review2.webp'
import rev from '../../Media/eview3.webp'
import four from '../../Media/review4.webp'
import five from '../../Media/review5.webp'
import six from '../../Media/review6.webp'
import seven from '../../Media/review7.webp'
import s from '../../Media/1.webp'
import se from '../../Media/2.webp'
import sea from '../../Media/3.webp'
import sear from '../../Media/4.webp'
import searc from '../../Media/5.webp'
import search from '../../Media/6.webp'





function Body(){
    return(
        <div>
            <p className='hom'>
                <img src={home} alt="" />
            </p>
            <h4>Getin Technologies is Best Software Training with Placement Institutes in Kovilpatti and Virudhunagar.</h4>
            <p className='text'>Our Best training in both basic and advanced Software courses makes you shine in the IT Industry. We reinforce every candidate who craves to modernize themselves with the technology updates. Undoubtedly, Getin Technologies helps them the right trail to reach their IT Dreams.</p>
            <h2 className='text1'>Our Software training institute is focus our students Placement and their career growth !!!</h2>
            <p className='hom1'>
                <img src={growth} alt="" />
            </p>
            <h2 className='text2'>Getin Technologies is one of the top <span className='sub'>IT Training Institutes in Kovilpatti, Virudhunagar and Bangalore</span> specializing in all leading Software Technologies Providing best quality training solutions to Fresher and Experienced students. We are developing our students as a independent and dedicated employees through our Training. We have placed more than 3000+ individuals in Top MNC’s through our training programs and so we are well-known as one of the best <span>Placement Training Institutes in Tamilnadu.</span></h2>
            <h2 className='text3'>We offer professional career courses to eligible candidates and mold them into knowledgeable industry-expected skills. In our IT Training and Placement Institute in Kovilpatti, Virudhunagar and Bangalore. We cover the most popular IT courses with the most up-to-date curriculum. Because of the insufficient proficiency of the candidates, there will always be a skill gap in the industry for on-demand technologies. We place a greater emphasis on hands-on experience to ensure that our students outperform from the start. We conduct numerous mock interviews and assessments in order to compete in interviews to the best of our abilities. Our instructors provide our students with the necessary course knowledge to pass the technical rounds by providing them with numerous case studies and assignment</h2>
            <h2 className='text4'>Getin Technologies Reviews from students</h2>
          <p className='review'>
            <p className='hom2'>
                <img src={seven} alt="" />
            </p>
            <p className='hom2'>
                <img src={r} alt="" />
            </p>
            <p className='hom2'>
                <img src={re} alt="" />
            </p>
            <p className='hom2'>
                <img src={rev} alt="" />
            </p>
            <p className='hom2'>
                <img src={four} alt="" />
            </p>
            <p className='hom2'>
                <img src={five} alt="" />
            </p>
            <p className='hom2'>
                <img src={six} alt="" />
            </p>
          </p>
          <h2 className='text5'>WHY GETIN TECHNOLOGIES IS BEST TRAINING INSTITUTE</h2>
          <h2 className='text6'>If you are looking premium quality Software Training and Placements in Kovilpatti, Tuticorin, Tirunelveli and Virudhunagar, you are right place! We offer outstanding package for all!</h2>
        
            {/* next */}

            <p className='search'>
            <p className='hom3'>
                <img src={s} alt="" />
                <p className='detail'>100% Placement</p>
                <p className='emi'>Our Quality Placement Team assured to get 100% Placement to our students as a Fresher or Experienced Placement.</p>
            </p>
            <p className='hom3'>
                <img src={se} alt="" />
                <p className='detail'>EMI Option</p>
                <p className='emi'>Getin Technologies allows EMI option you to spread the cost of your course fees into manageable monthly payments.</p>
            </p>
            <p className='hom3'>
                <img src={sea} alt="" />
                <p className='detail'>Dedicated Lab</p>
                <p className='emi'>Our lab offers students hands-on learning, fostering creativity, collaboration, and practical skills.</p>
            </p>
            <p className='hom3'>
                <img src={sear} alt="" />
                <p className='detail'>Elastic Timing</p>
                <p className='emi'>Our students can select the flexible time slots for their classroom and Online Sessions. Backup classes available for missed Classes.</p>
            </p>
            <p className='hom3'>
                <img src={searc} alt="" />
                <p className='detail'>Mock Interview</p>
                <p className='emi'>Our Mock Interview Sessions boost our students Placement ratio. Our students can attend interviews confidently and Clearly.</p>
            </p>
            <p className='hom3'>
                <img src={search} alt="" />
                <p className='detail'>Security Features</p>
                <p className='emi'>Our Building fully Equipped with HD CCTV for All classrooms and Entrance Gate. So Feel free about your Security.</p>
            </p>
          </p>
        </div>

    )
}
export default Body