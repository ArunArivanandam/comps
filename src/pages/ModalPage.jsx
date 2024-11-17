import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is the important agreement that you need to accept before doing
        anything in the website
      </p>
    </Modal>
  );
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        suscipit doloremque blanditiis libero quidem neque atque quae alias,
        voluptate corporis cumque, laudantium qui dolorem. Eligendi et sint modi
        dolorem optio reprehenderit corrupti tenetur voluptatum commodi itaque
        ut deserunt totam praesentium recusandae beatae veritatis odio iure
        repellat enim, autem vitae facere veniam? Ipsa culpa incidunt inventore
        exercitationem molestias error temporibus fugiat saepe repellendus
        maxime recusandae asperiores voluptatem accusamus at esse, praesentium
        provident facilis repudiandae omnis ea enim excepturi, libero earum
        modi? Nostrum voluptas maxime sunt eos dolorum error maiores aperiam
        libero sint. Dolorem accusamus quasi iure dolorum veritatis tempore
        quaerat nesciunt cupiditate eos sit molestiae aliquam esse modi, dolor
        voluptas recusandae alias perspiciatis minus, commodi dicta eum ad. Quo
        aliquid cupiditate sed, facere officia voluptatem quae voluptatum
        praesentium placeat laborum quos dignissimos facilis natus, explicabo
        sapiente, accusamus ex laudantium. Esse nobis tempora vitae rem cum?
        Adipisci mollitia placeat vel vero corporis quia dolorem doloribus
        dignissimos delectus at qui assumenda distinctio iusto, quibusdam
        reprehenderit quas id doloremque quasi accusantium est ipsa, pariatur
        ex! Ex eius odit illo facere quidem architecto blanditiis maiores.
        Reiciendis magnam aut blanditiis iste dicta id molestiae aperiam optio
        aliquam? Est molestiae ad labore dolores, autem error commodi impedit
        vitae non tempora amet rem iusto culpa veritatis unde veniam blanditiis,
        enim quam praesentium id asperiores vero quo at. Sed veritatis
        consequuntur ullam. Vel unde, et illo autem deleniti esse nihil earum
        odit quas tempore nulla debitis ex, reiciendis vero repudiandae fuga
        minima quisquam distinctio minus, officia molestiae. Dicta reprehenderit
        vero ipsa mollitia dolorum, fugit eveniet repudiandae corrupti sequi at
        expedita ex voluptate recusandae aliquid exercitationem adipisci
        voluptas accusamus hic cum et! Expedita sed totam est inventore nostrum
        voluptatem itaque cum quos fugit ullam ratione porro odio omnis laborum
        aspernatur distinctio consectetur modi, fuga excepturi. Voluptatibus
        veritatis ipsum veniam eaque ea? Adipisci recusandae numquam et culpa ea
        consectetur magni, architecto quasi! Dolorem voluptates delectus
        obcaecati suscipit temporibus enim ipsum reprehenderit sapiente nisi
        cupiditate eius aspernatur, earum officiis ducimus culpa corrupti sit
        sunt quod distinctio animi vitae aperiam inventore? Non nihil natus
        nulla. Necessitatibus repellendus tempore officia deleniti deserunt
        saepe doloremque illo dolorum rem, similique quasi et non dicta
        excepturi! Quis itaque facere laudantium quas asperiores autem esse
        optio ipsam fugiat delectus minima, eum dignissimos culpa quaerat
        expedita illum, neque ullam nulla odio labore consequuntur, iste
        voluptate rem sed! Repellat cum aperiam delectus animi quos nostrum
        vitae similique vel facere nemo eligendi magni impedit incidunt dolores,
        asperiores, quae, est esse ullam! Totam sit a explicabo temporibus
        consequuntur dolorum quis ex culpa ratione similique maxime repellendus
        deleniti debitis sapiente dolorem et eveniet repellat quas molestiae
        veritatis doloribus nulla omnis, excepturi cupiditate! Molestias ea
        quisquam similique? Aliquid, fuga! Sequi minus laborum labore, pariatur
        cupiditate eos ipsam quod doloribus magnam assumenda iusto aliquid
        nesciunt eaque quia expedita quis voluptates quisquam? Maiores molestias
        ratione mollitia accusantium suscipit adipisci consectetur aperiam?
        Blanditiis sapiente quibusdam obcaecati et odio impedit a voluptatem sit
        corrupti nihil sed debitis qui numquam id expedita saepe, corporis illum
        consequatur itaque in perferendis. Dignissimos, veniam! Ea omnis harum
        similique aliquid ab accusamus reiciendis inventore suscipit iste
        tenetur, fugiat accusantium quasi pariatur voluptates praesentium quidem
        temporibus eveniet laborum nisi vel incidunt ullam officiis consectetur?
        Reiciendis exercitationem voluptate voluptatum fugiat molestias ab saepe
        officiis, labore, dolorum fuga explicabo vero qui tempore. Sit omnis
        obcaecati, impedit possimus aperiam cupiditate nihil suscipit quisquam
        illo. Blanditiis tempora laboriosam consectetur expedita quae asperiores
        minus, quibusdam necessitatibus aperiam cum temporibus iure minima
        tempore sunt et eligendi excepturi quasi in, porro ipsam vero, aut omnis
        nam. Cumque enim totam quas laborum voluptate, atque nisi quae est! Fuga
        optio tempore maiores delectus. Fugiat illo ratione consequatur illum
        nulla facilis sed recusandae, suscipit accusantium saepe velit quo odio
        corporis iure earum minus totam vitae natus placeat magnam culpa!
        Repellendus necessitatibus debitis repellat veniam labore eius at
        assumenda cumque deleniti nulla numquam asperiores cum, facere maxime
        aliquam molestias distinctio nemo praesentium placeat fugit voluptatum.
        Deserunt, sint? Esse voluptatibus totam maxime ipsa ad, quam
        exercitationem quae praesentium facilis modi impedit? Dolores asperiores
        distinctio nobis earum repudiandae quaerat libero iure tenetur ex
        reprehenderit, nesciunt officiis doloremque illo consectetur velit
        temporibus iusto dolor minus maxime non! Repudiandae error accusantium
        debitis beatae praesentium recusandae aliquam ad, magni repellat minima
        vel, est at placeat. Exercitationem nihil, nulla aut voluptas
        dignissimos labore libero optio quae voluptate itaque perferendis
        repellat commodi saepe ullam neque eos ab odit distinctio nostrum unde
        ducimus enim asperiores obcaecati ea. Ipsam deleniti eveniet cupiditate
        labore facilis. Qui culpa quaerat soluta consequatur odio, aliquam, a
        vero esse eos, dolores illum quo eligendi. Harum, rerum mollitia magnam
        illo consequuntur dignissimos. Rerum magni eos dicta illo velit nam
        accusamus repellendus voluptate quam tempore alias dolores animi saepe
        doloribus, non adipisci modi error laborum iure necessitatibus eum
        beatae! Corrupti neque adipisci rem qui distinctio enim deleniti veniam
        quis. Vel nam veritatis, quod laudantium incidunt autem quasi,
        perspiciatis fuga repellat provident delectus animi unde quibusdam
        voluptate suscipit labore libero quidem dicta atque eveniet, cumque
        molestias sunt aliquam? Architecto vitae fuga enim eligendi aut
        voluptatem earum quod ut quas eaque nostrum soluta quis eius expedita
        ipsa harum commodi ullam vel dolores, est dolorem. Quasi fuga et
        consequuntur placeat maxime, exercitationem deleniti ullam corporis.
        Quam deserunt consectetur est quidem autem quos sint soluta reiciendis
        adipisci suscipit tempora quasi, neque optio porro, quae beatae
        voluptate quo reprehenderit voluptas assumenda. Nostrum, eum assumenda
        incidunt corporis quisquam voluptatem beatae vero. Voluptatibus minus
        voluptatum delectus sunt ex aperiam deleniti iste quidem temporibus in
        quaerat, necessitatibus quae, enim repellat voluptates fugiat pariatur
        tempore. Repellendus facere maiores praesentium natus at? Sed libero
        quam quaerat est? Ratione repellat unde hic sed nobis saepe, soluta
        accusamus consequatur rem ea placeat quam cum ab. Minus repellendus
        nulla dolore at voluptatum, recusandae explicabo impedit voluptatem ad
        aspernatur corrupti tempora! Adipisci fugit quos quo provident alias
        ullam dicta rerum repudiandae aliquid harum. Quos facilis, doloribus
        eveniet, corporis mollitia facere odio accusantium quae iusto
        consequatur culpa assumenda quia repellendus! Cum molestias at
        aspernatur? Nam labore architecto animi dolorem beatae ratione debitis,
        voluptatem est quo blanditiis.
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
