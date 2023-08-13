
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"

const Register = () => {
  type Inputs = {
    name: string
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password
    }

    const url = ``
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json)
      .then(data => {
        console.log('data posted', data);
      })



  }

  return (
    <>
      <div className="bg-cyan-800">
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
          <Link to={'/'} className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
            {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo" /> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">Book Hub</span>
          </Link>
          {/* <!-- Card --> */}
          <div className="bg-white shadow-lg rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
            <div className="p-6 sm:p-8 lg:p-16 space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Register to platform
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="your name"  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9 ]*$/,
                      message: "Name should be unique",
                    },
                  })} />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="your email" {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })} />
                  <label className="label my-1 py-0">
                    {errors.email?.type === "required" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                  <input type="password"
                    id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.password?.type === "required" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-sm font-medium text-red-800">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" required />
                  </div>
                  <div className="text-sm ml-3">
                    <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
                  </div>
                  <Link to={'/forget-password'} className="text-sm text-teal-500 hover:underline ml-auto">Lost Password?</Link>
                </div>
                <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">Register to your account</button>
                <div className="text-sm font-medium text-gray-500">
                  Not registered? <Link to={'/login'} className="text-teal-500 hover:underline">Create account</Link>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div></>
  )
}

export default Register