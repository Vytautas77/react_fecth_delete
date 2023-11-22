import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>Logo</div>
      <div>
        <button className={styles.addBtn}>Add post</button>
      </div>
    </div>
  );
};

export default Header;
