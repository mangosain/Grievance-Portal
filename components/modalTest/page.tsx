const ModalTest = () => {
  return (
    <div>
      <dialog id="userLoginModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-semibold text-3xl">Student Login</h1>
          <p className="text-red-600">
            1. This feature is under work right now but you can directly submit
            a grievance wihtout logging in first. make sure to save your
            grievance ID for future reference and tracking.
            <br />
            <br />
            2. Ticket tracking works without login, using the grievance ID that
            is generated after the form submission.
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default ModalTest;
