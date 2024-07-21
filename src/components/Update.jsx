import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../context/Context";
import { toast } from "react-toastify";



const Update = () => {

  const { id } = useParams();

  //
  const navigate = useNavigate();
  const [recipy, setRecipy] = useContext(userContext);
  const dish = recipy.find((r) => r.id === id);

  const [data, setData] = useState({
    id: dish.id,
    image: dish.image,
    title: dish.title,
    ingredients: dish.ingredients,
    description: dish.description,
    instructions: dish.instructions,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const recipeIndex = recipy.findIndex((r) => r.id === id);
    const copyRecieps = [...recipy];
    copyRecieps[recipeIndex] = data;


    setRecipy(copyRecieps);
    console.log(recipeIndex);
    console.log(copyRecieps);
    setData({
      image: "",
      title: "",
      ingredients: "",
      description: "",
      instructions: "",
    });
    toast.success("Recipe Updated");

    navigate("/recipes");

  };
  //

  return (
    <form className="w-[70%] m-auto" onSubmit={submitHandler}>
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        update <br /> Recipe
      </h1>
      <input
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="enter image url here"
        onChange={(e) => setData({ ...data, image: e.target.value })}
        value={data.image}
      />
      <input
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="enter title here"
        onChange={(e) => setData({ ...data, title: e.target.value })}
        value={data.title}
      />
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="enter description here"
        onChange={(e) => setData({ ...data, description: e.target.value })}
        value={data.description}
      ></textarea>
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="ingrediants here"
        onChange={(e) => setData({ ...data, ingredients: e.target.value })}
        value={data.ingredients}
      ></textarea>
      <textarea
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="enter instructions"
        onChange={(e) => setData({ ...data, instructions: e.target.value })}
        value={data.instructions}
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Update Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Update;
