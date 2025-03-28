import { useForm } from "react-hook-form";
import './App.css'
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit=async(data)=>{
    let r = await fetch("http://127.0.0.1:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
   }

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-poster h-screen w-screen flex justify-center items-center">
          <div className='bg-white w-xl border-2 border-blue-700 shadow-md shadow-blue-100 flex flex-col gap-5'>
            <h1 className='text-blue-700 font-bold text-2xl text-center mt-5'>Registration form</h1>
            
            <input type="text" placeholder={`${errors.name?errors.name.message:'Name'}`} className={`input ${errors.name? 'border-2 border-red-600':"border-b-2 border-blue-400"}`} {...register('name',{required:{
              value:true,message:'Required'
            }})}/>
 
            <input type="text" placeholder={`${errors.email?errors.email.message:'Email Address'}`} className={`input ${errors.email? 'border-2 border-red-600':"border-b-2 border-blue-400"}`} {...register('email',{required:{
              value:true,message:"enter email!!"
            },pattern:{
              value:'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',message:"correct email!!"
            }})}/>

            <input type="text" placeholder={`${errors.country?errors.country.message:'Country'}`} className={`input ${errors.country? 'border-2 border-red-600':"border-b-2 border-blue-400"}`} {...register('country',{required:{
              value:true,message:"country name!!"
            }})}/>

            <input type="number" placeholder={`${errors.phone?errors.phone.message:'Phone'}`} className={`input ${errors.phone? 'border-2 border-red-600':"border-b-2 border-blue-400"}`} {...register('phone',{required:{
              value:true,message:"enter number!!"
            },minLength:{
              value:10,message:"enter correct number(not less than 10)!!"
            },maxLength:{
              value:10,message:"enter correct number(not more than 10)!!"
            }})} />

            <input type="password" placeholder={`${errors.password?errors.password.message:'Password'}`} className={`input ${errors.password? 'border-2 border-red-600':"border-b-2 border-blue-400"}`} {...register('password',{required:{
              value:true,message:'enter password!!'
            },minLength:{
              value:8,message:"enter atleast 8 length password"
            },})}/>

            <div className='flex gap-10 w-2/3 m-auto'>
              <input type="checkbox" name="" id="" {...register('checkbox',{required:{
                value:true,message:'accept terms & conditions'
              }})} />
              <p className='text-gray-400'>I accept terms & conditions</p>
            </div>
            {errors.checkbox&&<p className="text-sm text-red-500 w-2/6 m-auto">{errors.checkbox.message}</p>}

            <button className='w-1/2 ml-auto mr-auto mt-7 bg-blue-400 p-3 text-xl text-white font-bold rounded-4xl mb-10 hover:shadow-lg hover:cursor-pointer hover:shadow-blue-300'>Create Account</button>
          </div>

        </div>
      </form>
    </>
  )
}

export default App
