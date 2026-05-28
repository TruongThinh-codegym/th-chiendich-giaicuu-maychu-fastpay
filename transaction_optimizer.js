/**
 * HỆ THỐNG QUÉT GIAO DỊCH - FASTPAY (LEGACY CODE)
 */
let transactions = [
    { id: "T1", userId: "U01", amount: 500, status: "completed" },
    { id: "T2", userId: "U02", amount: 200, status: "pending" },
    { id: "T3", userId: "U01", amount: 500, status: "completed" }, // Trùng lặp với T1
    { id: "T4", userId: "U03", amount: 150, status: "pending" }
];

// YÊU CẦU 1: Xử lý giao dịch đang chờ (LỖI INFINITE LOOP NGUY HIỂM)
function processPending(data) {
    let i = 0;
    while (i < data.length) {
        if (data[i].status === "pending") {
            console.log("Đang xử lý giao dịch:", data[i].id);
            i++;
            // LỖI: Lập trình viên quên không tăng i ở nhánh này
            // Server sẽ kẹt mãi mãi ở giao dịch T2
        } else {
            i++; 
        }
    }
}

// YÊU CẦU 2: Tìm giao dịch trùng lặp (LỖI TỐI ƯU HIỆU NĂNG - O(n^2) quá chậm)
function findDuplicates(data) {
    let duplicateIds = [];
    let loopCount = 0; // Biến đo số lần lặp
    
    for (let i = 0; i < data.length; i++) {
        // j sẽ bắt đầu bằng let j = i + 1
        for (let j = i + 1 ; j < data.length; j++) { 
            loopCount++; // Đếm xem máy tính phải tính bao nhiêu lần
            // Lỗi logic: i và j có thể giống nhau, quét lại những phần tử đã xét
            if (data[i].userId === data[j].userId && data[i].amount === data[j].amount) {
                if (!duplicateIds.includes(data[i].id)) {
                    duplicateIds.push(data[i].id);
                }
            }
        }
    }
    console.log(`Số vòng lặp đã chạy: ${loopCount}`);
    return duplicateIds;
}