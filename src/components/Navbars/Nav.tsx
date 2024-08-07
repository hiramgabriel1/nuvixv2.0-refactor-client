function Nav() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-3 md:pr-10">
          <div className="w-[45%] py-3 flex items-center">
            <img
              //   src={logo_2}
              alt="logo"
              className="w-9 h-8 lg:w-[10%] lg:h-[10%]"
            />
            <div className="px-2 flex items-center lg:px-4 lg:w-full">
              <div className="absolute px-2 lg:px-3">
                <img
                  //   src={search_2}
                  alt="search"
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              </div>
              <div className="lg:w-full">
                <input
                  placeholder="Buscar..."
                  className="bg-zinc-100 rounded px-6 text-sm lg:text-lg lg:py-1 lg:px-10 lg:w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <img
              // ssrc={notify}
              alt=""
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <div className="flex">
              <img
                // src={profile}
                alt=""
                className="rounded-full w-8 h-8 md:w-10 md:h-10"
              />
              <select>
                <option value=""></option>
                <option value="config">Configuracion</option>
                <option value="edit-profile">Editar perfil</option>
                <option value="view-my-candidates"> Ver mis candidatos </option>
                <option value="view-my-posts"> Ver mis publicaciones </option>
                <option value="view-my-postulations">
                  Ver mis postulaciones
                </option>
                <option value="view-my-postulations">
                  {" "}
                  Ver mis guardados{" "}
                </option>
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
