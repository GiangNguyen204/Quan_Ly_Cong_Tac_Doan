import SectionLienHe from '@components/common/home/SectionLienHe';

const Footer = () => {
  return (
    <>
      <SectionLienHe />
      <footer
        className="w-full text-white py-2"
        style={{
          backgroundColor: '#1E3A8A',
          fontFamily:
            'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div className="w-full text-right text-md leading-relaxed pr-6">
          <p>Địa chỉ: Số 1, Phố Xốm, Phường Phú Lương, Thành phố Hà Nội</p>
          <p>Được sử dụng bởi Liên Chi Đoàn khoa Công nghệ thông tin trường Đại học Đại Nam</p>
          <p>Bản quyền thuộc về Liên chi Đoàn Khoa Công nghệ thông tin trường Đại học Đại Nam</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
