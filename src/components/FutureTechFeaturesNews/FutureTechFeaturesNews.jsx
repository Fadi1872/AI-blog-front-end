import './FutureTechFeaturesNews.css'

const FutureTechFeaturesNews = ({ img, title, discription , className }) => {
  return (
    <div className="HJ_FutureTechFeaturesNews">
      <div>
        <img src={img} alt="icon"  className={className}/>
      </div>
      <div>
        <h5 className="title-2 text-absolute-White ">{title}</h5>
        <p className=" sub_title-125_feature text-gray-60 ">{discription}</p>
      </div>
    </div>
  );
};

export default FutureTechFeaturesNews;
