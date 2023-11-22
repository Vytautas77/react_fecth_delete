import axios from "axios";
import styles from "./picture.module.css";
const Picture = ({ author, pictureName, price, imgUrl, id }) => {
  const apiUrl = "https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/";

  const onDeletePicture = () => {
    localStorage.setItem("PictureId", id);
    const pictureID = localStorage.getItem("PictureId");
    if (pictureID) {
      axios
        .delete(`${apiUrl}/${pictureID}`)
        .then((response) => {
          console.log("Delete successful", response);
          localStorage.removeItem("PictureId");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting resource", error);
        });
    } else {
      console.error("No PictureId found in local storage");
    }
  };
  return (
    <div className={styles.wrapper}>
      <img src={imgUrl} />
      <h3> {author}</h3>
      <h2> {pictureName}</h2>
      <h4> Price: {price} &#8364;</h4>
      <div className={styles.button}>
        <button onClick={onDeletePicture}> Delete </button>
        <button> Update </button>
      </div>
    </div>
  );
};

export default Picture;
