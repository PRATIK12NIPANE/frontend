import Enquiry from "./Enquiry";

const House = (props) => {
  if (!props.houseInfo) {
    return <h3> ...Loading data</h3>;
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <b> {props.houseInfo.address} </b>
        </div>
        <div className="col-sm-6">
          <b> USD {props.houseInfo.price}</b>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <img
            className="img-fluid img-thumbnail"
            src={`./imgs/${props.houseInfo.photo}`}
            alt="house pic here"
          />
        </div>
        <div className="col-sm-6">
        <div >{props.houseInfo.description}
        </div>
        <div >{localStorage.getItem("name") && <Enquiry />}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default House;
