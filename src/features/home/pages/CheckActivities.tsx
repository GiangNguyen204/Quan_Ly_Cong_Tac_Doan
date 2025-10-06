import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import StudentActivitiesLookup from '@components/common/checkActivites/StudentActivitiesLookup';
import '@styles/home/CheckAtivities.scss';
import { Spin } from 'antd';
import React, { useState } from 'react';

const CheckActivites = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchedStudentId, setSearchedStudentId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSuccess(false);
    setSearchedStudentId(null);
    if (/^\d*$/.test(value)) {
      setStudentId(value);
      setError('');
    } else {
      setError('Mã sinh viên chỉ được chứa số');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (studentId.trim() === '') {
      setError('Vui lòng nhập mã sinh viên');
      return;
    }
    if (!/^\d+$/.test(studentId)) {
      setError('Mã sinh viên không hợp lệ (chỉ nhập số)');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setSearchedStudentId(studentId.trim());
    }, 1200);
  };

  const handleGoBack = () => {
    setSearchedStudentId(null);
    setStudentId('');
    setSuccess(false);
    setError('');
  };

  // Nếu đã search thành công, hiển thị StudentActivitiesLookup
  if (searchedStudentId) {
    return <StudentActivitiesLookup initialStudentId={searchedStudentId} onGoBack={handleGoBack} />;
  }

  return (
    <div className="relative py-12 flex flex-col items-center justify-center min-h-1/2 overflow-hidden bg-gradient-to-b from-[#e0e7ff] via-[#f0f4ff] to-[#c7d2fe] transition-all">
      <h1 className="text-3xl font-extrabold text-center text-[#1E3A8A] mb-2 drop-shadow-sm tracking-tight">
        TRA CỨU HOẠT ĐỘNG ĐOÀN
      </h1>
      <div className="w-24 h-1 bg-[#1E3A8A] mx-auto mb-6 rounded"></div>
      <div className="w-full max-w-3xl bg-white shadow-xl border border-gray-200 rounded-2xl p-8 relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Tra cứu hoạt động</h2>
        <p className="text-gray-500 text-lg text-center mb-6">
          Nhập mã sinh viên để xem lịch sử tham gia
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              value={studentId}
              onChange={handleChange}
              disabled={loading}
              placeholder="Vui lòng nhập mã sinh viên"
              className={`w-full px-4 py-4 border-2 rounded-xl outline-none backdrop-blur-sm transition-shadow shadow-sm focus:shadow-lg text-lg
                ${
                  error
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-300 animate-shake'
                    : 'border-[#1E3A8A]/30 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]/60'
                }
                ${loading ? 'bg-gray-100 opacity-70 cursor-not-allowed' : ''}
              `}
              style={{
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
            />
          </div>
          {error && <p className="text-red-500 text-sm animate-fade-in">{error}</p>}
          {success && !error && (
            <div className="flex items-center gap-2">
              <CheckOutlined className="text-green-600" style={{ color: '00A63E' }} />
              <p className="text-green-600 text-sm font-medium animate-fade-in">
                Tìm kiếm thành công!
              </p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-[#1E3A8A] text-white text-xl font-bold rounded-xl shadow-md transition transform hover:bg-[#2542ad] hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/50
              ${loading ? 'opacity-60 cursor-wait' : ''}
            `}
          >
            {loading ? <Spin /> : 'Tra cứu'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckActivites;
