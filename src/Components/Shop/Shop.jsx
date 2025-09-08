import Pant from "../Pant/Pant";
import Shirt from "../Shirt/Shirt";
import { Shirt_data } from "../../Api/data";
import { Pant_data } from "../../Api/data";
import "../Shop/Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop1">
        {Shirt_data.map((CurElem, index) => {
          return (
            <Shirt
              key={index}
              image={CurElem.image}
              price={CurElem.price}
              name={CurElem.name}
              category={CurElem.category}
            />
          );
        })}
      </div>
      <div className="shop2">
        {Pant_data.map((CurElem, index) => {
          return (
            <Pant
              key={index}
              image={CurElem.image}
              price={CurElem.price}
              name={CurElem.name}
              category={CurElem.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
