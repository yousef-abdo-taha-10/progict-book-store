import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './BooksDetails.css'
const BookDetails = () => {
  const { DetailsID: id } = useParams(); // الحصول على معرف الكتاب من الرابط
  const [book, setBook] = useState({}); // تهيئة الكتاب ككائن فارغ
  const [loading, setLoading] = useState(true); // تهيئة التحميل كقيمة منطقية
  const [error, setError] = useState(null); // تهيئة الخطأ كقيمة فارغة

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:4000/books/${id}`);
          setBook(response.data); // تخزين بيانات الكتاب
          console.log(response.data);
        }
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError("حدث خطأ في جلب بيانات الكتاب.");
      } finally {
        setLoading(false); // إيقاف التحميل بعد الجلب
      }
    };

    fetchBookData();
  }, [id]);

  if (loading) {
    return <p>جارٍ التحميل...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="book">
      <h1>{book.title}</h1>
      {/* <br /> */}
      <img
        src={book.image}
        alt={book.title}
        style={{ width: "200px", height: "auto" }}
      />
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Published_year:</strong> {book.published_year}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
    
    </div>
  );
};

export default BookDetails;
