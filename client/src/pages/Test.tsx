import React from 'react'
import '../tests/teststyle.css'

function Test() {
  return (
    // <div className='h-screen overflow-hidden relative'>
    //   <div className="diagonal-box">
    //     <div className="content">
    //       <div className='bg-red-600 '>
    //         hello
    //         {/* <img
    //           className=''
    //           src="https://eversuccessauto.com/wp-content/uploads/2018/01/revo-double1.png.jpg"
    //           alt="Car Image 1" /> */}
    //       </div>
    //       <div className='bg-white flex justify-center items-center'>
    //         {/* <img
    //           className='-96'
    //           src="https://carnetwork.s3.ap-southeast-1.amazonaws.com/file/da999ceb904940228fcad42f73febbf6.jpg"
    //           alt="Car Image 2" /> */}
    //       </div>
    //   </div>
    // </div>
    // <div className='bg-transparent h-96 w-full absolute top-0 left-0'>
    //       <h1>Hello</h1>
    // </div>
    // </div >
    <div className='w-full min-h-screen bg-blue-300 flex flex-row'>
      <div className='min-h-screen -skew-x-[30deg] w-full bg-yellow-400 -ml-52'>
          <div className='skew-x-[30deg]'>
          {/* <img
              className=''
              src="https://eversuccessauto.com/wp-content/uploads/2018/01/revo-double1.png.jpg"
              alt="Car Image 1" />  */}
          </div>
      </div>
      <div className='h-full -skew-x-[30deg] min-h-screen w-full bg-pink-500 -mr-40'>

      </div>
    </div>
  )
}

export default Test
