import React from 'react';

const WorkTodo = () => {
    return (
       <div className='loginBg'>
            <div className=" my-5 mx-auto w-50 px-5 py-3 addNew">
        <div className="">
          <form className=" mx-auto">
            <h3 className="text-center text-white fw-bold pt-4">
              Add Todo Task
            </h3>
            <label className="mt-3 text-white fw-bold" htmlFor="text">
              Task Name:
            </label>
            <input
              className="w-100 input-field"
              type="text"
              name=""
              id=""
              placeholder='Task Name'
              required
            />
            <label className="mt-3 text-white fw-bold" htmlFor="email">
              Task Details:
            </label>
            <input
             
              className="w-100 input-field"
              type="textarea"
              placeholder='task details'
              name=""
              id=""
              required
            />
            <input
              className="  mx-auto mt-3 animated-button"
              type="submit"
              value="Add Task"
            />
            
            
          </form>
        </div>
      </div>
       </div>
    );
};

export default WorkTodo;



