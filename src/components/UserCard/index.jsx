import React from "react";
import { connect } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { selectFavourite } from "../../store/slices/userCardSlice";
import classNames from "classnames";
import styles from "./UserCard.module.sass";

function UserCard({ user, select }) {
  const heartClassName = classNames({
    [styles.favourite]: user.isFavourite,
    [styles.notFavourite]: !user.isFavourite,
  });
  const { firstName, lastName } = user;
  return (
    <div className={styles.userWrapper}>
      <h1 className={styles.title}>User Card</h1>
      <h2 className={styles.userName}>
        {firstName} {lastName}
      </h2>
      <button className={styles.userBtn} onClick={select}>
        <FaHeart className={heartClassName} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  select: () => dispatch(selectFavourite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
