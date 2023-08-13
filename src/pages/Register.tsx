
import { useForm, SubmitHandler } from "react-hook-form"

const Register = () => {
  type Inputs = {
    name: string
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <div className="bg-slate-800">
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
          <a href="" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
            {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo" /> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">Book Hub</span>
          </a>
          {/* <!-- Card --> */}
          <div className="bg-white shadow-lg rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
            <div className="p-6 sm:p-8 lg:p-16 space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Register to platform
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="your name" required  {...register("name")}/>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="your email" required />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" required />
                  </div>
                  <div className="text-sm ml-3">
                    <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-teal-500 hover:underline ml-auto">Lost Password?</a>
                </div>
                <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">Register to your account</button>
                <div className="text-sm font-medium text-gray-500">
                  Not registered? <a href="" className="text-teal-500 hover:underline">Create account</a>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div></>
  )
}

export default Register