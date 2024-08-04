function Footer() {
  return (
    <>
      <footer>
        <div className="bg-color-dark-footer relative">
          <div className="container py-10">
            <div className="grid gap-2 md:grid-cols-5 pb-10">
              <div>
                <img
                  // src={logo}
                  alt=""
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </div>
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <h4 className="text-gray-300 font-bold text-lg">Product</h4>
                  <ul className="text-gray-200 text-sm space-y-3">
                    <li>All jobs</li>
                    <li>Companies</li>
                    <li>Candidates</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <h4 className="text-gray-300 font-bold text-lg">Resources</h4>
                  <ul className="text-gray-200 text-sm space-y-3">
                    <li>Blog</li>
                    <li>User guides</li>
                    <li>Webinars</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <h4 className="text-gray-300 font-bold text-lg">Company</h4>
                  <ul className="text-gray-200 text-sm space-y-3">
                    <li>About</li>
                    <li>Join us</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <h4 className="text-color-blue-highlight font-bold">
                    Subscribe to our newsletter
                  </h4>
                  <p className="text-xs text-gray-200">
                    For product announcements and exclusive insights
                  </p>
                  <div>
                    <input
                      type="text"
                      name="Email"
                      id=""
                      placeholder="Input your email"
                      className="text-white bg-color-dark-footer border boder-white rounded hover:border-color-blue-highlight"
                    />
                    <button className="bg-color-blue-highlight px-6 text-white">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-center text-white ">
                ©Findev •Privacy •Terms •Sitemap
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
