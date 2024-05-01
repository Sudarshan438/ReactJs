import React from 'react';
import { useRouteError } from "react-router-dom";

export const Error = () => {
    const {status, statusText} = useRouteError();
  return (
    <div>
        <h1>oops!!</h1>
        <h2>Something went wrong</h2>
        <h3>{status}: {statusText}</h3>
    </div>
  )
}
