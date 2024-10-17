import grivanceImage from "@/public/assets/grievanceImage.jpeg";

const GrievanceForm = () => {
  return (
    <div className="min-h-screen w-full bg-base-200 p-2 md:p-5 content-center">
      <div className="h-fit bg-base-100 shadow-md rounded-3xl border p-5 lg:flex gap-10 -translate-y-10">
        <div className="lg:w-1/2 self-center space-y-5">
          <form className="flex flex-col space-y-3">
            <div className="flex gap-2">
              <InputFieldType1
                InputFieldType1Props={{
                  label: "First Name *",
                  id: "first-name",
                  HTMLfor: "first-name",
                  type: "text",
                  required: true,
                }}
              />
              <InputFieldType1
                InputFieldType1Props={{
                  label: "Last Name *",
                  id: "last-name",
                  HTMLfor: "last-name",
                  type: "text",
                  required: true,
                }}
              />
            </div>
            <div className="flex gap-2">
              <InputFieldType1
                InputFieldType1Props={{
                  label: "Enroll No / Emp ID *",
                  id: "enroll",
                  HTMLfor: "enroll",
                  type: "number",
                  required: true,
                }}
              />
              <div className="flex flex-col gap-0.5 w-1/2">
                <label className="text-lg font-semibold" htmlFor="name">
                  Course
                </label>
                {/* dropdown input */}
                <select
                  id="course"
                  className="h-full p-2 border-2 border-gray-300 rounded-md"
                  required
                >
                  <option disabled selected>
                    -- Select Course --
                  </option>
                  <option value="btech">MCA 2nd year</option>
                  <option value="mtech">M. Tech AI/DS</option>
                  <option value="phd">MCA 1st year</option>
                  <option value="phd">MBA</option>
                </select>
              </div>
            </div>
            <label className="text-lg font-semibold w-fit" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <div className="flex gap-10">
              {/* make two mutually exclusive radio buttons, 1 for student, 1 for teacher */}
              <label className="text-lg font-semibold w-fit" htmlFor="role">
                Submit as a: *
              </label>
              <div className="flex gap-10 text-md font-medium">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    required
                  />
                  <label htmlFor="student">Student</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="teacher"
                    name="role"
                    value="teacher"
                    required
                  />
                  <label htmlFor="teacher">Teacher</label>
                </div>
              </div>
            </div>
            <label className="text-lg font-semibold w-fit" htmlFor="grievance">
              Grievance
            </label>
            <textarea
              id="grievance"
              className="border-2 border-gray-300 rounded-md p-2 h-48"
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <GrievanceFormLeft />
      </div>
    </div>
  );
};

export default GrievanceForm;

interface InputFieldType1PropsType {
  label: string;
  id: string;
  HTMLfor: string;
  type: string;
  required: boolean;
}

const InputFieldType1 = ({
  InputFieldType1Props,
}: {
  InputFieldType1Props: InputFieldType1PropsType;
}) => {
  return (
    <div className="flex flex-col gap-0.5 w-1/2">
      <label
        className="text-lg font-semibold w-fit"
        htmlFor={InputFieldType1Props.HTMLfor}
      >
        {InputFieldType1Props.label}
      </label>
      <input
        type={InputFieldType1Props.type}
        id={InputFieldType1Props.id}
        className="border-2 border-gray-300 rounded-md p-2"
        required={InputFieldType1Props.required}
      />
    </div>
  );
};

const GrievanceFormLeft = () => {
  return (
    <div
      className="w-1/2 rounded-tr-2xl rounded-br-2xl p-2 items-center hidden lg:flex"
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
        <br />
        with us!
      </h1>
    </div>
  );
};
