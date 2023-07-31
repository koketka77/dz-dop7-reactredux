import React from "react";
import classes from "./Booklist.module.css";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../store/reducers/CartCreator";

const BookListItem = ({ book }) => {
  const { id, title, author, price, imgUrl } = book;
  const dispatch = useDispatch();
  // console.log(imgUrl);
  const onAddToCart = () => dispatch(addBookToCart(id));

  return (
    <li className={classes.list_item}>
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt="book" />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </li>
  );
};

export default BookListItem;
