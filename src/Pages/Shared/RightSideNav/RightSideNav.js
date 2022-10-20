import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram,  } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
  const { providerLogin, loginGithub } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handalGoogleSignIn = ()=>{
    providerLogin(googleProvider)
    .then(result => {
      const user  = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));
  }
  const handalGithubLogin = ()=>{
      loginGithub(githubProvider)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
  }
    return (
      <div>
        <ButtonGroup vertical>
          <Button
            onClick={handalGoogleSignIn}
            className="mb-2"
            variant="outline-primary"
          >
            {" "}
            <FaGoogle /> Log In With Google
          </Button>
          <Button onClick={handalGithubLogin} variant="outline-dark">
            {" "}
            <FaGithub /> Log In With Github
          </Button>
        </ButtonGroup>
        <div>
          <h5 className="my-4">Find Us On</h5>
          <ListGroup>
            <ListGroup.Item className="mb-2">
              {" "}
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              {" "}
              <FaTwitter /> Twitter
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              {" "}
              <FaWhatsapp /> Whatsapp
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              {" "}
              <FaInstagram /> Instagram
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">Terms & Conditon</ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <BrandCarousel />
        </div>
      </div>
    );
};

export default RightSideNav;