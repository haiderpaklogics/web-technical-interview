import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

const users = [
  {
    id: 1,
    firstname: "Adam",
    lastname: "Bonzai",
    email: "adam.b@iloverevive.com",
    password: "revive",
  },
  {
    id: 2,
    firstname: "Jeremy",
    lastname: "Thompson",
    email: "jeremy.t@iloverevive.com",
    password: "presale",
  },
  {
    id: 3,
    firstname: "David",
    lastname: "Blane",
    email: "david.b@iloverevive.com",
    password: "magic",
  },
]

const Form = () => {
  const [error, setError] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async (data: FieldValues) => {
    setLoading(true)
    const user = users.filter(
      (item) => item.email === data.username && item.password === data.password
    )
    setLoading(false)
    if (user.length < 1) setError("user not found")
    else {
        localStorage.setItem('username', JSON.stringify(data));
        window.location.href='/houses';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 ">Sign In</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Email"
            id="username"
            {...register("username", { required: true })}
            className="appearance-none border rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.username && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            {...register("password", { required: true })}
            className="appearance-none border rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  )
}

export default Form
