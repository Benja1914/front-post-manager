import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, fetchPosts, removePost } from "@/store/postStore/thunk";
import { Post, PostState } from "@/store/postStore/interfaces";
import { createPost, filterPostsByName } from "@/store/postStore/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { filteredPosts, isLoading } = useSelector(
    (state: any) => state.post as PostState & { filteredPosts: any[] }
  );

  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState<Post>({ name: "", description: "" });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  const handleDelete = (id: number): void => {
    dispatch(removePost(id));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterPostsByName(e.target.value));
  };

  const handleCreatePost = ():void => {
    dispatch(createNewPost(newPost));
    setShowModal(false);
    setNewPost({ name: "", description: "" });
  };


  return (
    <React.Fragment>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Nuevo Post
            </h2>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
              value={newPost.name}
              onChange={(e) =>
                setNewPost({ ...newPost, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Descripción"
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  handleCreatePost();
                }}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 flex justify-between items-center px-4">
          <div className="relative mt-1">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={handleSearch}
                type="text"
                id="table-search"
                className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#4cb6ac] text-white font-bold text-xl px-4 py-2 rounded-full"
          >
            +
          </button>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  Cargando...
                </td>
              </tr>
            ) : filteredPosts.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No se encuentran posts disponibles
                </td>
              </tr>
            ) : (
              filteredPosts.map((post, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {post.name}
                  </th>
                  <td className="px-6 py-4">{post.description}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Posts;
