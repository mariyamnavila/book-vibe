import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category,rating,totalPages } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="bg-gray-600 py-8 rounded-2xl mt-6 mx-6" >
                    <img
                        src={image}
                        className=" h-[166px] "
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-4">
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-active btn-xs bg-[#23BE0A0D] text-[#23BE0A]">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-bold text-2xl">
                        {bookName}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p className="font-medium">By: {author}</p>
                    <div className="border-t-2 border-dashed border-[#c5b4b426]"></div>
                    <div className="card-actions justify-between mt-3">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;