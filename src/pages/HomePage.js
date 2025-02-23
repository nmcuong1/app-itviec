import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../assets/styles/HomePage.css"
const HomePage = () => {

const [searchTerm, setSearchTerm] = useState("");
const [jobsData, setJobsData] = useState([]); 
const [loading, setLoading] = useState(true); 
const [selectedJob, setSelectedJob] = useState(0);  

  useEffect(() => {
    fetch("https://67ada1593f5a4e1477de5d4c.mockapi.io/jobLevel")
      .then((response) => response.json())
      .then((data) => {
        setJobsData(data);
        setLoading(false);

        if (data.length > 0 && data[0].jobs.length > 0) {
          setSelectedJob(data[0].jobs[0]); 
        }
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      });
  }, []);

  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedWorkModes, setSelectedWorkModes] = useState([]);
  const [salary, setSalary] = useState(50);
  const [selectedFields, setSelectedFields] = useState([]);
  const [openFilter, setOpenFilter] = useState(null);
  const [dropdown, setDropdown] = useState(null);

  const levels = ["Fresher", "Junior", "Senior", "Manager"];
  const workModes = ["Làm từ xa", "Tại văn phòng", "Linh hoạt"];
  const fields = [ "Hàng Tiêu Dùng", "Thương Mại Điện Tử", "Giáo Dục và Đào Tạo", "Ngân Hàng",
     "Thực Phẩm & Đồ Uống", "Trò Chơi", "Chính Phủ", "Phần Cứng và Điện Toán", 
     "Phi Lợi Nhuận và Dịch Vụ Xã Hội", "Sản Xuất và Kỹ Thuật", "Truyền Thông, Quảng Cáo và Giải Trí", "Môi Trường", "Dược Phẩm", "Bất Động Sản và Xây Dựng", "Bán Lẻ và Bán Buôn", "Dịch Vụ và Tư Vấn IT", "Viễn Thông", "Du Lịch & Dịch Vụ Lưu Trú", "Vận Tải, Logistics và Kho Hàng", "An Ninh Mạng", "Mua Bán và Thương Mại", "Mạng Lưới và Cơ Sở Hạ Tầng", "Thuê Ngoài Phát Triển Phần Mềm", "Sản Phẩm Phần Mềm và Dịch Vụ Web", "Nông Nghiệp", "Thể thao và Thể hình", "May mặc và Thời Trang", "Sáng Tạo và Thiết Kế", "Cung Ứng và Tuyển Dụng", "Xuất Bản và In Ấn", "Quản Lý Cơ Sở Vật Chất", "AI, Blockchain và Dịch Vụ Deep Tech", "Dịch Vụ Nghiên Cứu", "Dịch Vụ Tài Chính", "Chăm Sóc Sức Khỏe", "Vật Liệu và Khai Thác", "Công Nghiệp Tiện Ích", "Dịch Vụ Chuyên Nghiệp" ];
  const handleCheckboxChange = (value, setSelected) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };
  const filteredJobsData = jobsData;

  const filteredFields = fields.filter(field =>
    field.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className='body'>
      <div class="body-header">
        <div class="search-bar">
          <input type="text" placeholder="Tất cả thành phố" />
          <input type="text" placeholder="chuyen vien phan tich nghiep vu" />
          <button>Tìm Kiếm</button>
        </div>
      </div>
      <div>
        <h3>5 việc làm chuyen vien phan tich nghiep vu tại Việt Nam</h3>
        <div className="filter-container">
          <div className="filter-button-container">
            <div className="filter-left">
              {[
                { label: "Cấp Bậc", key: "levels", options: levels, state: selectedLevels, setState: setSelectedLevels },
                { label: "Hình Thức", key: "workModes", options: workModes, state: selectedWorkModes, setState: setSelectedWorkModes },
                { label: "Mức Lương", key: "salary" },
                { label: "Lĩnh Vực", key: "fields", options: fields, state: selectedFields, setState: setSelectedFields }
              ].map(({ label, key, options, state, setState }) => (
                <div key={key} className="filter-dropdown-container">
                  <button 
                    className="filter-dropdown-button"
                    onClick={() => setDropdown(dropdown === key ? null : key)}
                  >
                    {label}
                  </button>
                  {dropdown === key && options && (
                    <div className="filter-dropdown-menu">
                      {options.map(option => (
                        <label key={option} className="filter-dropdown-label">
                          <input
                            type="checkbox"
                            checked={state.includes(option)}
                            onChange={() => handleCheckboxChange(option, setState)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {dropdown === "salary" && key === "salary" && (
                    <div className="filter-salary-range">
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="filter-salary-input"
                      />
                      <p>{salary} USD</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button 
              className="filter-button"
              onClick={() => setOpenFilter("all")}
            >
              Bộ Lọc
            </button>
          </div>
      
          {openFilter && (
            <div className="filter-overlay">
              <div className="filter-modal">
                <div className="filter-modal-header">
                  <h2 className="filter-modal-title">Bộ Lọc</h2>
                  <button 
                    className="filter-modal-close-button"
                    onClick={() => setOpenFilter(null)}
                  >
                    X
                  </button>
                </div>

                <div>
                  <h3 className="filter-modal-section-title">Cấp Bậc</h3>
                  {levels.map(level => (
                    <label key={level} className="filter-modal-label">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleCheckboxChange(level, setSelectedLevels)}
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h3 className="filter-modal-section-title">Hình Thức</h3>
                  {workModes.map(mode => (
                    <label key={mode} className="filter-modal-label">
                      <input
                        type="checkbox"
                        checked={selectedWorkModes.includes(mode)}
                        onChange={() => handleCheckboxChange(mode, setSelectedWorkModes)}
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h3 className="filter-modal-section-title">Mức Lương</h3>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="filter-salary-input"
                  />
                  <p>{salary} USD</p>
                </div>
                <h3 className="filter-modal-section-title">Lĩnh Vực</h3>
                <input type="text"placeholder="Tìm kiếm..."className="filter-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="filter-modal-container">
                 
                  {filteredFields.map(field => (
                    <label key={field} className="filter-modal-label">
                      <input
                        type="checkbox"
                        checked={selectedFields.includes(field)}
                        onChange={() => handleCheckboxChange(field, setSelectedFields)}
                      />
                      <span>{field}</span>
                    </label>
                  ))}
                </div>
                <div>
                <button className="filter-button">Áp dụng</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container-job-level">
          <div className="job-level-col-4-left">
            {filteredJobsData.map((category, index) => (
              <div key={index} className="job-category">
                
                {category.jobs.map((job, i) => (
                  <div 
                    key={i} 
                    className="job-card"
                    onClick={() => setSelectedJob(job)}
                  >
                    <p><strong>Đăng:</strong> {job.postedTime}</p>
                    <h3>{job.title}</h3>
                    <p><strong>Công ty:</strong> {job.company}</p>
                    <p><strong>Địa điểm:</strong> {job.location}</p>
                    {job.salary && <p><strong>Lương:</strong> {job.salary}</p>}
                    {job.benefits && (
                      <ul>
                        {job.benefits.map((benefit, bIndex) => (
                          <li key={bIndex}>{benefit}</li>
                        ))}
                      </ul>
                    )}
                    <div className="tags">
                      {job.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="job-level-col-6-right">
          {selectedJob ? (
            <div className="job-detail">
             <div className='job-logo'> <img src={selectedJob.logo} alt="Company Logo" />
              <div className='job-detail-right'>
              <h3>{selectedJob.title}</h3>
              <p><strong>Đăng:</strong> {selectedJob.postedTime}</p>
              <p><strong>Công ty:</strong> {selectedJob.company}</p>
              <p><strong>Địa điểm:</strong> {selectedJob.location}</p>
              {selectedJob.salary && <p><strong>Lương:</strong> {selectedJob.salary}</p>}
              </div>
              </div>
              <button className="apply-button">Ứng Tuyển</button>
             
              <div className="job-detail-content">
              
                <ul>
                  {selectedJob.jobDescription.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <h5>Must-Have:</h5>
                <ul>
                  {selectedJob.jobRequirements.mustHave.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <h5>Nice-To-Have:</h5>
                <ul>
                  {selectedJob.jobRequirements.niceToHave.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <p><strong>Initial Start-Up:</strong> {selectedJob.whyYouWillLove.initialStartUp}</p>
                <p><strong>Lương:</strong> {selectedJob.whyYouWillLove.salary}</p>
              
                <ul>
                  {selectedJob.whyYouWillLove.yourBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <ul>
                  {selectedJob.whyYouWillLove.workingEnvironment.map((env, index) => (
                    <li key={index}>{env}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <h2>Chọn công việc để xem chi tiết</h2>
          )}
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
