import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
const NewsSummaryCard = ({news}) => {
    const { title, _id, total_view, author, details, image_url } = news;
    const { img, name, published_date } = author;
    console.log(news);
    return (
      <div>
        <Card className="mb-5">
          <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
              <Image roundedCircle src={img} style={{ height: "60px" }} className="me-2"></Image>
              <div>
                <p>{name}</p>
                <p>{published_date}</p>
              </div>
            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length > 250 ? (
                <p>
                  {details.slice(0, 250) + "..."}{" "}
                  <Link to={`/news/${_id}`}>Read More</Link>
                </p>
              ) : (
                <p>{details}</p>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    );
};

export default NewsSummaryCard;