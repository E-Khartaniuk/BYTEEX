import React from "react";
import css from "./AnnouncementBar.module.css";

function AnnouncementBar() {
  return (
    <div className={css.announcementBar}>
      <span className={css.announcementBarText}>
        FREE SHIPPING on orders &gt; $200
      </span>
    </div>
  );
}

export default AnnouncementBar;
