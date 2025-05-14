import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, password, email, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="marvinrivas076@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger text-dark mt-2 ">Borrar</button>
    </>
  );
};
