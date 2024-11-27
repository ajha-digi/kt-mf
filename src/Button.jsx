import React from 'react';
import {useSelector} from "react-redux";

function Button() {
  const data = useSelector(state => state.demo);
  console.log("remote", data);
  return (
    <div>Button from remote App</div>
  )
}

export default Button