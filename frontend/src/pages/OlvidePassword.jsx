import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso y no pierdas tus <span className="text-slate-700">proyectos</span></h1>

      <form className="my-10 bg-white shadow rounded-lg px-10 py-10">
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input 
            type="email"
            id="email"
            placeholder="Email"
            className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input 
          type="submit"
          value={'Enviar Instrucciones'}
          className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link 
          to={'/'}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >Ya tienes cuenta? Iniciar Sesion</Link>

        <Link 
          to={'/registrar'}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >No tienes una cuenta? Registrate</Link>
      </nav>
    </>
  )
}

export default OlvidePassword
