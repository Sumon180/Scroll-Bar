import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h5 className=" my-10 text-4xl font-medium underline">Hello scroll</h5>
      <div className="flex items-center justify-center gap-20 flex-wrap">
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll2 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
        <div className="scroll1 h-40 w-56 overflow-y-scroll">
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium neque dolorum sequi ratione, sint, assumenda ea at quam
            vero minima alias et veniam. Ad blanditiis neque optio facilis autem
            officia perferendis quaerat, reprehenderit voluptate corporis
            pariatur unde! Et consequuntur doloremque at, error velit odit
            perferendis quae laudantium ut repudiandae ducimus voluptatem
            suscipit dolorem ratione, eos impedit accusantium tempora a cum.
            Dolore, nobis! Doloremque iste animi quae libero accusantium omnis
            incidunt nihil beatae expedita! Dolorum rem nihil similique sunt.
            Animi, possimus ab beatae quos fugiat reiciendis accusantium itaque
            esse sapiente. Quod eos modi quisquam beatae ullam eveniet facilis
            hic autem corrupti repellendus neque quasi porro ab nesciunt
            molestiae dolorum quo, non id sint totam excepturi rem libero.
            Quibusdam corporis alias accusamus voluptatibus! Veritatis earum
            quibusdam quidem nulla sequi nemo, qui natus, aspernatur omnis ad
            deserunt. Dolore provident animi atque natus incidunt quam quis sed
            iste vel? Eos sed, saepe obcaecati totam nulla, aliquam animi eum,
            cum non commodi quos nam et inventore dicta vero laudantium ullam
            dolore veritatis. Obcaecati iure quod at eligendi officia ipsa
            veritatis expedita, cumque tempore facere dolorem, nemo blanditiis.
            Corporis similique iusto, alias quasi soluta error obcaecati
            voluptate ipsa! Iste, commodi.
          </p>
        </div>
      </div>
      <div className=" my-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit facilis
        nesciunt similique perspiciatis ut officiis vel voluptatibus libero
        alias aut consectetur expedita quae nostrum recusandae, eum consequuntur
        quod consequatur suscipit!
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero
          qui omnis sit iste. A officia minus laboriosam voluptatum. Distinctio
          qui natus provident quod eligendi alias sed dolorum nemo reprehenderit
          tenetur, cum deleniti! Nihil ex possimus eaque, quasi magnam
          architecto eum cumque culpa accusamus laboriosam voluptatum quae
          explicabo incidunt laudantium molestiae unde mollitia veritatis atque
          facilis expedita consequuntur quaerat fuga! Temporibus quod
          consectetur eos maxime exercitationem assumenda aspernatur ab
          voluptatum dolore asperiores sapiente praesentium qui excepturi,
          voluptatibus iste repellat harum nobis, sed ipsa, quia eum ullam
          ducimus provident? Mollitia et soluta adipisci qui delectus!
          Aspernatur minima alias tempora voluptatum nisi rem nam excepturi
          atque error impedit, distinctio placeat eligendi repellendus quod
          dolore soluta eos ad possimus, tempore magnam ut, inventore est. Ad
          velit excepturi culpa esse optio quibusdam quos. Dolor dolorem placeat
          dolores modi sequi, eum suscipit, voluptates distinctio ipsum delectus
          voluptatum ducimus, deleniti maxime quo aliquid neque ipsa minus
          repellendus soluta quaerat eveniet rerum laudantium ab. Nesciunt,
          atque id reprehenderit suscipit magni totam, quaerat distinctio
          dolorem quibusdam asperiores sit velit aut at tenetur blanditiis
          voluptate impedit harum dolore mollitia numquam. Aliquid repudiandae
          doloribus quisquam nostrum quidem vel, sint magnam dolore magni. Error
          atque consequuntur minus modi iure optio porro.
        </p>
      </div>
    </>
  );
}

export default App;
