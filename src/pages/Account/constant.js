import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faCreditCard,
  faLocationDot,
  faHeart,
  faHeartBroken,
  faFile,
  faGavel,
  faUsersRectangle,
  faEnvelope,
  faQuestion,
  faComment,
  faMoneyBill,
  faQrcode,
  faTicketSimple,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const MAIN_ACTION = [
  {
    icon: <FontAwesomeIcon icon={faQrcode} />,
    action: "Quét QR đặt nhân viên",
  },
  {
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    action: "Nhóm khách hàng thân thiết",
  },
  {
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    action: "Nạp tiền",
  },
  {
    icon: <FontAwesomeIcon icon={faTicketSimple} />,
    action: "Kho voucher",
  },
];

export const PERSONAL_ACTION = [
  {
    icon: <FontAwesomeIcon icon={faSitemap} />,
    action: "Mã giới thiệu của tôi",
  },
  {
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    action: "Lịch sử thanh toán",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    action: "Địa chỉ đã lưu",
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    action: "Nhân viên yêu thích",
  },
  {
    icon: <FontAwesomeIcon icon={faHeartBroken} />,
    action: "Nhân viên đã chặn",
  },
];

export const POLICY_ACTION = [
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    action: "Quyền lợi của khách hàng",
  },
  {
    icon: <FontAwesomeIcon icon={faGavel} />,
    action: "Pháp lý",
  },
  {
    icon: <FontAwesomeIcon icon={faUsersRectangle} />,
    action: "Quy trình đào tạo nhân viên giúp việc",
  },
];

export const SUPPORT_ACTION = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    action: "Trung tâm hỗ trợ",
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    action: "Câu hỏi thường gặp",
  },
  {
    icon: <FontAwesomeIcon icon={faComment} />,
    action: "Góp ý, khiếu nại, hỗ trợ qua App",
  },
];
