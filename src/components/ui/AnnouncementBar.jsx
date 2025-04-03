import React from "react";
import css from "./AnnouncementBar.module.css";

function AnnouncementBar() {
  return (
    <div className={css.announcementBar}>
      <span className={css.leftAnnouncementBarText}>
        `CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | `
      </span>
      <span className={css.announcementBarText}>
        FREE SHIPPING on orders &gt; $200
      </span>
      <span className={css.RightAnnouncementBarText}>
        ` | easy 45 day return window.`
      </span>
    </div>
  );
}

export default AnnouncementBar;
