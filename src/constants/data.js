import images from "./images";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaGifts,
  FaCertificate,
  FaChalkboard,
  FaAward,
  FaHotel,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <FaGifts style={{ fill: gradient }} />,
    title: "Goodies and Merchandise",
    text: "We know that becoming a campus ambassador comes with some extra work to manage so as a token of appreciation for your high enthusiasm, SOCE will provide you with wide range of exciting goodies and merchandise.",
  },
  {
    id: 2,
    icon: <FaAward style={{ fill: gradient }} />,
    title: "Certificate of Organisation",
    text: "Becoming our campus ambassador will not just be some extra work with no sincere approval. To cherish your hard work and immense commitment, SOCE will provide you with a CERTIFICATE OF APPRECIATION justifying all your efforts.",
  },
  {
    id: 3,
    icon: <FaChalkboard style={{ fill: gradient }} />,
    title: "Free Workshops",
    text: "While all other participants will have to pay some entry fees for the workshops, you will get 100% free access to all the workshops during the entire event. Thus, becoming our ambassador will benefit you financially as well.",
  },
  {
    id: 4,
    icon: <FaHotel style={{ fill: gradient }} />,
    title: "Free Accomodation",
    text: "As a part of the reward for becoming our CA, you will get a completely free accommodation during the entire event which will include free stay and food. So come and live this surreal experience and that too on our expenses",
  },
  {
    id: 5,
    icon: <FaProjectDiagram style={{ fill: gradient }} />,
    title: "SoCE Winter and Summer Projects",
    text: "The rewards and benefits of becoming our CA will not just be limited till the completion of the event. You will get an opportunity to take a project from a wide basket of winter and summer projects offered by SOCE for the IITK campus students only.",
  },
  {
    id: 6,
    icon: <FaGraduationCap style={{ fill: gradient }} />,
    title: "Acquire Skills",
    text: "Becoming our CA will help you develop various skills such as improving speaking skills, developing confidence, managing multiple works at a time. The winter and summer projects will also help you develop various skills as well.",
  },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Advertising",
    text: "Promote Sankalan and its sponsors within your college by sharing posts on social media, circulating posters and serving as a focal point for your respective institution.",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Organising",
    text: "Organise events, workshops, and sessions showcasing Sankalan and its offerings in your institution",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Conducting",
    text: "Guide and oversee your college's involvement during the event to ensure a memorable conclave experience for all.",
    image: images.portfolio_img_3,
  },
];

const sections = { services, about, portfolio };

export default sections;
