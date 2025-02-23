import React from 'react';
import iconLinkedin from '../assets/images/icon/social.png'
import iconface from '../assets/images/icon/icon_face.jpg'
import iconyoutobe from '../assets/images/icon/icon_youyobe.png'
import logo from '../assets/images/logo_itviec.webp';
import "../assets/styles/Footer.css"
const footer = () => {
    return (<footer>
      
        <div className="footer-links">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>It nhung chat</p>
          <div className="footer-social">
          <a href="#"><img src={iconLinkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={iconface} alt="Facebook" /></a>
          <a href="#"><img src={iconyoutobe} alt="YouTube" /></a>
        </div>
        </div>
        
          <div>
            <h4>Về chúng tôi</h4>
            <ul>
              <li><a href="#">Trang Chủ</a></li>
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Dịch vụ gợi ý ứng viên</a></li>
              <li><a href="#">Liên Hệ</a></li>
              <li><a href="#">Việc Làm IT</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div>
            <h4>Chương trình</h4>
            <ul>
              <li><a href="#">Chuyện IT</a></li>
              <li><a href="#">Cuộc thi viết</a></li>
              <li><a href="#">Việc làm IT nổi bật</a></li>
              <li><a href="#">Khảo sát thường niên</a></li>
            </ul>
          </div>
          <div>
            <h4>Điều khoản chung</h4>
            <ul>
              <li><a href="#">Quy định bảo mật</a></li>
              <li><a href="#">Quy chế hoạt động</a></li>
              <li><a href="#">Giải quyết khiếu nại</a></li>
              <li><a href="#">Thỏa thuận sử dụng</a></li>
              <li><a href="#">Thông cáo báo chí</a></li>
            </ul>
          </div>
          <div>
            <h4>Liên hệ</h4>
            <ul>
              <li>Để đăng tin tuyển dụng tại:</li>
              <li>Hồ Chí Minh: +84 123 456 789</li>
              <li>Hà Nội: +84 987 654 321</li>
              <li>Email: contact@yourcompany.com</li>
          </ul>

          </div>
        </div>
        
      </footer>);
}


export default footer;