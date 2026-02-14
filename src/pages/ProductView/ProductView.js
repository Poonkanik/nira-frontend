import { useParams } from "react-router-dom";
import soapsData from "../../pages/SoapData";
import "./ProductView.css";

// Material UI Rating
import Rating from "@mui/material/Rating";

const reviews = [
  {
    name: "Anita",
    rating: 5,
    comment: "Very nice soap, skin feels soft and fresh."
  },
  {
    name: "Rahul",
    rating: 4,
    comment: "Good fragrance and natural feel."
  },
  {
    name: "Priya",
    rating: 5,
    comment: "Perfect for daily use, loved it."
  }
];

const ProductView = () => {
  const { id } = useParams();
  const soap = soapsData.find(s => s.id === Number(id));

  if (!soap) return <h2>Product not found</h2>;

  return (
    <div className="product-view">

      {/* Image Section */}
      <div className="image-section">
        <img src={soap.image} alt={soap.name} />
      </div>

      {/* Details Section */}
      <div className="details">
        <h2>{soap.name}</h2>
        <p>{soap.notes}</p>

        <h4>Ingredients</h4>
        <p>Natural oils, herbs</p>

        <h4>Benefits</h4>
        <p>Glow, nourishment</p>

        {/* Rating */}
        <h4>Rating</h4>
        <Rating value={soap.rating} precision={0.5} readOnly />

        {/* Reviews */}
        <div className="reviews">
          <h3>Customer Reviews</h3>

          {reviews.map((review, index) => (
            <div key={index} className="review-box">
              <h4>{review.name}</h4>
              <Rating value={review.rating} readOnly size="small" />
              <p>{review.comment}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductView;