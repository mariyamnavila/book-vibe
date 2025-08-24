import { useLoaderData, useParams } from "react-router-dom";
import { AddToStoredReadList, AddToStoredWishList } from "../../Utility/AddToDd";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { 
        image,
        yearOfPublishing,
        publisher,
        tags,
        category,
        rating,
        totalPages,
        review,
        author,
        bookName } = book;

    const handleMarkAsRead = (id) => {
        AddToStoredReadList(id)
    }
    const handleAddToWishList = (id) => {
        AddToStoredWishList(id)
    }

    return (
        <div className="grid grid-cols-2 my-24  ">
            <div className="bg-gray-600 rounded-2xl p-20 mr-12">
                <img src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h3 className="text-4xl font-bold">{bookName}</h3>
                <p className="text-xl font-medium">By : {author}</p>
                <p className="border-y py-4 border-[#c5b4b426] text-xl font-medium">{category}</p>
                <p><span className="font-bold">Review:  </span>{review}</p>
                <p className="border-b border-[#c5b4b426] pb-6"><span className="font-bold mr-4">Tags</span>{tags.map((tag, idx) => <button key={idx} className="btn btn-active btn-xs bg-[#23BE0A0D] text-[#23BE0A] mr-3">#{tag}</button>)}</p>
                <div className="flex">
                    <div className="text-[#c5b4b469] w-[144px] mr-14 space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-semibold space-y-3">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex mt-8 space-x-4">
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline">Mark as Read</button>
                    <button onClick={()=>handleAddToWishList(bookId)} className="btn btn-info">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;