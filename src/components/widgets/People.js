import React from 'react';

export default function People() {
  return (
    <div class="people-section">
      <h2 className="text-xl font-semibold">People</h2>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="xy-thumbnail row-span-3 col-span-2 relative cursor-pointer">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/07/20112902/The-Best-YouTube-Thumbnail-Makers-For-Great-Video-Thumbnails.jpg"
            alt="image thumbnail"
            className="brightness-50 hover:brightness-75 h-full"
          />
          <div className="absolute w-full py-2.5 bottom-1 ml-4">
            <p className="text-xl text-white font-bold">Mahmud Yusuf</p>
            <div className="flex justify-between items-center text-sm text-white">
              <p>Front End Developer</p>
              <p className="pr-8">290 views</p>
            </div>
          </div>
        </div>
        <div class="xy-thumbnail relative cursor-pointer">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/07/20112902/The-Best-YouTube-Thumbnail-Makers-For-Great-Video-Thumbnails.jpg"
            alt="image thumbnail"
            className="brightness-50 hover:brightness-75 h-full"
          />
          <div className="absolute w-full py-2.5 bottom-0 ml-4">
            <div className="flex justify-between items-center text-sm text-white">
              <p>Peter Parker</p>
            </div>
          </div>
        </div>
        <div class="xy-thumbnail relative row-span-2 cursor-pointer">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/07/20112902/The-Best-YouTube-Thumbnail-Makers-For-Great-Video-Thumbnails.jpg"
            alt="image thumbnail"
            className="brightness-50 hover:brightness-75 h-full"
          />
          <div className="absolute w-full py-2.5 bottom-0 ml-4">
            <div className="flex justify-between items-center text-sm text-white">
              <p>Tony Stark</p>
            </div>
          </div>
        </div>
        <div class="xy-thumbnail relative cursor-pointer">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/07/20112902/The-Best-YouTube-Thumbnail-Makers-For-Great-Video-Thumbnails.jpg"
            alt="image thumbnail"
            className="brightness-50 hover:brightness-75 h-full"
          />
          <div className="absolute w-full py-2.5 bottom-0 ml-4">
            <div className="flex justify-between items-center text-sm text-white">
              <p>Steve Roger</p>
            </div>
          </div>
        </div>
        <div class="xy-thumbnail relative cursor-pointer">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/07/20112902/The-Best-YouTube-Thumbnail-Makers-For-Great-Video-Thumbnails.jpg"
            alt="image thumbnail"
            className="brightness-50 hover:brightness-75 h-full"
          />
          <div className="absolute w-full py-2.5 bottom-0 ml-4">
            <div className="flex justify-between items-center text-sm text-white">
              <p>Stephen Strange</p>
            </div>
          </div>
        </div>
        <div class="xy-thumbnail">
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 text-center"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 20 20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload Your Own Video</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">Max File up to 1GB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
