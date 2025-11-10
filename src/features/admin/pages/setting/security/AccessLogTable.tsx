// src/pages/settings/security/AccessLogTable.tsx
import React from 'react';
import { AccessLog } from './types';

interface Props {
  logs: AccessLog[];
}

const AccessLogTable: React.FC<Props> = ({ logs }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">📜 Nhật ký truy cập</h2>
      <p className="text-sm text-gray-500 mb-4">Theo dõi các lần đăng nhập gần đây vào hệ thống.</p>

      <div className="overflow-x-auto border border-gray-100 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="text-left py-2 px-3">Người dùng</th>
              <th>Địa chỉ IP</th>
              <th>Thiết bị</th>
              <th>Thời gian</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2 px-3 text-gray-800">{log.user}</td>
                <td className="text-center text-gray-600">{log.ip}</td>
                <td className="text-center text-gray-600">{log.device}</td>
                <td className="text-center text-gray-600">{log.time}</td>
                <td className="text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      log.status === 'success'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-red-50 text-red-600 border border-red-100'
                    }`}
                  >
                    {log.status === 'success' ? 'Thành công' : 'Thất bại'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessLogTable;
