import React from "react";
import css from "./spinner.module.css";

/**
 * The element with the role & aria-live attributes needs to exist in the DOM
 * before the spinner is required. The change or addition of content inside that
 * element is what triggers the screen reader notification, not the addition of
 * those attributes on the element.
 */
export const Spinner = ({
  description = "Content is loading...",
  isLoading
}) => (
  <div
    aria-live="assertive"
    className={`${css.spinner} ${isLoading ? "" : "sr-only"}`}
    role="alert"
  >
    <span className="sr-only">{isLoading ? description : ""}</span>
  </div>
);
