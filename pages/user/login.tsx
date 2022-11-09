import Login from "../../components/Forms/Login";

function login() {
  return (
    <div className="w-screen h-screen flex  ">
      <div className="bg-zinc-700 h-full hidden sm:flex sm:w-1/2 lg:w-7/12">
        <img src="/scenery3.jpg" alt="" className="h-full object-cover " />
      </div>
      <div className="w-full sm:w-1/2 lg:w-5/12 bg-zinc-800 flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}

export default login;
