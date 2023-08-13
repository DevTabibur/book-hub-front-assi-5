
import './AllBooks.css'
const AllBooks = () => {

    return (
        <>
            <div className="container mx-auto px-4 mb-24">
                <div className="section-title text-center mx-auto my-8">
                    <h1 className='text-5xl font-bold text-primary'>Popular Books</h1>
                    <p className='text-dark text-xl my-8'>read books.</p>
                </div>

                {/* dynamic book card */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="card w-full glass">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-between">
                                <button className="btn btn-primary btn-sm">WishList</button>
                                <button className="btn btn-primary btn-sm">Pan to read soon</button>
                            </div>
                        </div>
                    </div>

                </div>

                

            </div>
        </>
    )
}

export default AllBooks