import '../Training/Training.css'

function Training(){
    return(
        <div>
            <p className='t1'>OUR TRAINING MODES FOR STUDENTS</p>
            <p className='stu'>
                <p className='dent'>
                    <h2 className='online'>Online Training</h2>
                    <p className='no'>Getin Technologies is offering Online Software Training and Placements by Industry Experts. You can gain the knowledge from anywhere of the world. We are using zoom, Google Meet and WebEx Platforms.</p>
                    <button className='enroll'>Enroll Now</button>
                </p>
                <p className='dent'>
                    <h2 className='room'>Classroom Training</h2>
                    <p className='no'>Getin Technologies offering Classroom based Software Training and Placements in Kovilpatti, Virudhunagar and Tuticorin by Industry Experts. Our classrooms are well equipped by AC, HD Displays and Lab Facility.</p>
                    <button className='enroll'>Enroll Now</button>
                </p>
                <p className='dent'>
                    <h2 className='learning'>E-Learning Training</h2>
                    <p className='no'>Getin Technologies is offering Recorded Software Training and Placements by Industry Experts. Our Pre-recorded session has been upgraded in every week based on latest Syllabus. You can download materials lifetime.</p>
                    <button className='enroll'>Enroll Now</button>
                </p>
            </p>
        </div>
    )
}
export default Training