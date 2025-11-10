// src/pages/settings/notification/TemplateManager.tsx
import React, { useState } from 'react';
import { NotificationTemplate } from './types';

interface Props {
  templates: NotificationTemplate[];
  onChange: (templates: NotificationTemplate[]) => void;
}

const TemplateManager: React.FC<Props> = ({ templates, onChange }) => {
  const [selected, setSelected] = useState<NotificationTemplate | null>(null);

  const handleAdd = () => {
    const newTemplate: NotificationTemplate = {
      id: Date.now(),
      name: 'Mẫu mới',
      subject: '',
      content: '',
    };
    onChange([...templates, newTemplate]);
    setSelected(newTemplate);
  };

  const handleSave = (updated: NotificationTemplate) => {
    onChange(templates.map((t) => (t.id === updated.id ? updated : t)));
    setSelected(null);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🧩 Mẫu thông báo</h2>
      <p className="text-sm text-gray-500 mb-4">
        Quản lý nội dung mẫu thông báo cho các loại sự kiện.
      </p>

      {/* Danh sách mẫu */}
      <div className="border border-gray-200 rounded-lg">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="flex justify-between items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-gray-800">{tpl.name}</p>
              <p className="text-xs text-gray-500">{tpl.subject}</p>
            </div>
            <button
              className="text-xs text-blue-600 hover:underline"
              onClick={() => setSelected(tpl)}
            >
              Chỉnh sửa
            </button>
          </div>
        ))}
        <div className="p-3">
          <button onClick={handleAdd} className="text-sm text-blue-600 hover:underline">
            + Thêm mẫu thông báo
          </button>
        </div>
      </div>

      {/* Form chỉnh sửa */}
      {selected && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-700 mb-3">✏️ Chỉnh sửa mẫu: {selected.name}</h3>

          <div className="space-y-3 text-sm">
            <input
              type="text"
              placeholder="Tên mẫu"
              value={selected.name}
              onChange={(e) => setSelected({ ...selected, name: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Tiêu đề (Subject)"
              value={selected.subject}
              onChange={(e) => setSelected({ ...selected, subject: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <textarea
              placeholder="Nội dung thông báo (có thể dùng biến {{name}}, {{branch}}, ...)"
              rows={4}
              value={selected.content}
              onChange={(e) => setSelected({ ...selected, content: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelected(null)}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm"
              >
                Hủy
              </button>
              <button
                onClick={() => handleSave(selected)}
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateManager;
