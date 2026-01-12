import { useParams } from "react-router-dom";
import soapsData from "../../pages/SoapData";

const ProductView = () => {
  const { id } = useParams();
  const soap = soapsData.find(s => s.id === +id);

  return (
    <div style={{ padding: 20 }}>
      <img src={soap.image} width="300" />
      <h2>{soap.name}</h2>
      <p>{soap.notes}</p>

      <h4>Ingredients</h4>
      <p>Natural oils, herbs</p>

      <h4>Benefits</h4>
      <p>Glow, nourishment</p>

      <h4>Rating ⭐ {soap.rating}</h4>
      <p>★★★★★ Excellent soap</p>
    </div>
  );
};

export default ProductView;
