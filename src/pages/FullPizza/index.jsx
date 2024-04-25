import React from "react";
import axios from "axios";
import styles from "./FullPizza.module.scss";
import { useParams } from "react-router-dom";
function FullPizza() {
  const [params, setParams] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchParams() {
      try {
        const res = await axios.get(
          "https://cca543363d3efb33.mokky.dev/items/" + id
        );
        setParams(res.data);
      } catch (error) {
        alert("При загрузке пиццы произошла ошибка");
      }
    }
    fetchParams();
  }, []);
  if (!params) {
    return "loading";
  }
  return (
    <div className={styles.root}>
      <div>
        <img className={styles.img} src={params.imageUrl} alt="pizza" />
      </div>
      <div>
        <h2 className={styles.title}>{params.title}</h2>
        <p className={styles.desc}>{params.desc}</p>
      </div>
    </div>
  );
}
export default FullPizza;
