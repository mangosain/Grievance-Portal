const ModalTest = () => {
  return (
    <div>
      <UserLogInModal ModalProps={{ id: "userLoginModal" }} />
      <AdminLogInModal ModalProps={{ id: "adminLoginModal" }} />
    </div>
  );
};

export default ModalTest;

interface ModalPropsType {
  id: string;
}

const UserLogInModal = ({ ModalProps }: { ModalProps: ModalPropsType }) => {
  return (
    <dialog id={ModalProps.id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-semibold text-2xl">Student Login</h1>
        <p className="text-red-600">
          1. This feature is under work right now but you can directly submit a
          grievance wihtout logging in first. make sure to save your grievance
          ID for future reference and tracking.
          <br />
          <br />
          2. Ticket tracking works without login, using the grievance ID that is
          generated after the form submission.
        </p>
        <p className="pt-2">
          Not a User?{" "}
          <span
            className="cursor-pointer text-info"
            onClick={() => {
              const modal = document.getElementById("adminLoginModal");
              if (modal) {
                (modal as HTMLDialogElement).showModal();
                (
                  document.getElementById("userLoginModal") as HTMLDialogElement
                ).close();
              }
            }}
          >
            Log In as Admin
          </span>
        </p>
      </div>
    </dialog>
  );
};

const AdminLogInModal = ({ ModalProps }: { ModalProps: ModalPropsType }) => {
  return (
    <dialog id={ModalProps.id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-semibold text-2xl mb-4">Admin Login</h1>
        <div>
          <input
            type="text"
            placeholder="Admin Email"
            id="admin"
            className="input input-primary input-bordered w-full"
            name="adminID"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="input input-primary input-bordered w-full mt-2"
            name="password"
          />
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 font-semibold"
            id="submit"
          >
            Login
          </button>
          <p className="pt-2">
            Not an Admin?{" "}
            <span
              className="cursor-pointer text-info"
              onClick={() => {
                const modal = document.getElementById("userLoginModal");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                  (
                    document.getElementById(
                      "adminLoginModal"
                    ) as HTMLDialogElement
                  ).close();
                }
              }}
            >
              Log In as User
            </span>
          </p>
        </div>
      </div>
    </dialog>
  );
};
