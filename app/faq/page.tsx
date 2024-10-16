const FAQ = () => {
  return (
    <div className="p-5 mt-20">
      <h1 className="text-6xl font-semibold text-info my-8">
        Frequently Asked Questions!
      </h1>
      <div className="flex flex-col gap-3">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            deleniti animi minus eius excepturi laudantium.
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              provident, voluptatibus similique totam atque minima vel, maiores
              explicabo repellat error laudantium iure perferendis inventore
              aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ut eius corrupti omnis in animi tenetur.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            beatae neque repellat nisi eveniet sed voluptate facilis distinctio
            non quam?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, velit earum reprehenderit minus similique doloremque
              fuga repudiandae quos nam! Impedit ex inventore dignissimos quis.
              Accusantium, eveniet sapiente.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            laborum hic sint?
          </div>
          <div className="collapse-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              fugit temporibus animi aliquid alias nostrum earum nihil nemo
              culpa incidunt facere ut architecto assumenda repellat amet
              labore, ipsum voluptas? Natus doloremque ad porro impedit id qui
              cumque dolores nesciunt culpa quisquam nemo, iste vitae excepturi
              sapiente quibusdam itaque omnis quidem?
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ad
            quaerat saepe quidem quis quos ratione iste fugiat.
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              iure modi voluptas natus, exercitationem, nisi autem labore unde
              tenetur commodi delectus saepe, doloribus aut voluptatem eveniet.
              Eos qui eaque dignissimos repellat, neque nulla officiis fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
