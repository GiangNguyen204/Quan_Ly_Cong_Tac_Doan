<h2 align="center">
    <a href="https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin">
    🎓 Khoa Công Nghệ Thông Tin – Trường Đại học Đại Nam
    </a>
</h2>
<h2 align="center">
   🚀 Hệ Thống Web Quản Lý Công Tác Đoàn
</h2>

<div align="center">
    <p align="center">
        <img width="170"  alt="AIoTLab Logo" src="https://github.com/user-attachments/assets/722ef6fe-9b09-41f4-9d58-a752e2be9da4" />
        <img width="180"  alt="FIT DNU Logo" src="https://github.com/user-attachments/assets/38f342e5-4c81-4d22-b1d0-985cf91c702c" />
        <img width="200"  alt="DaiNam University" src="https://github.com/user-attachments/assets/11138726-5355-4c53-9fdb-bec177681ae0" />
    </p>

[![Faculty of Information Technology](https://img.shields.io/badge/Faculty%20of%20Information%20Technology-blue?style=for-the-badge)](https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin)
[![DaiNam University](https://img.shields.io/badge/DaiNam%20University-orange?style=for-the-badge)](https://dainam.edu.vn)
[![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React.js-blue?style=for-the-badge)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-lightblue?style=for-the-badge)](https://tailwindcss.com/)
</div>

---

1. GIỚI THIỆU HỆ THỐNG
-----------------------

Hệ thống Web Quản lý Công tác Đoàn được xây dựng nhằm số hoá các nghiệp vụ chính của Liên chi Đoàn Khoa Công nghệ Thông tin – Trường Đại học Đại Nam.

Mục tiêu:
- Cung cấp cổng thông tin tập trung về công tác Đoàn: giới thiệu, tin tức, hoạt động, liên hệ.
- Hỗ trợ đoàn viên tra cứu lịch sử tham gia hoạt động dựa trên mã sinh viên, làm minh chứng cho điểm rèn luyện và xét khen thưởng.
- Hỗ trợ Ban Chấp hành quản lý danh sách cán bộ Đoàn, nhiệm kỳ, chi đoàn, thông tin liên hệ.
- Tạo nền tảng kỹ thuật có khả năng mở rộng, kết nối API với các hệ thống quản lý khác của nhà trường.

Các nhóm người dùng chính:
- Đoàn viên: xem tin tức, tra cứu hoạt động, gửi góp ý/liên hệ.
- Cán bộ Đoàn: quản lý hoạt động, danh sách tham gia, dữ liệu chi đoàn.
- Quản trị viên (Admin): quản lý tài khoản, cấu hình năm học, khoá, danh mục hoạt động và phân quyền.


2. CÔNG NGHỆ SỬ DỤNG
---------------------

Frontend:
- React.js: xây dựng giao diện người dùng theo mô hình component.
- Tailwind CSS: thiết kế giao diện hiện đại, responsive, dùng utility class.
- HTML5/CSS3/JavaScript (ES6+).

Backend:
- Node.js (Express.js): xây dựng REST API, xử lý logic nghiệp vụ, phân quyền.
- Mô tả API bằng Swagger/OpenAPI: sinh tài liệu API, test trực tiếp các endpoint.

Công cụ lập trình:
- Visual Studio / Visual Studio Code: soạn thảo, quản lý và gỡ lỗi mã nguồn.
- Git: quản lý version mã nguồn.

Dữ liệu (minh hoạ):
- Lưu trữ thông tin đoàn viên, hoạt động, tham gia, BCH chi đoàn và liên hệ dưới dạng CSDL (SQL/noSQL) hoặc dữ liệu JSON/API mẫu tuỳ môi trường triển khai.


3. MỘT SỐ HÌNH ẢNH HỆ THỐNG
----------------------------

(Ảnh minh hoạ, bạn có thể thay đường dẫn/ảnh thật trong repo của mình)

- Giao diện đăng nhập hệ thống Quản lý Công tác Đoàn
  + File: login_demo.jpg
  + Nội dung: giao diện chia làm hai phần – bên trái giới thiệu Đoàn Thanh niên và lợi ích hệ thống, bên phải là thẻ đăng nhập với 3 tab: Đoàn viên, Cán bộ Đoàn, Admin.

- Trang chủ cổng thông tin Liên chi Đoàn
  + File: home_demo.jpg
  + Nội dung: banner sinh viên CNTT, thanh menu (Trang chủ, Tra cứu hoạt động Đoàn, BCH chi đoàn, Liên hệ), các khối giới thiệu và tin tức dạng thẻ.

- Giao diện Tra cứu hoạt động Đoàn
  + File: tracuu_demo.jpg
  + Nội dung: thẻ tra cứu theo mã sinh viên, hiển thị danh sách hoạt động đã tham gia (tên hoạt động, thời gian, vai trò).

- Trang hiển thị Ban Chấp Hành chi đoàn
  + File: bch_demo.jpg
  + Nội dung: lưới thẻ thông tin cán bộ Đoàn (họ tên, chức vụ, chi đoàn, email, số điện thoại) cùng bộ lọc theo nhiệm kỳ, chi đoàn.

- Trang Liên hệ – Góp ý
  + File: lienhe_demo.jpg
  + Nội dung: biểu mẫu gửi góp ý, thắc mắc (họ tên, email, nội dung), kèm thông tin liên hệ văn phòng Liên chi Đoàn.


4. HƯỚNG DẪN CÀI ĐẶT & TRIỂN KHAI
----------------------------------

Yêu cầu hệ thống:
- Node.js cài đặt trên máy (phiên bản LTS).
- Trình duyệt hiện đại (Chrome/Edge/Firefox).
- Visual Studio hoặc Visual Studio Code để lập trình và chạy dự án.

Bước 1: Clone dự án
- Mở terminal và chạy:
  git clone https://github.com/<username>/<ten-repo-quan-ly-doan>.git
  cd <ten-repo-quan-ly-doan>

Bước 2: Cài đặt thư viện
- Nếu frontend và backend nằm chung:
  npm install
- Nếu tách riêng:
  - Vào thư mục frontend:
    cd frontend
    npm install
  - Vào thư mục backend:
    cd backend
    npm install

Bước 3: Cấu hình backend (Node.js)
- Kiểm tra file cấu hình (ví dụ: .env hoặc config.js) gồm:
  - PORT (cổng backend, ví dụ: 5000)
  - Cấu hình kết nối CSDL (nếu dùng)
- Khởi chạy backend:
  npm start
- Truy cập Swagger UI (nếu có cấu hình): http://localhost:5000/api-docs

Bước 4: Cấu hình frontend (React.js)
- Trong thư mục frontend, chỉnh sửa biến môi trường (ví dụ: VITE_API_URL hoặc REACT_APP_API_URL) trỏ đến URL backend:
  http://localhost:5000
- Khởi động frontend:
  npm run dev
- Truy cập giao diện web:
  http://localhost:3000

Bước 5: Kiểm tra hệ thống
- Đăng nhập với vai trò phù hợp (Đoàn viên / Cán bộ Đoàn / Admin).
- Thử:
  + Tra cứu hoạt động Đoàn theo mã sinh viên.
  + Xem danh sách BCH chi đoàn.
  + Xem tin tức và thử gửi liên hệ/góp ý.


5. LIÊN HỆ
-----------

Sinh viên thực hiện:
- Họ tên: Nguyễn Thúy Hằng
- Khoa: Công Nghệ Thông Tin – Trường Đại học Đại Nam

Giảng viên hướng dẫn:
- ThS. Lê Trung Hiếu
- KS. Nguyễn Thái Khánh

Thông tin liên hệ:
- Khoa Công Nghệ Thông Tin – Trường Đại học Đại Nam
- Website: https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin
- (Bạn có thể bổ sung thêm email, số điện thoại hoặc Facebook cá nhân/LCĐ nếu cần)

