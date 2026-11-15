# Nature vs. Nurture — Interactive Presentation Deck

> **Pathway 3 Group Presentation** | **Part 1: Introduction** (Data Science Student Edition)  
> Thiết kế theo phong cách **Blue, White & Neutral Modern Medical/Tech**, có hiệu ứng chuyển cảnh, họa tiết Data Science + DNA, ảnh minh họa 3D đồng bộ và chế độ ghi chú lời thoại tiếng Anh.

---

## Cấu trúc thư mục

```text
nature-vs-nurture-slides/
├── README.md                  # Hướng dẫn mở, thuyết trình và bàn giao
├── index.html                 # File trình chiếu chính (hiện có 6 slide Phần 1)
├── css/
│   └── styles.css             # Giao diện, bảng màu, khung ảnh cắt vát/chữ L & animation
├── js/
│   └── app.js                 # Điều hướng slide, phím tắt, Speaker Notes & tương tác AA/Aa/aa
├── assets/                    # Ảnh minh họa 3D (đồng bộ tông xanh-trắng)
│   ├── hero-dna.jpg
│   ├── two-friends.jpg
│   ├── genes-blueprint.jpg
│   └── personality-prism.jpg
└── docs/
    └── HANDOFF_GUIDE.md       # Hướng dẫn chi tiết cho Người 2, 3, 4 thêm slide
```

---

## Cách mở và trình chiếu

### Cách 1: Mở trực tiếp (Nhanh nhất)
1. Vào thư mục `nature-vs-nurture-slides/`.
2. Nhấn đúp chuột vào file **`index.html`** (hoặc chạy `open index.html` trong Terminal) để mở bằng **Google Chrome**, **Safari**, hoặc **Microsoft Edge**.

### Cách 2: Chạy bằng Local Server (Khuyên dùng khi thuyết trình/bàn giao)
Mở Terminal tại thư mục `nature-vs-nurture-slides/` và chạy một trong các lệnh sau:

```bash
# Dùng Python hệ thống của macOS
/usr/bin/python3 -m http.server 8080

# Hoặc dùng Node.js
npx serve -l 8080 .
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8080`

---

## Phím tắt khi thuyết trình

| Phím / Thao tác | Chức năng |
| :--- | :--- |
| `→` hoặc `Space` | Chuyển sang slide tiếp theo |
| `←` | Quay lại slide trước |
| `N` | Bật / tắt **Speaker Script** (lời thoại tiếng Anh theo từng slide để luyện tập) |
| `F` | Bật / tắt chế độ toàn màn hình (**Fullscreen**) |
| Vuốt trái / phải | Chuyển slide trên màn hình cảm ứng |

---

## Xuất sang PDF (nộp bài hoặc dự phòng)

1. Mở `index.html` trên **Google Chrome**.
2. Nhấn **`Cmd + P`** (macOS) hoặc **`Ctrl + P`** (Windows).
3. Ở mục **Destination**, chọn **Save as PDF**.
4. Chọn **Layout: Landscape** và bật **Background graphics** (trong *More settings*) để giữ nguyên màu nền & họa tiết.

---

## Bàn giao cho 3 thành viên còn lại

Khi gửi cho **Người 2 (Genetic Influence)**, **Người 3 (Environmental Influence)** và **Người 4 (Conclusion)**, bạn chỉ cần nén cả thư mục `nature-vs-nurture-slides/` thành file `.zip` và gửi cho nhóm.

- Các bạn chỉ cần mở `index.html`, tìm đến khu vực `TEAMMATE HANDOFF ZONE`, và copy-paste các mẫu `<section class="slide">` có sẵn.
- Xem hướng dẫn từng bước tại [`docs/HANDOFF_GUIDE.md`](docs/HANDOFF_GUIDE.md).
