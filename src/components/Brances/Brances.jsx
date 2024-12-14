import '../Brances/Brances.css'
import branch from '../../Media/brance1.webp'
import branc from '../../Media/brance2.webp'

function Brances(){
    return(
        <div>
            <p className='bran'>Getin Technologies Branches</p>
            <p className='tech'>
                <p className='nology'>
                    <img src={branch} alt="" />
                    <p className='patti'>Kovilpatti Branch</p>
                </p>
                <p className='nology'>
                    <img src={branc} alt="" />
                    <p className='patti'>Virudhunagar Branch</p>
                </p>
            </p>
            <p className='soft'>
                <p className='ware'>
                    <h2 className='so'>Software Training</h2>
                    <p className='ft'> Getin Technologies providing top-notch, industry-aligned software training to empower all levels of learners, from beginners to advanced professionals. We offer a dynamic array of courses that equip learners with the hands-on skills necessary to excel in their respective software courses. The curriculum curated by a team of expert mentors, keeping key industry needs and trends in mind. We focus on offering practical, real-world insights.</p>
                    <button className='re'>More Details</button>
                </p>
                <p className='ware'>
                    <h2 className='so'>Placement Training</h2>
                    <p className='ft'> Our Placement Training committed to bridging the gap between your academic qualifications and industry demands, providing comprehensive training followed by successful placement assistance. We offer comprehensive, industry-aligned training programs in various software domains. Our Placement training modules have been carefully curated to satisfy the demands of the ever-evolving tech industry and set our trainees on a successful career path.</p>
                    <button className='re'>More Details</button>
                </p>
                <p className='ware'>
                    <h2 className='so'>Internship Training</h2>
                    <p className='ft'> Getin Technologies Internship Training program commit to empowering the next generation of tech innovators, we offer meaningful, project-based internship Training that pave the way for a successful career in the software industry. We believe that valuable industry exposure forms the backbone of a successful professional journey. Our Internship Training program strives to go beyond the basic academic knowledge and offers hands-on experience.</p>
                    <button className='re'>More Details</button>
                </p>
            </p>
        </div>
    )
}
export default Brances