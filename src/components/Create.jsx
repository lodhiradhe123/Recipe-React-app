import React, { useContext, useState } from "react";
import { userContext } from "../context/Context";
import {  useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



const Create = () => {
  const navigate = useNavigate();
  const [recipy, setRecipy] = useContext(userContext);

  const [data, setData] = useState({
    id:uuidv4(),
    image: "",
    title: "",
    ingredients: "",
    description: "",
    instructions: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setRecipy([...recipy, data]);
    // console.log(data);
    // console.log(recipy);
    setData({
      image: "",
      title: "",
      ingredients: "",
      description: "",
      instructions: "",
    });
    navigate('/recipes')
  };

  return (
    <form className="w-[70%] m-auto  " onSubmit={submitHandler}>
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create <br /> New Recipe
      </h1>
      <input
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL"
        onChange={(e) => setData({ ...data, image: e.target.value })}
        value={data.image}
      />
      <input
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
        onChange={(e) => setData({ ...data, title: e.target.value })}
        value={data.title}
      />
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe description..."
        onChange={(e) => setData({ ...data, description: e.target.value })}
        value={data.description}
      ></textarea>
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
        onChange={(e) => setData({ ...data, ingredients: e.target.value })}
        value={data.ingredients}
      ></textarea>
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe instructions -> 'use comma to seperate instructions'..."
        onChange={(e) => setData({ ...data, instructions: e.target.value })}
        value={data.instructions}
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
