import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <h2>NOUS CONTACTER</h2>
      <div className="map__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6686.395253873281!2d11.861530702814582!3d-4.812179842343124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60a516c00f2fe1%3A0xa900ce41b45e1ad0!2sL&#39;Eden%20Hotel!5e0!3m2!1sfr!2scg!4v1679997913703!5m2!1sfr!2scg"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
