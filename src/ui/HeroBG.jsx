import FL from "./styles/Floating.module.css";

function HeroBGFloating() {
  return (
    <>
      <div className={`${FL.icon} ${FL.HTML5}`}>
        <i className="fab fa-html5"></i>
      </div>
      <div className={`${FL.icon} ${FL.CSS3}`}>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className={`${FL.icon} ${FL.JavaScript}`}>
        <i className="fab fa-js"></i>
      </div>
      <div className={`${FL.icon} ${FL.React}`}>
        <i className="fab fa-react"></i>
      </div>
      <div className={`${FL.icon} ${FL.Docker}`}>
        <i className="fab fa-docker"></i>
      </div>
      <div className={`${FL.icon} ${FL.db}`}>
        <i className="fas fa-database"></i>
      </div>
      <div className={`${FL.icon} ${FL.cloud}`}>
        <i className="fas fa-cloud"></i>
      </div>
      <div className={`${FL.icon} ${FL.PHP}`}>
        <i className="fab fa-php"></i>
      </div>
      <div className={`${FL.icon} ${FL.Git}`}>
        <i className="fab fa-git-alt"></i>
      </div>
      <div className={`${FL.icon} ${FL.server}`}>
        <i className="fas fa-server"></i>
      </div>
      <div className={`${FL.icon} ${FL.gears}`}>
        <i className="fas fa-gears"></i>
      </div>
      <div className={`${FL.icon} ${FL.MongoDB}`}>
        <i className="fab fa-envira"></i>
      </div>
    </>
  );
}

export default HeroBGFloating;
