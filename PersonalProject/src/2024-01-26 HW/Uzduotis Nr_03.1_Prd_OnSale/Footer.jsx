// import Flex from 'react-bootstrap';

export const Footer = () => {
  return (
    <>
      <br />
      <div className="p-3 mb-2 bg-light text-dark">
        <div className="d-flex justify-content-around">
          {/* Footer */}
          <div className="p-2">
            <ul>
              <h5>Pirkimas</h5>
              <li>Pirkimo - pardavimo taisyklės</li>
              <li>Atsiskaitymo būdai</li>
              <li>Prekių pakaitalai</li>
              <li>Krepšelių ruošiniai</li>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <h5>Pristatymas</h5>
              <li>Prekių pristatymas</li>
              <li>Aptarnaujamos teritorijos</li>
              <li>Svarbi informacija</li>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <h5> Bendra informacija</h5>
              <li>Prekių grąžinimas</li>
              <li>Produktų kokybės užtikrinimas</li>
              <li>Dažniausiai užduodami klausimai</li>
              <li>Prekių išdėstymas puslapyje</li>
              <li>Prekių pakavimas</li>
            </ul>
          </div>
          <div className="ml-auto p-2">
            <ul>
              <h5>Pagalba</h5>
              <button type="button" className="btn btn-primary btn-lg">
                Spausk neabejok!
              </button>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div className="ml-auto p-2">Flex item</div>
          <div className="p-2">Flex item</div>
          <div className="ml-auto p-2">Flex item</div>
        </div>
        <div className="d-flex">
          <div className="p-2">Flexxx item1</div>
          <div className="p-2">Flexxx item2</div>
          <div className="ml-auto p-2">Flexxx item3</div>
        </div>
      </div>
    </>
  );
};
