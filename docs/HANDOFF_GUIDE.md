# Hướng dẫn bàn giao & mở rộng Slide (Nhóm 4 người)

Bộ slide được thiết kế theo format **Blue, White & Neutral Modern Presentation** và tự động nhận diện số lượng slide mới khi các bạn thêm vào `index.html`.

## 1. Cách mở & trình chiếu
- Mở trực tiếp file `index.html` bằng trình duyệt (Chrome, Safari, Edge).
- **Phím tắt hỗ trợ thuyết trình:**
  - `→` / `Space`: Slide tiếp theo
  - `←`: Quay lại slide trước
  - `N`: Mở/đóng **Speaker Script** (kịch bản tiếng Anh theo từng slide)
  - `F`: Toàn màn hình (Fullscreen)
- **Xuất PDF:** Nhấn `Cmd + P` (hoặc `Ctrl + P`) → Chọn **Save as PDF** (nên bật *Background graphics*).

---

## 2. Cách bàn giao cho Người 2, Người 3, Người 4

Mỗi thành viên chỉ cần mở `index.html`, tìm đến dòng:
```html
<!-- TEAMMATE HANDOFF ZONE (Person 2, Person 3, Person 4) -->
```
Sau đó **copy 1 trong 6 mẫu `<section class="slide">` có sẵn** ở phía trên và dán vào bên dưới, đổi `data-slide="6"`, `data-slide="7"`, ... và sửa nội dung + `data-notes="..."` (script tiếng Anh của bạn).

### Các layout có sẵn để tái sử dụng:
1. **`layout-story`** (Slide 2): Dùng cho ví dụ/câu chuyện minh họa + ảnh cắt chữ L (`mask-l-shape`).
2. **`layout-roadmap`** (Slide 3): Chia 2 cột — bên trái tiêu đề + ảnh, bên phải 4 thẻ nội dung (`roadmap-cards`).
3. **`layout-genes`** (Slide 4): Bảng so sánh header xanh (`medical-table`) + ảnh bo tròn.
4. **`layout-personality`** (Slide 5): 3 thẻ icon bên trái + ảnh lớn kèm thẻ nổi (`floating-summary-card`) bên phải.
5. **`layout-handoff`** (Slide 6): Slide chuyển tiếp sang người nói tiếp theo hoặc slide **Thank You** cho Người 4.

### Lưu ý nhỏ cho Người 2, 3, 4:
- **Thêm ảnh:** Bỏ ảnh vào thư mục `assets/` và trỏ đường dẫn `assets/ten-anh.jpg`.
- **Tên Người 2 trên Slide 6:** Có thể click trực tiếp vào `[Speaker 2 Name]` ngay trên trình duyệt để sửa nhanh, hoặc sửa thẳng trong `index.html`.
- **Thanh tiến trình (progress dots) & số trang (`1 / 6`)** trong `app.js` sẽ tự động cập nhật khi bạn thêm `<section class="slide">`.
