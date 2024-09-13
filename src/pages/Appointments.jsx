import React, { useContext, useEffect, useState } from 'react';
import { DocContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();  
  const { doctors } = useContext(DocContext);
  const days=['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Clear previous slots
    let today = new Date();
  
    // Iterate through the next 7 days
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Get the date for the next days
  
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Appointments end at 9 PM
  
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
  
      let timeSlots = [];
  
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
  
        currentDate.setMinutes(currentDate.getMinutes() + 30); // Add 30 minutes to get the next slot
      }
  
      setDocSlots((prev) => [...prev, timeSlots]); // Push the calculated time slots for each day
    }
  };
  

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{
      getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    // console.log(docSlots);
  },[docSlots])

  if (!docInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg '
            src={docInfo.image || '/path/to/default-image.jpg'} 
            alt={docInfo.name || 'Doctor Image'} 
          />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5 ' src={assets.verified_icon} alt="" />
          </p>

            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className='py-0.5 px-2 border border-gray-400 text-xs rounded-full '>{docInfo.experience}</button>
            </div>

            <div>
              <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>  About <img src={assets.info_icon} alt="" />   </p>
              <p className='text-sm text-gray-600 max-w-[700px] mt-1'> {docInfo.about}  </p>
            </div>

            <p className='text-gray-500 font-medium mt-6  '>
            Appointment fee: $<span className='text-gray-600'>{docInfo.fees}</span>
            </p>

        </div>
      </div>
    


      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-3xl cursor-pointer ${slotIndex===index? 'bg-primary text-white' : 'border border-gray-200  '}`} key={index}>
            <p>{item[0] && days[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
      ))}
      </div>

      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
          {docSlots.length && docSlots[slotIndex].map((item, index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime?'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
      </div>

      <button className=' bg-primary text-white text-base font-normal px-14 py-3 rounded-full my-6 '>Book an Appointment</button>

      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointments;
