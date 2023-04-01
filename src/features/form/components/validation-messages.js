import React, { forwardRef } from "react";
import { errorId, inputHref } from "./lib/id-helpers";

export const ValidationMessages = forwardRef(({ formName, context }, ref) => {
  const errors = Object.entries(context.fieldErrors);
  const size = errors.length;
  return (
    <div role="alert">
      <h3>
        There {size === 1 ? `is 1 error` : `are ${size} errors`} with this Form
      </h3>
      <ol>
        {errors.map(([name, message], i) => (
          <li key={name}>
            <a
              href={inputHref(formName, name)}
              id={errorId(formName, name)}
              ref={i === 0 ? ref : null}
            >
              {message}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
});
