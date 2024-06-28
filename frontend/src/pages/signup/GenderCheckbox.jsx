import React from 'react'

function GenderCheckbox({onChangeCheckbox,selectedGender}) {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label cursor-pointer  ${selectedGender==="male"?"selected":""}`} >
                <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900'
            checked={selectedGender==="male"}
            onChange={()=>{onChangeCheckbox("male")
            
        }}
            ></input>
            </label>
        </div>
        <div className='form-control'>
            <label className={`label cursor-pointer  ${selectedGender==="female"?"selected":""}`}>
                <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900'
            checked={selectedGender==="female"}
            onChange={()=>onChangeCheckbox("female")}
            ></input>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox