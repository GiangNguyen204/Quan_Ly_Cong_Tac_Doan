import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  GraduationCap,
  Heart,
  LucideIcon,
  MapPin,
  Music,
  Search,
  Share,
  Star,
  User,
  Users,
  X,
} from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';

interface Activity {
  id: number;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  attended: boolean;
  points: number;
  icon: LucideIcon;
  iconColor: 'blue' | 'green' | 'purple' | 'red';
  description: string;
}

const fetchActivitiesByStudentId = async (
  studentId: string,
): Promise<{
  studentInfo: {
    name: string;
    studentId: string;
    class: string;
    faculty: string;
    status: string;
  } | null;
  activities: Activity[];
}> => {
  await new Promise((res) => setTimeout(res, 800));
  if (studentId !== '1571020105') {
    return {
      studentInfo: null,
      activities: [],
    };
  }
  return {
    studentInfo: {
      name: 'Nguyễn Thế Huy Hoàng',
      studentId: '1571020105',
      class: 'CNTT15-05',
      faculty: 'Khoa Công nghệ thông tin',
      status: 'Thành viên tích cực',
    },
    activities: [
      {
        id: 1,
        title: 'Hội thảo "Kỹ năng lãnh đạo trẻ"',
        startDate: '15/03/2024',
        startTime: '08:00',
        endDate: '15/03/2024',
        endTime: '11:30',
        location: 'Hội trường A',
        attended: true,
        points: 5,
        icon: Calendar,
        iconColor: 'blue',
        description: 'Chương trình tập huấn kỹ năng lãnh đạo và quản lý cho cán bộ đoàn',
      },
      {
        id: 2,
        title: 'Chiến dịch "Mùa hè xanh 2024"',
        startDate: '10/03/2024',
        startTime: '07:00',
        endDate: '20/03/2024',
        endTime: '17:00',
        location: 'Tỉnh Hà Giang',
        attended: true,
        points: 10,
        icon: Users,
        iconColor: 'green',
        description: 'Tình nguyện hỗ trợ giáo dục và y tế cho vùng sâu vùng xa',
      },
      {
        id: 3,
        title: 'Đêm nhạc "Tuổi trẻ và tương lai"',
        startDate: '05/03/2024',
        startTime: '19:00',
        endDate: '05/03/2024',
        endTime: '22:00',
        location: 'Sân khấu trung tâm',
        attended: false,
        points: 0,
        icon: Music,
        iconColor: 'purple',
        description: 'Chương trình văn nghệ chào mừng kỷ niệm thành lập Đoàn',
      },
      {
        id: 4,
        title: 'Hiến máu nhân đạo "Giọt hồng yêu thương"',
        startDate: '28/02/2024',
        startTime: '08:00',
        endDate: '28/02/2024',
        endTime: '16:00',
        location: 'Nhà văn hóa sinh viên',
        attended: true,
        points: 8,
        icon: Heart,
        iconColor: 'red',
        description: 'Chiến dịch hiến máu tình nguyện cho bệnh nhân cần truyền máu',
      },
    ],
  };
};

interface StudentActivitiesLookupProps {
  initialStudentId?: string;
  onGoBack?: () => void;
}

// Loading Skeleton Component
const ActivitySkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse flex-shrink-0"></div>
      <div className="flex-1 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 w-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
        </div>
      </div>
    </div>
  </div>
);

const LoadingSkeletons = () => (
  <div className="space-y-3">
    {[...Array(3)].map((_, index) => (
      <ActivitySkeleton key={index} />
    ))}
  </div>
);

export default function StudentActivitiesLookup({
  initialStudentId,
  onGoBack,
}: StudentActivitiesLookupProps = {}) {
  const [studentId, setStudentId] = useState(initialStudentId || '');
  const [error, setError] = useState('');
  const [searching, setSearching] = useState(false);
  const [studentInfo, setStudentInfo] = useState<null | {
    name: string;
    studentId: string;
    class: string;
    faculty: string;
    status: string;
  }>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredActivities = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return activities;
    return activities.filter(
      (activity) =>
        activity.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        activity.location.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        activity.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [activities, debouncedSearchTerm]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
  }, []);

  // Stats
  const totalActivities = activities.length;
  const attendedCount = activities.filter((a) => a.attended).length;
  const totalPoints = activities.reduce((sum, a) => sum + a.points, 0);
  const attendanceRate = totalActivities ? Math.round((attendedCount / totalActivities) * 100) : 0;

  // Auto search when initialStudentId is provided
  useEffect(() => {
    if (initialStudentId) {
      handleSearch(initialStudentId);
    }
  }, [initialStudentId]);

  const handleSearch = async (searchStudentId: string) => {
    setError('');
    setStudentInfo(null);
    setActivities([]);
    setSearching(true);

    if (!searchStudentId.trim()) {
      setError('Vui lòng nhập mã sinh viên');
      setSearching(false);
      return;
    }
    if (!/^\d+$/.test(searchStudentId)) {
      setError('Mã sinh viên không hợp lệ (chỉ nhập số)');
      setSearching(false);
      return;
    }

    const result = await fetchActivitiesByStudentId(searchStudentId.trim());
    if (!result.studentInfo) {
      setError('Không tìm thấy sinh viên có mã số này. Vui lòng kiểm tra lại mã sinh viên.');
      setSearching(false);
      return;
    }
    setStudentInfo(result.studentInfo);
    setActivities(result.activities);
    setSearching(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSearch(studentId);
  };

  const getIconColorClasses = (color: Activity['iconColor']) => {
    const colors: Record<Activity['iconColor'], string> = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      red: 'bg-red-50 text-red-600 border-red-200',
    };
    return colors[color];
  };

  const handleExportPDF = () => alert('Đang chuẩn bị xuất báo cáo PDF...');
  const handleShare = () => alert('Chức năng chia sẻ sẽ được triển khai sớm!');
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      setStudentId('');
      setStudentInfo(null);
      setActivities([]);
      setError('');
      setSearchTerm('');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen p-2 sm:p-4 lg:p-6">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes staggerIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        .animate-staggerIn {
          animation: staggerIn 0.4s ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {!studentInfo && !initialStudentId && (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 mt-8 sm:mt-12 lg:mt-16 flex flex-col gap-4 sm:gap-6 items-center border border-gray-100"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-3 animate-bounce">
                <Search size={24} />
              </div>
              <h1 className="text-2xl font-bold text-blue-700">Tra cứu hoạt động Đoàn</h1>
            </div>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Nhập mã sinh viên"
              className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl outline-none text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 transform focus:scale-[1.02]"
              disabled={searching}
            />
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
                <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 text-sm font-medium">Không tìm thấy thông tin</p>
                  <p className="text-red-600 text-xs mt-1">{error}</p>
                </div>
              </div>
            )}
            <button
              type="submit"
              disabled={searching}
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none"
            >
              {searching ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Đang tra cứu...
                </span>
              ) : (
                'Tra cứu'
              )}
            </button>
          </form>
        )}

        {studentInfo && (
          <>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 mt-2 overflow-x-auto">
              <button
                onClick={handleGoBack}
                className="hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                Tra cứu khác
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium whitespace-nowrap">Kết quả hoạt động</span>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-5 mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <User size={20} className="sm:hidden" />
                      <User size={28} className="hidden sm:block" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Star size={10} className="sm:hidden text-white" fill="white" />
                      <Star size={12} className="hidden sm:block text-white" fill="white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                      {studentInfo.name}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <CreditCard size={12} className="sm:hidden text-blue-500" />
                        <CreditCard size={14} className="hidden sm:block text-blue-500" />
                        {studentInfo.studentId}
                      </span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span className="flex items-center gap-1">
                        <GraduationCap size={12} className="sm:hidden text-blue-500" />
                        <GraduationCap size={14} className="hidden sm:block text-blue-500" />
                        <span className="truncate">{studentInfo.class}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:hidden w-full gap-2">
                  <button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 text-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Share size={16} />
                    Chia sẻ
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-100 text-blue-700 rounded-lg transition-colors text-sm"
                  >
                    <Download size={16} />
                    Xuất PDF
                  </button>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Chia sẻ"
                  >
                    <Share size={20} className="text-gray-600" />
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Xuất PDF"
                  >
                    <Download size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-blue-200">
                  <div className="text-xl sm:text-2xl font-bold text-blue-700">
                    {totalActivities}
                  </div>
                  <div className="text-xs text-blue-600 font-medium mt-1">Hoạt động</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-green-200">
                  <div className="text-xl sm:text-2xl font-bold text-green-700">
                    {attendedCount}
                  </div>
                  <div className="text-xs text-green-600 font-medium mt-1">Đã tham gia</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-yellow-200">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-700">{totalPoints}</div>
                  <div className="text-xs text-yellow-600 font-medium mt-1">Tổng điểm</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-purple-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-purple-700">
                      {attendanceRate}
                    </span>
                    <span className="text-sm font-bold text-purple-600">%</span>
                  </div>
                  <div className="text-xs text-purple-600 font-medium mt-1">Tỷ lệ tham gia</div>
                </div>
              </div>
            </div>
            <div className="w-full sm:max-w-md mb-3 sm:mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search
                    size={20}
                    className={`transition-colors ${
                      isSearching ? 'text-blue-500 animate-pulse' : 'text-gray-400'
                    }`}
                  />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border-2 border-blue-100 rounded-xl outline-none text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                  placeholder="Tìm kiếm hoạt động, địa điểm..."
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    type="button"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className="mt-2 text-sm text-gray-500">
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 border border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                      Đang tìm kiếm...
                    </span>
                  ) : (
                    <span>
                      Tìm thấy {filteredActivities.length} kết quả cho "{debouncedSearchTerm}"
                    </span>
                  )}
                </div>
              )}
            </div>
            {searching && studentInfo ? (
              <LoadingSkeletons />
            ) : (
              <div className="space-y-3">
                {filteredActivities.length === 0 ? (
                  <div className="text-center p-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    {debouncedSearchTerm ? (
                      // Empty search results
                      <div className="max-w-md mx-auto">
                        <div className="relative">
                          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                            <Search size={32} className="text-gray-400" />
                          </div>
                          <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
                              <AlertTriangle size={16} className="text-yellow-600" />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Không tìm thấy hoạt động phù hợp
                        </h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                          Không có hoạt động nào khớp với từ khóa{' '}
                          <span className="font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
                            "{debouncedSearchTerm}"
                          </span>
                        </p>

                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                              <Search size={16} className="text-blue-600" />
                              Gợi ý tìm kiếm
                            </h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Thử từ khóa ngắn gọn hơn</li>
                              <li>• Tìm theo tên địa điểm (VD: "Hội trường", "Sân khấu")</li>
                              <li>• Tìm theo loại hoạt động (VD: "Hội thảo", "Tình nguyện")</li>
                              <li>• Kiểm tra lỗi chính tả</li>
                            </ul>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={clearSearch}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 text-sm font-medium shadow-sm"
                            >
                              <X size={16} />
                              Xóa bộ lọc
                            </button>
                            <button
                              onClick={() => {
                                const suggestions = [
                                  'hội thảo',
                                  'tình nguyện',
                                  'văn nghệ',
                                  'hiến máu',
                                ];
                                const randomSuggestion =
                                  suggestions[Math.floor(Math.random() * suggestions.length)];
                                setSearchTerm(randomSuggestion);
                              }}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm font-medium"
                            >
                              <Search size={16} />
                              Thử gợi ý
                            </button>
                          </div>

                          {activities.length > 0 && (
                            <div className="pt-2 border-t border-gray-200">
                              <p className="text-xs text-gray-500 text-center">
                                Sinh viên này có {activities.length} hoạt động.
                                <button
                                  onClick={clearSearch}
                                  className="text-blue-600 hover:text-blue-700 font-medium ml-1 underline"
                                >
                                  Xem tất cả
                                </button>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : activities.length === 0 ? (
                      // No activities at all
                      <div className="max-w-sm mx-auto">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center">
                          <Calendar size={40} className="text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Chưa có hoạt động
                        </h3>
                        <p className="text-gray-500 mb-4">
                          Sinh viên này chưa tham gia hoạt động Đoàn nào hoặc chưa được ghi nhận.
                        </p>
                        <p className="text-xs text-gray-400">
                          Liên hệ Ban chấp hành Đoàn nếu cần hỗ trợ
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  filteredActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={activity.id}
                        onClick={() => setSelectedActivity(activity)}
                        className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group active:scale-[0.98] animate-staggerIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform group-hover:scale-110 ${getIconColorClasses(
                              activity.iconColor,
                            )}`}
                          >
                            <Icon size={18} className="sm:hidden" />
                            <Icon size={22} className="hidden sm:block" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base leading-tight">
                                {activity.title}
                              </h3>
                              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 self-start sm:self-auto">
                                {activity.attended ? (
                                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                                    <CheckCircle size={12} className="sm:hidden" />
                                    <CheckCircle size={14} className="hidden sm:block" />
                                    <span className="hidden sm:inline">Đã tham gia</span>
                                    <span className="sm:hidden">OK</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium animate-pulse">
                                    <AlertTriangle size={12} className="sm:hidden" />
                                    <AlertTriangle size={14} className="hidden sm:block" />
                                    <span className="hidden sm:inline">Chưa điểm danh</span>
                                    <span className="sm:hidden">Pending</span>
                                  </div>
                                )}
                                <div
                                  className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
                                    activity.points > 0
                                      ? 'bg-yellow-100 text-yellow-700'
                                      : 'bg-gray-100 text-gray-500'
                                  }`}
                                >
                                  +{activity.points}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-600">
                              <span className="flex items-center gap-1.5">
                                <Clock size={12} className="sm:hidden text-gray-400" />
                                <Clock size={14} className="hidden sm:block text-gray-400" />
                                <span className="truncate">
                                  {activity.startDate} • {activity.startTime}
                                </span>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin size={12} className="sm:hidden text-gray-400" />
                                <MapPin size={14} className="hidden sm:block text-gray-400" />
                                <span className="truncate">{activity.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </>
        )}

        {selectedActivity && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
            onClick={() => setSelectedActivity(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 transform animate-slideIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getIconColorClasses(
                      selectedActivity.iconColor,
                    )}`}
                  >
                    {(() => {
                      const Icon = selectedActivity.icon;
                      return <Icon size={24} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{selectedActivity.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {selectedActivity.attended ? (
                        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          <CheckCircle size={12} />
                          Đã tham gia
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          <AlertTriangle size={12} />
                          Chưa điểm danh
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          selectedActivity.points > 0
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        +{selectedActivity.points} điểm
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} className="text-gray-400" />
                  <span>
                    {selectedActivity.startDate} lúc {selectedActivity.startTime}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{selectedActivity.location}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Mô tả chi tiết</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedActivity.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
