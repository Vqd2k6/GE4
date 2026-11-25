# Prompt tạo lại ảnh cho đồng bộ phong cách

Hiện deck trộn 3 phong cách ảnh: **3D hoạt hình** (01_01, 01_03, 02_01, 02_02, 04_01, 04_03, 04_04, 03_01),
**vẽ tay phẳng** (01_02, 03_02, 03_03, 02_03, 01_04) và **2D mềm** (03_04). Nên đưa tất cả về **phong cách 3D** vì đa số ảnh đang theo kiểu này.

## Phần chung — dán vào đầu MỌI prompt

```
3D cartoon illustration, soft clay-like render, friendly rounded characters,
pastel blue and white color palette with small teal and coral accents,
soft studio lighting, clean light-blue background, no text, no logos,
16:9 landscape, high detail, consistent style with a children's educational animation
```

## Ảnh cần tạo lại (ưu tiên từ trên xuống)

| File (giữ nguyên tên để không phải sửa HTML) | Dùng ở slide | Prompt riêng (ghép sau phần chung) |
|---|---|---|
| `01_02_two_twin_sisters.jpg` | 2 | Two teenage twin sisters who look alike sharing one bedroom split in two halves: left half colorful and messy, one sister laughing and waving while video-chatting with friends; right half calm and tidy, the other sister reading a book quietly with headphones by the window |
| `01_06_dna_or_life.jpg` (**ảnh mới**) | 6 | The same twin sisters standing back to back; behind one a glowing blue DNA helix, behind the other small icons of friends, school, travel and a trophy; a big soft question mark between them |
| `03_02_family_environment.jpg` | 12 | A warm living room, two parents sitting on a sofa reading a picture book with their smiling young child, cozy plants and bookshelf |
| `03_03_friends_school.jpg` | 13 | Three diverse teenage friends working together at a school table outdoors, laptop, drawings and books, a school building behind them |
| `02_03_confidence_growth.jpg` | 9 | A shy girl confidently speaking in front of a small group of supportive classmates who clap, classroom setting |
| `01_04_what_is_personality.jpg` | 5 | A teenage girl in the center surrounded by three floating bubbles: a light bulb (thoughts), a heart (feelings), two friends talking (behaviors) |
| `03_04_life_experiences.jpg` | 14 | A teenage boy with a backpack on a winding path, floating icons of a globe, a trophy, a mountain flag and a paper plane, light switches attached to a soft DNA ribbon in the sky |

Sau khi có `01_06_dna_or_life.jpg`, mở `index-v2.html`, tìm slide 6 (`data-slide="5"`) và đổi
`assets/01_02_two_twin_sisters.jpg` thành `assets/01_06_dna_or_life.jpg` để bỏ ảnh lặp.

## Mẹo
- Tạo tất cả ảnh trong **cùng một phiên** với cùng phần prompt chung để giữ phong cách.
- Kích thước khuyến nghị: 1376×768 (giống ảnh hiện tại), JPG < 1 MB.
- Ảnh `04_04_thank_you_group.jpg` (2 nam, 2 nữ) nên khớp thành phần thật của nhóm.
