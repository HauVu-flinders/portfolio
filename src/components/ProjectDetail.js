export default function ProjectDetail(props) {
  return (
    <div>
      <div>
        <div className="showcase">
          <div className="showcase__img">
            <h2 className="showcase__name">{props.name}</h2>
            <img src={props.image} alt="project" />
          </div>
          <div className="showcase__description">
            <h2 className="showcase__title">{props.title}</h2>
            <p className="showcase__detail">{props.description}</p>
            <div showcase_tech-stack>
              <h3>Technologies involved:</h3>
              <p className="mt-8">{props.tech}</p>
            </div>
            <p className="showcase__icon mt-8">{props.icon}</p>
            <div className="btn__box">
              <div className="btn">
                <a href={props.gitHub}>View site</a>
              </div>
              <div className="btn">
                <a>View source</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
