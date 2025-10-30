import React, { useEffect, useState } from 'react';
import './BirthdayWish.scss';

const BirthdayWish: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [flowers, setFlowers] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Show content after animation starts
    setTimeout(() => setShowContent(true), 500);

    // Generate random flowers
    const flowerArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setFlowers(flowerArray);
  }, []);

  return (
    <div className="birthday-container">
      {/* Animated flowers falling */}
      <div className="flowers-background">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="flower"
            style={{
              left: `${flower.left}%`,
              animationDelay: `${flower.delay}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Birthday cake with candles */}
      <div className="cake-container">
        <div className="cake">
          <div className="candles">
            <div className="candle">
              <div className="flame"></div>
            </div>
            <div className="candle">
              <div className="flame"></div>
            </div>
            <div className="candle">
              <div className="flame"></div>
            </div>
          </div>
          <div className="cake-layer cake-layer-1"></div>
          <div className="cake-layer cake-layer-2"></div>
          <div className="cake-layer cake-layer-3"></div>
        </div>
      </div>

      {/* Birthday message */}
      <div className={`birthday-content ${showContent ? 'show' : ''}`}>
        <h1 className="birthday-title">🎉 Chúc Mừng Sinh Nhật! 🎉</h1>

        <div className="birthday-message">
          <p className="wish-text">
            Chúc bạn một ngày sinh nhật thật ý nghĩa và tràn đầy niềm vui! 🎂
          </p>
          <p className="wish-text">
            Mong rằng tuổi mới sẽ mang đến cho bạn nhiều sức khỏe, thành công rực rỡ trong sự nghiệp
            và hạnh phúc tràn đầy trong cuộc sống! ✨
          </p>
          <p className="wish-text">
            Cảm ơn bạn đã là một đồng nghiệp tuyệt vời, luôn nhiệt tình, hỗ trợ và mang đến năng
            lượng tích cực cho cả team! 💪
          </p>
          <p className="wish-text">
            Chúc bạn luôn giữ được nụ cười rạng rỡ, và mọi ước mơ của bạn đều sẽ trở thành hiện
            thực! 🌟
          </p>
        </div>

        <div className="flower-bouquet">
          <div className="bouquet">
            <div className="flower-big">🌹</div>
            <div className="flower-big">🌺</div>
            <div className="flower-big">🌻</div>
            <div className="flower-big">🌷</div>
            <div className="flower-big">🌹</div>
          </div>
          <div className="bouquet-wrap">
            <div className="ribbon"></div>
          </div>
        </div>

        <div className="birthday-footer">
          <p className="footer-text">Một lần nữa, chúc mừng sinh nhật! 🎊</p>
          <div className="balloons">
            <span className="balloon">🎈</span>
            <span className="balloon">🎈</span>
            <span className="balloon">🎈</span>
          </div>
        </div>
      </div>

      {/* Confetti effect */}
      <div className="confetti-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'][
                Math.floor(Math.random() * 6)
              ],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayWish;
