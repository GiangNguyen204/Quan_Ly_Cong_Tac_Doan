// src/pages/settings/notification/ChannelConfigSection.tsx
import React from 'react';
import { NotificationChannel } from './types';

interface Props {
  channels: NotificationChannel;
  onChange: (channels: NotificationChannel) => void;
}

const ChannelConfigSection: React.FC<Props> = ({ channels, onChange }) => {
  const toggle = (key: keyof NotificationChannel) => {
    onChange({ ...channels, [key]: !channels[key] });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">📡 Kênh gửi thông báo</h2>
      <p className="text-sm text-gray-500 mb-4">
        Chọn kênh sẽ được dùng để gửi thông báo hệ thống.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <label className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer">
          <span>Email</span>
          <input
            type="checkbox"
            checked={channels.email}
            onChange={() => toggle('email')}
            className="w-4 h-4 accent-blue-600"
          />
        </label>

        <label className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer">
          <span>SMS</span>
          <input
            type="checkbox"
            checked={channels.sms}
            onChange={() => toggle('sms')}
            className="w-4 h-4 accent-blue-600"
          />
        </label>

        <label className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer">
          <span>Thông báo hệ thống</span>
          <input
            type="checkbox"
            checked={channels.push}
            onChange={() => toggle('push')}
            className="w-4 h-4 accent-blue-600"
          />
        </label>
      </div>
    </div>
  );
};

export default ChannelConfigSection;
