import { SlLocationPin } from "react-icons/sl";
import { LuFileChartColumnIncreasing } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReadListBook = ({ book }) => {
    const { bookId, image, author, bookName, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
    return (
        <div className="border border-gray-400 p-6 flex rounded-2xl mb-6">
            <div className="py-8 px-12 bg-slate-600 rounded-2xl mr-6">
                <img className=" h-[172px]" src={image} alt={bookName} />
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex space-x-3">
                    <p ><span className="font-bold mr-4">Tags</span>{tags.map((tag, idx) => <button key={idx} className="btn btn-active btn-xs bg-[#23BE0A0D] text-[#23BE0A] mr-3">#{tag}</button>)}</p>
                    <p className="text-[#b6adadcc] flex items-center"><SlLocationPin  className="text-xl mr-2"/> Year Of Publishing:{yearOfPublishing}</p>
                </div>
                <div className="border-b border-[#c5b4b426] pb-4 flex space-x-3 text-[#a8a8a8cc]">
                    <p className="flex items-center"> <IoPeopleOutline className="text-2xl mr-2" /> Publisher:{publisher}</p>
                    <p className="flex items-center"> <LuFileChartColumnIncreasing  className="text-xl mr-2" /> Page {totalPages}</p>
                </div>
                <div className="flex space-x-3">
                    <button className="btn bg-[#328EFF26] text-[#328EFF] rounded-full">Category: {category}</button>
                    <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-full">Rating: {rating}</button>
                    <Link to={`/books/${bookId}`}><button className="btn btn-success rounded-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReadListBook;