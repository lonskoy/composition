import { BodyProps } from "./types";

export const BodyCard = ({ props }: BodyProps) => {
    return (
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.textBtn}</a>
          </div>
    );
  }