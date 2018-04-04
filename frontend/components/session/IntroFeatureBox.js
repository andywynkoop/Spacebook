export default ({ src, feature, description }) => (
  <div className="intro-feature-box">
    <img src={src} />
    <h4>{feature}</h4>
    <p>{description}</p>
  </div>
);

