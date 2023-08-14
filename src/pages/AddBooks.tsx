import RootLayout from "../components/Layout/RootLayout"
import toast, { Toaster } from 'react-hot-toast';
import { baseUrl } from "../utils/baseURL";
import { useForm, SubmitHandler } from "react-hook-form"

type IEditBooks = {
    title: string
    author: string
    genre: string
    publicationYear: number
    publishedBy: string
    imageUrl: string
}


const AddBooks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IEditBooks>()
    const onSubmit: SubmitHandler<IEditBooks> = async (data) => {
        const bookData = {
            title: data.title,
            author: data.author,
            genre: data.genre,
            publicationYear: data.publicationYear,
            publishedBy: data.publishedBy,
            imageUrl: data.imageUrl
        }
        // const url = `${baseUrl}/book`
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         // "authorization":`Bearer ${localStorage.accessToken}`
        //     },
        //     body: JSON.stringify(bookData),
        // })
        //     .then(res => res.json)
        //     .then(data => {
        //         console.log('data posted', data);
        //     })
    }
    return (
        <>
            <RootLayout>
                <div className="flex justify-center items-center w-screen h-scree">
                    <div className="container mx-auto my-4 px-4 lg:px-20">

                        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex">
                                    <h1 className="font-bold uppercase text-5xl">Add Your<br /> Book</h1>
                                </div>


                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Book Title*" {...register("title", {
                                            required: {
                                                value: true,
                                                message: "Book Title is required"
                                            }
                                        })} />


                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Author*" {...register("author", {
                                            required: {
                                                value: true,
                                                message: "Author is required"
                                            }
                                        })} />


                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Book Genre ( Fiction, Action, Noble , Science ) etc*" {...register("genre", {
                                            required: {
                                                value: true,
                                                message: "Book Genre is required"
                                            }
                                        })} />


                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Published By*" {...register("publishedBy", {
                                            required: {
                                                value: true,
                                                message: "Published by is required"
                                            }
                                        })} />

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Publication year*" {...register("publicationYear", {
                                            required: {
                                                value: true,
                                                message: "Publication year  is required"
                                            }
                                        })} />

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Book Image Live URL*" {...register("imageUrl", {
                                            required: {
                                                value: true,
                                                message: "Book Image Live URL is required"
                                            }
                                        })} />


                                </div>

                                <div className="my-2 w-1/2 lg:w-1/4">
                                    <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-primary  text-gray-100 hover:text-primary hover:bg-white hover:shadow transition cursor-pointer p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                        Edit Book
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

            </RootLayout></>
    )
}

export default AddBooks