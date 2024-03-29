import React from 'react'


//access to all the values that we passed inside the FormField in the CreatePost
const FormField = ({ LabelName, type, name, placeholder, value, 
handleChnage, isSurpriseMe, handleSurpriseMe }) => {

//rendering LabelName inside label tag
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {LabelName} 
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChnage}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      >
      
      </input>
      </div>
    </div>
  )

}

export default FormField