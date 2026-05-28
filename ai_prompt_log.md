Prompt:
Tại sao vòng lặp bên trong em lại cho bắt đầu bằng j = i + 1? Nếu bắt đầu bằng j = i thì chuyện gì sẽ xảy ra?
AI trả lời:
    Kết luận
Dùng:
j = i + 1
để:
Không tự so sánh phần tử với chính nó
Không kiểm tra trùng lặp 2 lần
Giảm số vòng lặp
Tối ưu hiệu năng
Đây là kỹ thuật rất phổ biến khi:
tìm phần tử trùng
so sánh từng cặp
kiểm tra collision
bài toán O(n²) dùng 2 vòng lặp.

Prompt2:
AI trả lời:
Vòng lặp while bị lặp vô tận vì biến điều khiển (i) không thay đổi trong một nhánh của chương trình.
Bản chất vấn đề
Biến điều khiển phải hội tụ về điều kiện dừng.
Ở đây:
Điều kiện dừng:
i >= data.length
Muốn hội tụ thì i phải tiến dần tới data.length.
Nhưng nếu:
i đứng yên mãi
thì điều kiện dừng sẽ không bao giờ đạt được.
