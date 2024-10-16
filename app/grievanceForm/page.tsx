import grivanceImage from "@/public/assets/grievanceImage.jpeg";

const GrievanceForm = () => {
  return (
    <div className="min-h-screen max-w-full bg-base-200 p-2 md:p-5">
      <div className="mt-20 lg:mt-10 h-fit bg-base-100 shadow-md rounded-3xl border p-5 lg:flex gap-10">
        <div className="lg:w-1/2 self-center space-y-5">
          <form className="flex flex-col space-y-3">
            <div className="flex gap-2">
              <div className="flex flex-col gap-0.5 w-1/2">
                <label className="text-lg font-semibold" htmlFor="first-name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-0.5 w-1/2">
                <label className="text-lg font-semibold" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-0.5 w-1/2">
                <label className="text-lg font-semibold" htmlFor="enroll">
                  Enrollment Number
                </label>
                <input
                  type="text"
                  id="enroll"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-0.5 w-1/2">
                <label className="text-lg font-semibold" htmlFor="name">
                  Course
                </label>
                {/* dropdown input */}
                <select
                  id="course"
                  className="h-full p-2 border-2 border-gray-300 rounded-md"
                >
                  <option value="btech">B.Tech</option>
                  <option value="mtech">M.Tech</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </div>
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <label className="text-lg font-semibold" htmlFor="grievance">
              Grievance
            </label>
            <textarea
              id="grievance"
              className="border-2 border-gray-300 rounded-md p-2 h-96"
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div
          className="w-1/2 rounded-tr-2xl rounded-br-2xl p-2 flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(" +
              grivanceImage.src +
              ")",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-6xl font-bold text-white">
            Share your
            <br />
            <span className="text-8xl">Concerns</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;
