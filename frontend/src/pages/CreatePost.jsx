import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {preview} from '..//assets';
import {getRandomPrompt} from '..//utils';
import { FormField, Loader } from '../components';

//this function will execute when user clicks on submit button

const handleSubmit = ()=>{

}

const generateImage = ()=>{

}

const handleChange  = (e)=>{

}

const handleSurpriseMe  = ()=>{

}



const CreatePost = () => {

  const navigate = useNavigate(); //this will allow us to navigate back to home page
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false)
//loading is set to default here
  return (
    <section>
      <div className="font-extrabold text-[#222328] text-[32px]">
        <h1>Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]"> 
          Create imaginative and visually stunning images generated through DALL-E AI and share with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName ="Your name"
            type ="text"
            name ="name"
            placeholder ="John Wick"
            value ={form.name}
            handleChange ={handleChange}
          />
          <FormField
            LabelName ="Prompt"
            type ="text"
            name ="prompt"
            placeholder ="a painting of a fox in the style of Starry Night"
            value ={form.prompt}
            handleChange ={handleChange}
            isSurpriseMe
            handleSurpriseMe
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 justify-center place-items-center items-center">
          { form.photo ? (
            <img 
              src={form.photo} 
              alt= {form.photo} 
              className="w-full h-full object-contain"
            />
          ): (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          { generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader/>
            </div>
          )}
          </div>      
        </div>

        <div className="mt-5 flex gap-5 w-full">
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-500 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center"
            >
              {generatingImg? 'Generating... ':'Generate Image'}
            </button>
        </div>

        <div className="mt-7">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image you want you can share it with the community now
          </p>
          <button
            type="submit"
            className="mt-7 text-white bg-[#6469ff] font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center "
          >
            {loading? 'Sharing....' : 'Share with the community'}
          </button>

        </div>
      </form>
    </section>
  )
}

export default CreatePost

//    { form.photo ? (
//   <img 
//   src={form.photo} 
//   alt= {form.photo} 
//   className="w-full h-full object-contain"
// />
// ): (
// <img
//   src={preview}
//   alt="preview"
//   className="w-9/12 h-9/12 object-contain opacity-40"
// />
// )} -- this is called dunamic block of code