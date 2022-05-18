import React from 'react';

const WorkTodo = () => {
    return (
        <div className=" my-5 mx-auto w-50 px-5 py-3 form-container">
        <div className="">
          <form className=" mx-auto">
            <h3 className="text-center text-primary fw-bold pt-4">
              Add Todo Task
            </h3>
            <label className="mt-3 text-primary fw-bold" htmlFor="text">
              Task Name:
            </label>
            <input
              className="w-100 input-field"
              type="text"
              name=""
              id=""
              required
            />
            <label className="mt-3 text-primary fw-bold" htmlFor="email">
              Task Details:
            </label>
            <input
             
              className="w-100 input-field"
              type="text-area"
              name=""
              id=""
              required
            />
            <input
              className=" input-btn d-block mx-auto mt-3"
              type="submit"
              value="Add Task"
            />
            
            
          </form>
        </div>
      </div>
    );
};

export default WorkTodo;



