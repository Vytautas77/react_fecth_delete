import styles from "./pictures.module.css";
import Product from "../Picture/Picture";

const Pictures = ({ pictures }) => {
  return (
    <>
      {pictures && (
        <div className={styles.wrapper}>
          {pictures.map((picture) => (
            <div key={picture.id}>
              <Product
                author={picture.author}
                pictureName={picture.pictureName}
                price={picture.price}
                imgUrl={picture.pictureUrl}
                id={picture.id}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Pictures;
